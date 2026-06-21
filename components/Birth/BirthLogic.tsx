"use client"
import React, { useState } from 'react';
import '@/app/App.css'; // Adjust import path to wherever your CSS is
import { useRouter } from 'next/navigation';

export default function AstroLogicApp() {
  const [ctaHovered, setCtaHovered] = useState(false);

  const router = useRouter()

  return (
    
    <div className="bg-[#FAF6ED] text-[#1A1A1A] min-h-screen font-sans">
      {/* Applied your custom background and text colors to the main wrapper */}
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex flex-col justify-center pt-20">
        
        {/* Hero Announcement Bar */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center">
          <div className="bg-purple-200 text-purple-900 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 animate-pulse w-max shadow-sm">
            <span className="text-[16px]">🎓</span>
            NEET Aspirant Special Discount
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          <div className="lg:col-span-7">
            {/* Changed text-white to text-[#1A1A1A] for readability on light bg */}
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-[1.1] text-[#1A1A1A]">
              Your Birth Chart Can <span className="text-purple-700">Reveal Your Future College.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-xl text-gray-700 mb-12">
              Your birth time contains powerful insights about your education, career path, strengths, and future opportunities. <strong className="text-[#1A1A1A] font-bold">Your destiny is already written in the stars.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                className="bg-purple-800 text-[#FAF6ED] shadow-xl shadow-purple-900/20 px-10 py-5 rounded-full text-lg font-semibold cursor-pointer flex items-center gap-3 group hover:bg-purple-900 transition-colors"
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
                style={ctaHovered ? { transform: 'translateY(-2px)' } : { transform: 'translateY(0)' }}
                onClick={()=>router.push('/payment-gateway')}
              >
                Discover My Future
                <span className="group-hover:translate-x-1 transition-transform">➔</span>
              </button>
              
              <div className="flex flex-col gap-1">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-[#FAF6ED] bg-blue-400"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#FAF6ED] bg-purple-400"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#FAF6ED] bg-pink-400"></div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">TRUSTED BY 12,000+ STUDENTS</span>
              </div>
            </div>

            {/* Check circle emojis replacing the broken text */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-[#1A1A1A] font-medium">
                <span className="text-lg">✅</span>
                <span className="text-sm">4 minute test</span>
              </div>
              <div className="flex items-center gap-2 text-[#1A1A1A] font-medium">
                <span className="text-lg">✅</span>
                <span className="text-sm">Personalized</span>
              </div>
              <div className="flex items-center gap-2 text-[#1A1A1A] font-medium">
                <span className="text-lg">✅</span>
                <span className="text-sm">Career focus</span>
              </div>
              <div className="flex items-center gap-2 text-[#1A1A1A] font-medium">
                <span className="text-lg">✅</span>
                <span className="text-sm">College match</span>
              </div>
            </div>
          </div>

          {/* Pricing & Stats Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 md:p-10 rounded-2xl relative overflow-hidden text-[#1A1A1A] shadow-2xl border border-purple-100">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-purple-700 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider animate-bounce inline-block">LIMITED TIME</span>
              </div>
              
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 mb-4 block">NEET EXAM SPECIAL OFFER</span>
              
              <div className="flex items-baseline gap-4 mb-8">
                <h2 className="text-[56px] font-extrabold leading-none">₹100</h2>
                <span className="text-gray-400 line-through text-2xl font-semibold">₹300</span>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="bg-purple-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    {/* Replaced schedule with Hourglass emoji */}
                    <span className="text-[20px]">⏳</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Only 4 Minutes</h4>
                    <p className="text-gray-500 text-sm">Brief birth details input required</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-purple-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    {/* Replaced bolt with Lightning emoji */}
                    <span className="text-[20px]">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Instant Personalized Report</h4>
                    <p className="text-gray-500 text-sm">Generated by high-precision algorithms</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-[#FAF6ED] rounded-lg mb-8 border border-purple-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gray-500">ANALYSIS PROGRESS</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-purple-700">ACTIVE</span>
                </div>
                <div className="w-full bg-purple-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-700 h-full w-2/3 rounded-full"></div>
                </div>
              </div>
              
              <button className="w-full bg-[#1A1A1A] text-[#FAF6ED] py-4 rounded-full text-lg font-semibold hover:bg-gray-800 active:scale-[0.98] transition-all">
                Claim Offer Now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 block">The Astro-Data Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">How Your Path Is Mapped</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Lines (Desktop Only) */}
            <div className="hidden md:block absolute top-[48px] left-[16%] right-[16%] h-px bg-purple-200 -z-10"></div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 shadow-lg flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300 border border-purple-50">
                {/* Replaced edit_note with Memo emoji */}
                <span className="text-[40px]">📝</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2 block">STEP 01</span>
              <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">Enter Birth Details</h3>
              <p className="text-gray-600 px-4">Exact time, date, and location are the keys to your unique celestial code.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 shadow-lg flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300 border border-purple-50">
                <span className="text-[40px]">✨</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2 block">STEP 02</span>
              <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">Birth Chart Analysis</h3>
              <p className="text-gray-600 px-4">Our systems cross-reference planetary alignments with educational archetypes.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 shadow-lg flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300 border border-purple-50">
                {/* Replaced school with Graduation Cap emoji */}
                <span className="text-[40px]">🎓</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2 block">STEP 03</span>
              <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">Career & College</h3>
              <p className="text-gray-600 px-4">Receive a comprehensive dossier on your ideal academic and professional destiny.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Prediction Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white border border-purple-100 shadow-2xl p-8 md:p-16 rounded-3xl flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-800 px-4 py-2 rounded-full mb-6">
                <span className="text-[18px]">🌟</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Trusted By Thousands</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                Career & College Prediction Through Birth Chart Analysis
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-purple-50 p-1 rounded-full"><span className="text-[14px] block">✔️</span></div>
                  <p className="text-lg text-gray-700">Identify latent strengths that define your perfect vocational environment.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-purple-50 p-1 rounded-full"><span className="text-[14px] block">✔️</span></div>
                  <p className="text-lg text-gray-700">Navigate academic transitions with the clarity of planetary transits.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-purple-50 p-1 rounded-full"><span className="text-[14px] block">✔️</span></div>
                  <p className="text-lg text-gray-700">Pinpoint specific high-tier institutions that resonate with your chart.</p>
                </div>
              </div>
              
              <button className="bg-[#1A1A1A] text-[#FAF6ED] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all">
                Get Full Analysis Report
              </button>
            </div>
            
            <div className="flex-1 w-full max-w-md mx-auto">
              <div className="aspect-square rounded-full border-4 border-dashed border-purple-300 p-8 relative animate-[spin_60s_linear_infinite] flex items-center justify-center bg-purple-50">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 rounded-full border border-purple-300"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-48 h-48 rounded-full border border-purple-200"></div>
                </div>
                <span className="text-[80px] z-10 animate-[spin_60s_linear_infinite_reverse]">🔮</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
    
      
    </div>
  );
}