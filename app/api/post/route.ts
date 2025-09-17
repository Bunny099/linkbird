
import { GoogleGenAI } from "@google/genai";
import { db } from "@/db";
import { post_generator } from "@/db/schema";
import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { postPrompt } from "@/prompts/post";
import { eq } from "drizzle-orm";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })


export async function GET(req: NextRequest) {
    try {

        const session = await auth.api.getSession({ headers: req.headers })
        if (!session) {
            return NextResponse.json("Unauthorized", { status: 401 })
        }
        const userId = session?.user.id
        const data = await db.select({
            id: post_generator.userId,

            generatedPosts: post_generator.generatedPosts
        }).from(post_generator).where(eq(post_generator.userId, userId))
        return NextResponse.json(data)
    } catch (err) {
        return NextResponse.json("Server Error", { status: 500 })
    }
}
export async function POST(req: NextRequest) {
    try {

        const session = await auth.api.getSession({ headers: req.headers })
        if (!session) {
            return NextResponse.json("Unauthorized", { status: 401 })
        }
        const userId = session?.user.id
        const { topic, count, tone } = await req.json();
        if (!topic || !count || !tone) {
            return NextResponse.json("All fields are required!", { status: 401 })
        }
        let prompt = `
        ${postPrompt}
        Topic: ${topic},
        Tone: ${tone},
        Number of post: ${count}
        `
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        })
        const rawText =
            response.text ??
            response.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
        if (!rawText) {
            console.error("Gemini response error:", response);
            return NextResponse.json({ error: "Ai server error!" }, { status: 502 })
        }
        let cleaned = rawText.replace(/```json|```/gi, "").trim();
        let data = JSON.parse(cleaned)
        await db.insert(post_generator).values({
            userId: userId,
            topic: data.topic,
            tone: data.tone,
            count: data.count,
            generatedPosts: data.generatedPosts
        })

        return NextResponse.json(data)

    } catch (err) {
        return NextResponse.json("server Error", { status: 500 })
    }
}