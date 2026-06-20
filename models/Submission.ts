// models/Submission.ts
import mongoose, { Schema, model, models } from "mongoose";

const submissionSchema = new Schema(
  {
    stateName: { type: String, required: true },
    districtName: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { 
      type: String, 
      required: true,
      // Mongoose level validation backup
      match: [/^\d{10}$/, "Phone number must be exactly 10 digits."]
    },
  },
  { 
    timestamps: true // Automatically creates 'createdAt' and 'updatedAt' fields
  }
);

// Check if the model exists to prevent Next.js from recompiling and throwing an error
const Submission = models.Submission || model("Submission", submissionSchema);

export default Submission;