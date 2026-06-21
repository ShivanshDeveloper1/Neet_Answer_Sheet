const mongoose = require("mongoose");
const PalmProfile = require("../models/PalmProfile");

async function seed() {
  try {
    await mongoose.connect(
      "mongodb+srv://Shiv:4539@cluster0.9em8ca4.mongodb.net/?appName=Cluster0"
    );

    console.log("✅ MongoDB Connected");

    await PalmProfile.deleteMany({});

    await PalmProfile.insertMany([
      {
        name: "Business Leader Type",
        category: "career",
        description: "Strong leadership, decision making, management skills",
        vector: [0.72, 0.11, 0.55, 0.81, 0.23, 0.67, 0.34, 0.78]
      },
      {
        name: "Creative Artist Type",
        category: "creative",
        description: "Creative thinking, artistic talent, imagination",
        vector: [0.15, 0.82, 0.74, 0.31, 0.63, 0.92, 0.41, 0.27]
      },
      {
        name: "Scientist Type",
        category: "research",
        description: "Analytical thinking, research, problem solving",
        vector: [0.51, 0.42, 0.88, 0.29, 0.76, 0.18, 0.67, 0.53]
      },
      {
        name: "Entrepreneur Type",
        category: "business",
        description: "Risk taking, innovation, business growth mindset",
        vector: [0.81, 0.24, 0.61, 0.73, 0.35, 0.79, 0.44, 0.58]
      },
      {
        name: "Financial Strategist Type",
        category: "finance",
        description: "Planning, wealth management, long term vision",
        vector: [0.63, 0.37, 0.58, 0.84, 0.42, 0.71, 0.29, 0.65]
      },
      {
        name: "Public Influencer Type",
        category: "communication",
        description: "Communication, networking, public presence",
        vector: [0.47, 0.79, 0.33, 0.62, 0.88, 0.51, 0.74, 0.36]
      }
    ]);

    console.log("✅ Data inserted successfully");

    await mongoose.disconnect();

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

seed();