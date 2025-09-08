
import { db } from "@/db";
import { User } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET() {
    const allUsers = await db.select().from(User);
    return NextResponse.json(allUsers)
}
export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { email, password,name,image, } = body;
        if (!email || !password || !name || !image) {
            return NextResponse.json({ message: "Please provide valif field!" }, { status: 203 })
        }
        const newUser = await db.insert(User).values({
            name, email,password,image
        }).returning();
        return NextResponse.json(newUser, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Server error!" }, { status: 500 })
    }
}