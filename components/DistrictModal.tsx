"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DistrictModal({ pdfUrl }: { pdfUrl: string | null }) {
  const router = useRouter();
  const [stateName, setStateName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Dynamic distribution tracking array 
  const districtsByState: Record<string, string[]> = {
    "Uttar Pradesh": ["Saharanpur", "Kandhala", "Muzaffarnagar", "Meerut"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi"],
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 1. Validate 10-digit phone constraints first
    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Please input a valid 10-digit number.");
      return;
    }

    setLoading(true);
    try {
      // 2. ALWAYS send data to the database first
      const res = await fetch("/api/save-district", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stateName, districtName, name, phoneNumber }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong saving your details.");

      // 3. Now check if the PDF is available
      if (!pdfUrl || pdfUrl === "null" || pdfUrl === "") {
        setError("Your details have been submitted! However, this answer key is not available for now. Please check again after some time.");
        return;
      }

      // 4. If the PDF link is valid, open it cleanly
      window.open(pdfUrl, "_blank");
      
      // Close the modal by navigating back
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full text-gray-800">
        <h2 className="text-xl font-bold mb-2">Enter Details</h2>
        <p className="text-sm text-gray-500 mb-4">
          Tell us your location details to download the official district-wise answer sheet.
        </p>

        {error && (
          <div className="bg-red-50 text-red-600 border border-red-100 p-3 rounded-md text-sm mb-4 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">State Name</label>
            <select
              value={stateName}
              onChange={(e) => {
                setStateName(e.target.value);
                setDistrictName("");
              }}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            >
              <option value="">Select State</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">District Name</label>
            <select
              value={districtName}
              onChange={(e) => setDistrictName(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-white disabled:bg-gray-100 disabled:cursor-not-allowed focus:ring-2 focus:ring-purple-500 focus:outline-none"
              disabled={!stateName}
              required
            >
              <option value="">Select District</option>
              {stateName &&
                districtsByState[stateName]?.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="10 digit phone number"
              maxLength={10}
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 text-sm font-semibold text-white bg-purple-700 hover:bg-purple-800 disabled:bg-gray-400 rounded-md transition-all shadow-sm flex items-center justify-center"
            >
              {loading ? "Processing..." : "Submit & Download"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}