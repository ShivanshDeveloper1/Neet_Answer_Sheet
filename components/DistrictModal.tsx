"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DistrictModal({ pdfUrl }: { pdfUrl: string | null }) {
  const router = useRouter();
  const [stateName, setStateName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Dropdown visibility states
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);

  const districtsByState: Record<string, string[]> = {
    "Uttar Pradesh": ["Saharanpur", "Kandhala", "Muzaffarnagar", "Meerut", "Lucknow", "Kanpur", "Varanasi"],
    "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
    "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Rohtak"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
  };

  // Default fallback districts if no valid state is selected yet
  const defaultDistricts = ["Saharanpur", "Kandhala", "Muzaffarnagar", "Meerut"];

  // Filter states based on what user types
  const filteredStates = Object.keys(districtsByState).filter((state) =>
    state.toLowerCase().includes(stateName.toLowerCase())
  );

  // Filter districts based on selected state or fallback to defaults
  const currentDistrictPool = districtsByState[stateName] || defaultDistricts;
  const filteredDistricts = currentDistrictPool.filter((dist) =>
    dist.toLowerCase().includes(districtName.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Please input a valid 10-digit number.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/save-district", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stateName, districtName, name, phoneNumber, studentClass }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong saving your details.");

      if (!pdfUrl || pdfUrl === "null" || pdfUrl === "") {
        setError("Your details have been submitted! However, this answer key is not available for now. Please check again after some time.");
        return;
      }

      window.open(pdfUrl, "_blank");
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full text-gray-800 max-h-[90vh] overflow-y-auto">
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
          
          {/* STATE FIELD with Instant Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">State Name</label>
            <input
              type="text"
              value={stateName}
              onFocus={() => setShowStateDropdown(true)}
              onBlur={() => setTimeout(() => setShowStateDropdown(false), 200)} // Delay to let click execute
              onChange={(e) => {
                setStateName(e.target.value);
                setDistrictName(""); 
                setShowStateDropdown(true);
              }}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Select or type state"
              required
            />
            {showStateDropdown && filteredStates.length > 0 && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
                {filteredStates.map((state) => (
                  <li
                    key={state}
                    onMouseDown={() => {
                      setStateName(state);
                      setDistrictName("");
                      setShowStateDropdown(false);
                    }}
                    className="p-2 hover:bg-purple-50 cursor-pointer text-sm transition-colors"
                  >
                    {state}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* DISTRICT FIELD with Instant Dropdown */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">District Name</label>
            <input
              type="text"
              value={districtName}
              onFocus={() => setShowDistrictDropdown(true)}
              onBlur={() => setTimeout(() => setShowDistrictDropdown(false), 200)}
              onChange={(e) => {
                setDistrictName(e.target.value);
                setShowDistrictDropdown(true);
              }}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Select or type district"
              required
            />
            {showDistrictDropdown && filteredDistricts.length > 0 && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
                {filteredDistricts.map((dist) => (
                  <li
                    key={dist}
                    onMouseDown={() => {
                      setDistrictName(dist);
                      setShowDistrictDropdown(false);
                    }}
                    className="p-2 hover:bg-purple-50 cursor-pointer text-sm font-medium text-gray-700 transition-colors"
                  >
                    {dist}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* CLASS FIELD */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Class</label>
            <select
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            >
              <option value="">Select Class</option>
              <option value="Class 11">Class 11</option>
              <option value="Class 12">Class 12</option>
              <option value="Class 12 Passout">Class 12 Passout</option>
              <option value="Dropout">Dropout</option>
            </select>
          </div>

          {/* NAME FIELD */}
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

          {/* PHONE FIELD */}
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