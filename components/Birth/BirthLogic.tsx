"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

export default function AstroLogicApp() {
  const router = useRouter();

  return (
    <div className="bg-[#FAF6ED] text-[#1A1A1A] min-h-screen font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 md:py-24">
        
        {/* Hero Announcement Bar */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10 w-full px-4 flex justify-center">
          <div className="bg-purple-200 text-purple-900 px-4 py-2 sm:px-6 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2 animate-pulse shadow-sm text-center">
            <span>🎓</span>
            NEET Aspirant Special Discount
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full mt-8 lg:mt-0">
          
          {/* Text Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight md:leading-[1.1] text-[#1A1A1A]">
              Your Birth Chart Can <span className="text-purple-700 block sm:inline">Reveal Your Future College.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-xl text-gray-700 mb-8 sm:mb-12">
              Your birth time contains powerful insights about your education, career path, strengths, and future opportunities. <strong className="text-[#1A1A1A] font-bold">Your destiny is already written in the stars.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <button
                className="w-full sm:w-auto bg-purple-800 text-[#FAF6ED] shadow-xl shadow-purple-900/20 px-8 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg font-semibold cursor-pointer flex items-center justify-center gap-3 group hover:bg-purple-900 hover:-translate-y-0.5 transition-all active:translate-y-0"
                onClick={() => router.push('/payment-gateway')}
              >
                Discover My Future
                <span className="group-hover:translate-x-1 transition-transform">➔</span>
              </button>
              
              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#FAF6ED] bg-blue-400"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#FAF6ED] bg-purple-400"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#FAF6ED] bg-pink-400"></div>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-500">TRUSTED BY 12,000+ STUDENTS</span>
              </div>
            </div>

            {/* Benefit Badges */}
            <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-4 w-full max-w-md sm:max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-[#1A1A1A] font-medium justify-center lg:justify-start">
                <span className="text-base sm:text-lg">✅</span>
                <span className="text-xs sm:text-sm">4 minute test</span>
              </div>
              <div className="flex items-center gap-2 text-[#1A1A1A] font-medium justify-center lg:justify-start">
                <span className="text-base sm:text-lg">✅</span>
                <span className="text-xs sm:text-sm">Personalized</span>
              </div>
              <div className="flex items-center gap-2 text-[#1A1A1A] font-medium justify-center lg:justify-start">
                <span className="text-base sm:text-lg">✅</span>
                <span className="text-xs sm:text-sm">Career focus</span>
              </div>
              <div className="flex items-center gap-2 text-[#1A1A1A] font-medium justify-center lg:justify-start">
                <span className="text-base sm:text-lg">✅</span>
                <span className="text-xs sm:text-sm">College match</span>
              </div>
            </div>
          </div>

          {/* Pricing & Stats Card Right Column */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto order-1 lg:order-2">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl relative overflow-hidden text-[#1A1A1A] shadow-2xl border border-purple-100">
              <div className="absolute top-0 right-0 p-3 sm:p-4">
                <span className="bg-purple-700 text-white text-[9px] sm:text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider animate-bounce inline-block">LIMITED TIME</span>
              </div>
              
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 mb-3 sm:mb-4 block">NEET EXAM SPECIAL OFFER</span>
              
              <div className="flex items-baseline gap-3 sm:gap-4 mb-6 sm:mb-8">
                <h2 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold leading-none">₹100</h2>
                <span className="text-gray-400 line-through text-xl sm:text-2xl font-semibold">₹300</span>
              </div>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <div className="flex gap-4 items-start">
                  <div className="bg-purple-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-lg sm:text-[20px]">⏳</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold">Only 4 Minutes</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">Brief birth details input required</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-purple-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-lg sm:text-[20px]">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold">Instant Personalized Report</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">Generated by high-precision algorithms</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 bg-[#FAF6ED] rounded-lg mb-6 sm:mb-8 border border-purple-50">
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-gray-500">ANALYSIS PROGRESS</span>
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-purple-700">ACTIVE</span>
                </div>
                <div className="w-full bg-purple-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-700 h-full w-2/3 rounded-full"></div>
                </div>
              </div>
              
              <button 
                onClick={() => router.push('/payment-gateway')}
                className="w-full bg-[#1A1A1A] text-[#FAF6ED] py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 active:scale-[0.99] transition-all shadow-md"
              >
                Claim Offer Now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 sm:py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-2 sm:mb-4 block">The Astro-Data Journey</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">How Your Path Is Mapped</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 relative">
            {/* Connector Lines (Desktop Only) */}
            <div className="hidden md:block absolute top-[48px] left-[16%] right-[16%] h-px bg-purple-200 -z-10"></div>
            
            {/* Step 1 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full mb-4 sm:mb-6 shadow-md flex items-center justify-center hover:-translate-y-1.5 transition-transform duration-300 border border-purple-50 shrink-0">
                <span className="text-3xl sm:text-[40px]">📝</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-1 sm:mb-2 block">STEP 01</span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1A1A1A]">Enter Birth Details</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs px-4">Exact time, date, and location are the keys to your unique celestial code.</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full mb-4 sm:mb-6 shadow-md flex items-center justify-center hover:-translate-y-1.5 transition-transform duration-300 border border-purple-50 shrink-0">
                <span className="text-3xl sm:text-[40px]">✨</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-1 sm:mb-2 block">STEP 02</span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1A1A1A]">Birth Chart Analysis</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs px-4">Our systems cross-reference planetary alignments with educational archetypes.</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full mb-4 sm:mb-6 shadow-md flex items-center justify-center hover:-translate-y-1.5 transition-transform duration-300 border border-purple-50 shrink-0">
                <span className="text-3xl sm:text-[40px]">🎓</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-1 sm:mb-2 block">STEP 03</span>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1A1A1A]">Career & College</h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-xs px-4">Receive a comprehensive dossier on your ideal academic and professional destiny.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Prediction Section */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white border border-purple-100 shadow-2xl p-6 sm:p-10 md:p-16 rounded-3xl flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
            
            {/* Text Side */}
            <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 max-w-max">
                <span className="text-base sm:text-[18px]">🌟</span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Trusted By Thousands</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6 sm:mb-8 leading-tight">
                Career & College Prediction Through Birth Chart Analysis
              </h2>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 text-left w-full">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 bg-purple-50 p-1 rounded-full shrink-0"><span className="text-xs sm:text-[14px] block">✔️</span></div>
                  <p className="text-base sm:text-lg text-gray-700">Identify latent strengths that define your perfect vocational environment.</p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 bg-purple-50 p-1 rounded-full shrink-0"><span className="text-xs sm:text-[14px] block">✔️</span></div>
                  <p className="text-base sm:text-lg text-gray-700">Navigate academic transitions with the clarity of planetary transits.</p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 bg-purple-50 p-1 rounded-full shrink-0"><span className="text-xs sm:text-[14px] block">✔️</span></div>
                  <p className="text-base sm:text-lg text-gray-700">Pinpoint specific high-tier institutions that resonate with your chart.</p>
                </div>
              </div>
              
              <button 
                onClick={() => router.push('/payment-gateway')}
                className="w-full sm:w-auto bg-[#1A1A1A] text-[#FAF6ED] px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition-all shadow-md"
              >
                Get Full Analysis Report
              </button>
            </div>
            
            {/* Animated Sphere Side */}
            <div className="flex-1 w-full flex items-center justify-center mt-6 lg:mt-0">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full border-4 border-dashed border-purple-300 p-4 sm:p-8 relative animate-[spin_60s_linear_infinite] flex items-center justify-center bg-purple-50 shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-2/3 h-2/3 rounded-full border border-purple-300"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-1/2 h-1/2 rounded-full border border-purple-200"></div>
                </div>
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] z-10 animate-[spin_60s_linear_infinite_reverse]">🔮</span>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}