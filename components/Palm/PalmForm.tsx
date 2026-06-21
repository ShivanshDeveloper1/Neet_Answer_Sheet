"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";
import { useRouter } from "next/navigation";

interface FormState {
  name: string;
  gender: string;
  phoneNumber: string;
  question: string;
}

export default function PalmForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [matchResult, setMatchResult] = useState<any>(null);
  
  // NEW: State to hold our phone number error message
  const [phoneError, setPhoneError] = useState("");

  const [formData, setFormData] = useState<FormState>({
    name: "",
    gender: "",
    phoneNumber: "",
    question: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Optional: Only allow numbers to be typed in the phone field
    if (name === "phoneNumber") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: onlyNums }));
      // Clear error when user starts typing again
      if (phoneError) setPhoneError("");
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function imageToVector(file: File) {
    const compressed = await imageCompression(file, {
      maxSizeMB: 0.15,
      maxWidthOrHeight: 256,
    });

    const bitmap = await createImageBitmap(compressed);
    const canvas = document.createElement("canvas");
    
    canvas.width = 64;
    canvas.height = 64;

    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(bitmap, 0, 0, 64, 64);

    const data = ctx.getImageData(0, 0, 64, 64).data;
    const vector = [];

    for (let i = 0; i < data.length; i += 16) {
      const gray = (data[i] + data[i + 1] + data[i + 2]) / 3;
      vector.push(Number((gray / 255).toFixed(2)));
    }

    return vector;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // NEW: Check if phone number is exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      return; // Stop the form from submitting!
    }

    if (!file) {
      alert("Please upload a palm image first.");
      return;
    }

    setLoading(true);

    try {
      const vector = await imageToVector(file);

      const res = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          vector,
          Name: formData.name,
          phoneNumber: formData.phoneNumber,
          gender: formData.gender,
          question: formData.question
        }),
      });

      const data = await res.json();
      
      if (data.success) {
        sessionStorage.setItem("palmResult", JSON.stringify(data));
        router.push("/result");
      } else {
        alert("Could not process the palm data.");
      }
    } catch (error) {
      console.error("Error matching palm:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#EFE6D8] rounded-[28px] p-7 space-y-6">
      <div>
        <label className="block mb-2 text-sm">Upload Palm</label>
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full rounded-xl bg-[#FAF6ED] px-4 py-4"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          placeholder="Enter your name"
          className="w-full rounded-xl px-4 py-4 bg-[#FAF6ED]"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm">Gender</label>
        <select 
          name="gender" 
          value={formData.gender} 
          onChange={handleInputChange} 
          required 
          className="w-full rounded-xl px-4 py-4 bg-[#FAF6ED]"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 text-sm">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
          maxLength={10} // Prevents typing more than 10 digits
          placeholder="Enter 10-digit number"
          className={`w-full rounded-xl px-4 py-4 bg-[#FAF6ED] outline-none transition-colors ${
            phoneError ? "border-2 border-red-500" : ""
          }`}
        />
        {/* NEW: Display the error message if it exists */}
        {phoneError && (
          <p className="text-red-500 text-sm mt-2 ml-1">{phoneError}</p>
        )}
      </div>

      <div>
        <label className="block mb-2 text-sm">What do you want to know?</label>
        <textarea
          name="question"
          rows={4}
          value={formData.question}
          onChange={handleInputChange}
          required
          placeholder="Career, education, future..."
          className="w-full rounded-xl px-4 py-4 bg-[#FAF6ED] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full py-5 bg-[#211D19] text-[#FAF6ED] hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {loading ? "Analyzing Palm..." : "Continue Reading"}
      </button>

      {matchResult && matchResult.success && (
        <div className="mt-6 p-5 bg-[#FAF6ED] rounded-xl text-center border border-[#DDD1C0]">
          <h3 className="font-semibold text-lg text-[#211D19]">Match Found!</h3>
          <p className="text-[#62574E] mt-2">
            Confidence: <span className="font-medium text-[#7D654D]">{matchResult.confidence * 100}%</span>
          </p>
        </div>
      )}
    </form>
  );
}