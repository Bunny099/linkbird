
import { GoogleGenAI } from "@google/genai";
import { db } from "@/db";
import { profile_analysis } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { auth } from "@/lib/auth"
import { LINKEDIN } from "@/prompts/linkedin";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
export async function GET(req: NextRequest) {
    try {
        const session = await auth.api.getSession({ headers: req.headers });
        if (!session) {
            return NextResponse.json("Unauthorized", { status: 401 })
        }
        const userId = session?.user.id


        const data = await db.select().from(profile_analysis).where(eq(profile_analysis.userId, userId)).orderBy(desc(profile_analysis.createdAt))

        return NextResponse.json(data)
    } catch (err) {
        return NextResponse.json({error:"server error"}, { status: 500 })
    }

}


export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const { heading, aboutMe, experience } = await req.json();

    const prompt = `
      ${LINKEDIN}
      Heading: ${heading},
      aboutMe: ${aboutMe},
      experience: ${experience}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const rawText =
      response.text ??
      response.candidates?.[0]?.content?.parts?.[0]?.text ??
      null;

    if (!rawText) {
      console.error("Gemini response error:", response);
      return NextResponse.json(
        { error: "AI server error" },
        { status: 502 } 
      );
    }

    let cleaned = rawText.replace(/```json|```/gi, "").trim();
    let suggestion;

    try {
      suggestion = JSON.parse(cleaned);
    } catch (err) {
      console.error("JSON parse failed:", cleaned);
      return NextResponse.json(
        { error: "AI response was not valid JSON" },
        { status: 502 }
      );
    }

    await db.insert(profile_analysis).values({
      userId,
      heading,
      aboutMe,
      experience,
      suggestedHeading: suggestion.suggestedHeading,
      suggestedAboutme: suggestion.suggestedAboutme,
      suggestedExperience: suggestion.suggestedExperience,
    });

    return NextResponse.json(suggestion);
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
