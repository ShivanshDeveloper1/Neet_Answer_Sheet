"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";

// --- Sub-components ---

const AnnouncementBar = () => (
  <div className="bg-black text-white py-3 text-center px-5 relative z-[60]">
    <p className="font-mono text-[11px] uppercase tracking-widest flex items-center justify-center gap-2">
      <span className="animate-pulse">⚡️</span> TODAY ONLY — NEET Aspirant Special Discount 🚀
    </p>
  </div>
);

const HeroSection = () => {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(
    scrollY,
    [0, 1000],
    [-100, 100] // use pixels instead of %
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    // FIX 2: Changed 'pt-20' to 'py-20' so the justify-center perfectly aligns the text in the middle
    <section className="relative min-h-[100vh] py-20 flex flex-col justify-center overflow-hidden">
      
      {/* FIX 3: Stretched the absolute container past the top and bottom (-top-[15%] -bottom-[15%]) 
          so the image bleeds off the edges. This kills the white space completely. */}
      <motion.div 
        className="absolute -top-[15%] -bottom-[15%] left-0 right-0 z-0 opacity-60 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <Image
 src="/Palm.png"
 fill
 alt="Mystical Ethereal Background"
 className="object-cover object-center blur-sm md:blur-0"
/>
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content: Messaging */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-8 max-w-xl"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="font-sans text-4xl md:text-5xl font-bold text-black leading-tight">
              What If Your Hand Already Knows Your <span className="text-[#4648d4]">Future Result? 🔮</span>
            </h1>
            <p className="text-lg text-gray-800 font-medium max-w-md">
              Upload a photo of your palm and receive AI-assisted career and college predictions with expert analysis.
            </p>
          </motion.div>

          {/* Pricing & CTA */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-baseline gap-4">
              <span className="text-4xl md:text-6xl font-bold text-black">₹10</span>
              <span className="text-2xl text-gray-400 line-through">₹150</span>
              <div className="bg-[#4648d4]/10 text-[#4648d4] px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider">
                93% OFF 🔥
              </div>
            </div>
            <p className="text-base text-gray-700 italic">The biggest discount ever offered for NEET aspirants.</p>
            
            <div className="flex flex-col gap-4">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#4648d4] to-[#6063ee] text-white w-full md:w-fit px-12 py-5 rounded-lg text-2xl font-bold shadow-xl relative overflow-hidden group"
              >
                <Link href={'/payment-gateway'} className=" cursor-pointer relative z-10 flex items-center justify-center gap-2 cursor-pointer">
                  Get Started 🚀
                </Link>
              </motion.button>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600 font-medium text-sm">
                <span className="flex items-center gap-1.5"><span className="text-lg">✅</span> Takes only 2 mins</span>
                <span className="flex items-center gap-1.5"><span className="text-lg">🔒</span> Secure upload</span>
                <span className="flex items-center gap-1.5"><span className="text-lg">⚡</span> Instant report</span>
              </div>
            </div>
          </motion.div>

          {/* Metadata Chips */}
          <motion.div variants={itemVariants} className="flex gap-4">
            <div className="bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-300 flex items-center gap-2 shadow-sm">
              <span className="text-sm">⏱️</span>
              <span className="text-xs font-mono font-semibold uppercase text-black">Completion: 2 Minutes</span>
            </div>
            <div className="bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-gray-300 flex items-center gap-2 shadow-sm">
              <span className="text-sm">✨</span>
              <span className="text-xs font-mono font-semibold uppercase text-black">Result: Instant</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content: Interactive Visuals */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="bg-white/80 backdrop-blur-xl border border-white/40 p-10 rounded-xl space-y-8 shadow-2xl relative z-20 translate-x-12 shadow-[#4648d4]/10"
          >
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-[#4648d4] text-white flex items-center justify-center shadow-lg">
                <span className="text-2xl">📸</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-black">Upload Hand Image</h4>
                <p className="text-gray-600 text-sm">Clear daylight photo recommended</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-300 ml-7 opacity-60"></div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-[#4648d4]/10 flex items-center justify-center border border-[#4648d4]/20">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-black">AI Hand Analysis</h4>
                <p className="text-gray-600 text-sm">Processing 2,400+ career traits</p>
              </div>
            </div>
            <div className="w-px h-8 bg-gray-300 ml-7 opacity-60"></div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-[#4648d4]/10 flex items-center justify-center border border-[#4648d4]/20">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-black">Career Prediction Ready</h4>
                <p className="text-gray-600 text-sm">Personalized NEET path mapping</p>
              </div>
            </div>
          </motion.div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-[#4648d4]/10 rounded-full blur-[100px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustGrid = () => (
  <section className="lg:hidden px-5 py-12 space-y-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-xl border border-gray-200 p-6 rounded-lg space-y-6 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <span className="text-xl">📸</span>
        <span className="font-semibold text-black">Upload Hand Image</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xl">🧠</span>
        <span className="font-semibold text-black">AI Hand Analysis</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xl">🎓</span>
        <span className="font-semibold text-black">College Prediction</span>
      </div>
    </motion.div>
  </section>
);

const CTASection = () => {
  const router = useRouter();

  return (
    <section className="py-[120px] px-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[1200px] mx-auto"
      >
        <div className="bg-white rounded-2xl p-10 md:p-16 border border-gray-200/50 shadow-xl text-center space-y-8">

          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-sans text-3xl md:text-5xl font-bold">
              Career & College Prediction 🌟
            </h2>

            <p className="text-lg text-gray-600">
              Discover hidden strengths and career direction.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/palm-scan")}
            className="bg-gradient-to-r from-[#4648d4] to-[#6063ee] text-white px-12 py-5 rounded-lg text-2xl font-bold shadow-lg"
          >
            Start My Prediction ✨
          </motion.button>

        </div>
      </motion.div>
    </section>
  );
};



// --- Main Page Component ---

export default function AstraCareerPage() {
  return (
    <div id='career-section' className=" bg-[#FAF6ED] text-black font-sans overflow-x-hidden min-h-screen selection:bg-[#4648d4]/20">
      <AnnouncementBar />
      <HeroSection />
      <TrustGrid />
      <CTASection />
  
    </div>
  );
}