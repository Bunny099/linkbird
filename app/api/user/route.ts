
import { db } from "@/db";
import { user } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    const allUsers = await db.select().from(user);
    return NextResponse.json(allUsers)
}
