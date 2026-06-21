// components/DistrictModal.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DistrictModal({ pdfUrl }: { pdfUrl: string }) {
  const router = useRouter();
  const [stateName, setStateName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Mock data matching your request context
  const districtsByState: Record<string, string[]> = {
    "Uttar Pradesh": ["Saharanpur", "Kandhala", "Muzaffarnagar", "Meerut"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi"],
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate 10-digit constraint client side
    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Please input a valid 10-digit number.");
      return;
    }

    setLoading(false);
    try {
      const res = await fetch("/api/save-district", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stateName, districtName, name, phoneNumber }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      // Reset and close modal via route rewrite
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full text-gray-800">
        <h2 className="text-xl font-bold mb-2">Enter Details</h2>
        <p className="text-sm text-gray-500 mb-4">
          tell me district name so we can give your district according answer sheet
        </p>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">State Name</label>
            <select
              value={stateName}
              onChange={(e) => {
                setStateName(e.target.value);
                setDistrictName("");
              }}
              className="mt-1 w-full p-2 border rounded-md"
              required
            >
              <option value="">Select State</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">District Name</label>
            <select
              value={districtName}
              onChange={(e) => setDistrictName(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md"
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
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 w-full p-2 border rounded-md"
              placeholder="10 digit phone number"
              maxLength={10}
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? "Saving..." : "Submit Details"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}