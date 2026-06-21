// app/api/save-district/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/db"; 
import Submission from "@/models/Submission"; 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { stateName, districtName, name, phoneNumber } = body;

    // STEP 1: Validate strings before opening database socket links
    if (!stateName || !districtName || !name || !phoneNumber) {
      return NextResponse.json(
        { error: "All input fields are required." },
        { status: 400 }
      );
    }

    const cleanPhone = phoneNumber.trim();
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Phone number must be exactly 10 digits." },
        { status: 400 }
      );
    }

    // STEP 2: Input is 100% clean, now talk to the database safely
    await connectDB();

    const newSubmission = await Submission.create({
      stateName: stateName.trim(),
      districtName: districtName.trim(),
      name: name.trim(),
      phoneNumber: cleanPhone,
    });

    return NextResponse.json({ success: true, id: newSubmission._id });
  } catch (error: any) {
    console.error("CRITICAL: Submission Save Failed:", error);
    return NextResponse.json(
      { error: "Could not save submission to database safely." },
      { status: 500 }
    );
  }
}