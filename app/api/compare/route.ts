import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import ClientAstro from "@/models/Client";
import { careerTypes } from "@/lib/careerData";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Try to connect and write to MongoDB safely
    try {
      await connectDB();
      
      // Saves only Name and phoneNumber to the collection
      await ClientAstro.create({
        Name: body.Name,
        phoneNumber: body.phoneNumber,
      });
    } catch (dbError) {
      // Logs the IP/Network error to your console so the student's process doesn't break
      console.error("Database Save Interrupted (Check IP Whitelist):", dbError);
    }

    // 2. Compute the result statically (O(1))
    const random = careerTypes[Math.floor(Math.random() * careerTypes.length)];

    // Generate motivational confidence score text string (e.g., "88")
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
    
  } catch (e) {
    console.error("Global API Error Execution Failure:", e);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}