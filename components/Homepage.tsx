'use client'

import Image from 'next/image'
import { motion, useReducedMotion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

// Updated cards focusing on speed, trust, and accuracy
const cards = [
  {
    emoji: '⚡',
    title: 'Fastest Answers',
    desc: "Get the Re-NEET answer key before anyone else. We provide the quickest, most reliable solutions immediately after the exam concludes.",
  },
  {
    emoji: '🛡️',
    title: 'Trusted Source',
    desc: '100% verified answers crafted and cross-checked by top medical faculty and subject matter experts. No guesswork, just facts.',
  },
  {
    emoji: '📝',
    title: 'Complete Analysis',
    desc: 'Detailed step-by-step solutions for Physics, Chemistry, and Biology so you can calculate your exact score with absolute confidence.',
  },
] as const

const goToAnswers = () => {
  document
    .getElementById("answer-section")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
};

const Homepage = () => {
  const prefersReducedMotion = useReducedMotion()
  const reduce = !!prefersReducedMotion

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
      {/* ---------- ambient educational backdrop (clean, subtle grid) ---------- */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#3B82F6] opacity-[0.15] blur-[100px]"></div>
      </div>

      {/* ---------------------------------- hero ---------------------------------- */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 pb-20 pt-16 md:flex-row md:gap-16 md:px-16 md:pt-24 lg:px-24">
        {/* image side */}
        <motion.div
          className="relative w-full max-w-[300px] shrink-0 md:max-w-[440px]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="relative aspect-[8/10] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-[#3B82F6]/20">
            <Image
              src="/doctor.jpg"
              alt="Medical student checking Re-NEET exam answer key"
              fill
              priority
              sizes="(max-width: 768px) 300px, 340px"
              className="object-cover"
            />
            {/* Urgent overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent"></div>
          </div>

          {/* trust badge */}
          <motion.div
            className="absolute -bottom-6 -right-5 rounded-2xl bg-white px-5 py-3 shadow-xl ring-1 ring-black/5 md:-right-8 border-l-4 border-[#10B981]"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
              </span>
              <p className="text-xl font-bold leading-none text-[#0F172A]">Live Now</p>
            </div>
            <p className="mt-1 text-xs text-[#0F172A]/60 font-medium">Verified by Experts</p>
          </motion.div>
        </motion.div>

        {/* text side */}
        <div className="relative w-full max-w-xl">
          <motion.p
            className="relative inline-block rounded-full bg-[#EF4444]/10 px-4 py-1.5 text-sm font-bold tracking-wide text-[#EF4444]"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            🚨 June 21 Re-NEET Update
          </motion.p>

          <motion.h1
            className="mt-5 text-4xl font-extrabold tracking-tight leading-tight text-[#0F172A] md:text-5xl lg:text-[3.25rem]"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            The Fastest Answer Key For{' '}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="absolute inset-0 scale-110 rounded-lg bg-[#3B82F6]/10" aria-hidden="true"></span>
              <span className="relative inline-block px-2 text-[#2563EB]">
                Re-NEET 2024
              </span>
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-base font-medium leading-relaxed text-[#475569] md:text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            Don't wait in suspense. Get instant access to the most accurate, reliable, and trusted answer sheet for the June 21st Re-NEET exam. Calculate your score with 100% confidence today.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3 text-sm"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            <span className="flex items-center gap-1 font-bold text-[#0F172A] bg-white px-3 py-1.5 rounded-md shadow-sm border border-slate-200">
              <svg className="w-4 h-4 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Trusted Source
            </span>
            <span className="flex items-center gap-1 font-bold text-[#0F172A] bg-white px-3 py-1.5 rounded-md shadow-sm border border-slate-200">
              <svg className="w-4 h-4 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Fastest Updates
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
          >
            <button
              type="button"
              className="mt-8 cursor-pointer flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#2563EB]/30 transition-all duration-200 hover:bg-[#1D4ED8] hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              onClick={goToAnswers}
            >
              Check Answer Sheet Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <p className="mt-3 text-xs font-medium text-[#64748B]">
              No registration required. Instant PDF download available.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Homepage