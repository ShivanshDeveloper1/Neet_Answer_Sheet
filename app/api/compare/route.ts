// app/api/career-match/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import ClientAstro from "@/models/Client";
import { careerTypes } from "@/lib/careerData";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { Name, phoneNumber } = body;

    // 1. Immediate Fail-Fast Validation (Saves server memory)
    if (!Name || !phoneNumber) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Connect and Save safely. If this fails, it goes to global catch
    // ensuring you see the error in logs and know data wasn't lost.
    await connectDB();
    await ClientAstro.create({
      Name: Name.trim(),
      phoneNumber: phoneNumber.trim(),
    });

    // 3. Compute result instantly O(1)
    const random = careerTypes[Math.floor(Math.random() * careerTypes.length)];
    const confidence = (75 + Math.random() * 20).toFixed(0);

    return NextResponse.json({
      success: true,
      match: {
        name: random.name,
        category: random.category,
        description: random.description,
      },
      confidence,
    });
    
  } catch (e: any) {
    // Crucial: Logs exact failure reasons (like MongoDB IP Whitelist/Timeout issues)
    console.error("CRITICAL: Career Match DB Save Failed:", e);
    return NextResponse.json(
      { success: false, error: "Database transaction failed" },
      { status: 500 }
    );
  }
}