// app/api/save-district/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/db"; 
import Submission from "@/models/Submission"; 

export async function POST(request: Request) {
  try {
    // 1. Establish/Retrieve the cached DB connection
    await connectDB();

    const body = await request.json();
    const { stateName, districtName, name, phoneNumber } = body;

    // 2. Validate data presence
    if (!stateName || !districtName || !name || !phoneNumber) {
      return NextResponse.json(
        { error: "All input fields are required." },
        { status: 400 }
      );
    }

    // 3. Validate the 10-digit telephone number constraint
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber.trim())) {
      return NextResponse.json(
        { error: "Phone number must be exactly 10 digits." },
        { status: 400 }
      );
    }

    // 4. Save to database using Mongoose
    const newSubmission = await Submission.create({
      stateName,
      districtName,
      name,
      phoneNumber: phoneNumber.trim(),
    });

    return NextResponse.json({ success: true, id: newSubmission._id });
  } catch (error: any) {
    console.error("Submission Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}