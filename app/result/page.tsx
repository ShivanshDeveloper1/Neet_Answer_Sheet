"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();
  const [resultData, setResultData] = useState<any>(null);

  useEffect(() => {
    // Grab the data saved from the form page
    const storedData = sessionStorage.getItem("palmResult");
    if (storedData) {
      setResultData(JSON.parse(storedData));
    } else {
      // If no data, send them back to the home/form page
      router.push("/");
    }
  }, [router]);

  if (!resultData) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FAF6ED]">Loading your destiny...</div>;
  }

  const { match, confidence } = resultData;

  return (
    <div className="min-h-screen bg-[#FAF6ED] flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Main Result Card */}
      <div className="bg-white max-w-2xl w-full rounded-[32px] p-8 shadow-xl border border-[#EFE6D8] text-center transform transition-all hover:scale-[1.02]">
        
        <h1 className="text-4xl font-bold text-[#211D19] mb-2">
          Your Core Archetype
        </h1>
        
        <div className="inline-block px-6 py-2 mt-4 rounded-full bg-[#EFE6D8] text-[#7D654D] font-semibold text-sm tracking-widest uppercase">
          {match.category}
        </div>

        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7D654D] to-[#211D19] mt-6 m    `   b-4">
          {match.name}
        </h2>
        
        <p className="text-xl text-[#62574E] leading-relaxed mb-8">
          {match.description}
        </p>

        {/* Mental Health & Motivation Section */}
        <div className="bg-[#FAF6ED] rounded-2xl p-6 text-left border-l-4 border-[#7D654D]">
          <h3 className="text-2xl font-bold text-[#211D19] mb-3">
            Unlock Your True Potential 🌟
          </h3>
          <p className="text-lg text-[#4A4138] leading-relaxed">
            Your reading shows incredible latent energy. Remember, biology or tech, it doesn't matter—<strong>if you put in the hard work every single day, you can score full marks or even crack AIIMS!</strong> 
            <br/><br/>
            Anxiety and stress are just shadows. Focus on your daily routine. Every small step you take studying today builds the empire you will rule tomorrow. Believe in yourself, take a deep breath, and keep moving forward. You are entirely capable of greatness.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-[#EFE6D8] flex justify-between items-center text-[#7D654D]">
          <span className="font-medium">Analysis Confidence</span>
          <span className="font-bold text-lg">{Math.round(confidence * 100)}% Match</span>
        </div>

      </div>

      {/* Back Button */}
      <button 
        onClick={() => router.push("/")}
        className="mt-8 px-8 py-4 rounded-full bg-[#211D19] text-[#FAF6ED] font-semibold hover:bg-[#3A332C] transition-colors shadow-lg"
      >
        Analyze Another Path
      </button>

    </div>
  );
}