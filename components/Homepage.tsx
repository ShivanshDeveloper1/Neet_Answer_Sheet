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

// Updated cards to emphasize Luck, Data, and Trust/Records
const cards = [
  {
    emoji: '🍀',
    title: 'The Role of Luck & Timing',
    desc: "While hard work is non-negotiable, timing and planetary alignments play a crucial role. We help you understand when fortune favors your efforts so you can act with confidence.",
  },
  {
    emoji: '📊',
    title: 'Backed by Deep Data',
    desc: 'We don’t just rely on intuition. Our insights are cross-referenced with massive datasets from successful medical professionals to give you highly accurate, factual guidance.',
  },
  {
    emoji: '📜',
    title: 'A Century of Proven Records',
    desc: 'Built upon over 100 years of documented success stories and astrological patterns of top achievers. Every reading is rooted in deep historical accuracy you can trust.',
  },
] as const

function FloatingEmoji({ emoji, reduce }: { emoji: string; reduce: boolean }) {
  return (
    <motion.div
      className="text-4xl md:text-5xl"
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden
    >
      {emoji}
    </motion.div>
  )
}

  const goToCareer = () => {
    document
      .getElementById("career-section")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

const Homepage = () => {
  const prefersReducedMotion = useReducedMotion()
  const reduce = !!prefersReducedMotion

  return (
    <main className="min-h-screen bg-[#FAF6ED] text-[#1A1A1A]">
      {/* ---------- ambient astrology backdrop (very light, decorative) ---------- */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute -right-24 -top-24 h-[520px] w-[520px] opacity-[0.07] md:h-[640px] md:w-[640px]"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="92" fill="none" stroke="#C99A3D" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="#C99A3D" strokeWidth="0.4" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
const x1 = (100 + Math.cos(angle) * 92).toFixed(3)
  const y1 = (100 + Math.sin(angle) * 92).toFixed(3)
  const x2 = (100 + Math.cos(angle) * 78).toFixed(3)
  const y2 = (100 + Math.sin(angle) * 78).toFixed(3)
            return (
              <line 
      key={i} 
      x1={x1} 
      y1={y1} 
      x2={x2} 
      y2={y2} 
      stroke="#C99A3D" 
      strokeWidth="0.6" 
    />
            )
          })}
        </svg>
        <div className="absolute left-[6%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#C99A3D]/30" />
        <div className="absolute left-[14%] top-[60%] h-1 w-1 rounded-full bg-[#1B2A4A]/20" />
        <div className="absolute left-[40%] top-[12%] h-1 w-1 rounded-full bg-[#C99A3D]/30" />
        <div className="absolute right-[20%] top-[70%] h-1.5 w-1.5 rounded-full bg-[#1B2A4A]/20" />
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
          <div className="relative aspect-[8/10] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-[#C99A3D]/30">
            <Image
              src="/Palm_checking.png"
              alt="Career advisor offering palm-reading guidance"
              fill
              priority
              sizes="(max-width: 768px) 300px, 340px"
              className="object-cover"
            />

            {/* signature element: a hand-drawn constellation tracing across the portrait */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 300 533"
              aria-hidden
              fill="none"
            >
              <motion.path
                d="M48 90 L96 150 L84 230 L150 270 L210 220 L240 320"
                stroke="#E8C77A"
                strokeWidth="1.4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.9 }}
                transition={{ duration: 1.8, delay: 0.6, ease: 'easeInOut' }}
              />
              {[
                [48, 90],
                [96, 150],
                [84, 230],
                [150, 270],
                [210, 220],
                [240, 320],
              ].map(([cx, cy], i) => (
                <motion.circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r={3}
                  fill="#E8C77A"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.18 }}
                />
              ))}
            </svg>
          </div>

          {/* trust badge */}
          <motion.div
            className="absolute -bottom-6 -right-5 rounded-2xl bg-white px-5 py-3 shadow-xl ring-1 ring-black/5 md:-right-8"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <p className="text-2xl font-bold leading-none text-[#1B2A4A]">10,000+</p>
            <p className="mt-1 text-xs text-[#1A1A1A]/55">students guided</p>
          </motion.div>
        </motion.div>

        {/* text side */}
        <div className="relative w-full max-w-xl">
          {/* decorative mark */}
          <span
            aria-hidden
            className="absolute -left-3 -top-6 text-5xl text-[#C99A3D]/15 md:-left-5 md:-top-8 md:text-6xl"
          >
            ✦
          </span>

          <motion.p
            className="relative inline-block rounded-full bg-[#1B2A4A]/5 px-4 py-1 text-sm font-semibold tracking-wide text-[#1B2A4A]"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            Astro Career Advisory
          </motion.p>

          <motion.h1
            className="mt-5 font-serif text-4xl font-bold leading-tight text-[#1A1A1A] md:text-5xl lg:text-[3.25rem]"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Your Hand Holds Clues To Your{' '}
            <span className="relative inline-block whitespace-nowrap px-1">
              <span className="absolute inset-0 scale-150 rounded-full bg-[#C99A3D]/20 blur-xl" aria-hidden="true"></span>
              <span
                className="
  relative
  inline-block
  px-2
  font-black
  not-italic
  tracking-[-0.06em]
  text-[#1B2A4A]
  drop-shadow-[0_10px_25px_rgba(27,42,74,0.18)]
  after:absolute
  after:left-0
  after:bottom-[0.12em]
  after:h-[0.32em]
  after:w-full
  after:rounded-full
  after:bg-[#E8C77A]
  after:-z-10
"
              >
                NEET
              </span>{' '}
              <span className="absolute -right-6 -top-4 text-2xl animate-pulse text-[#E8C77A] drop-shadow-sm" aria-hidden="true">
                ✨
              </span>
            </span>
            Journey
          </motion.h1>

          <motion.p
            className="mt-4 text-base leading-relaxed text-[#1A1A1A]/70 md:text-lg"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            Trusted hand-reading guidance for NEET aspirants — pairing traditional
            palmistry with real patterns from thousands of students who walked this
            road before you.
          </motion.p>

          <motion.div
            className="mt-5 flex flex-wrap items-center gap-2 text-sm"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            <span className="font-bold text-[#1A1A1A]">Expert in Hand Reading</span>
            <span className="rounded-full bg-[#C99A3D]/15 px-3 py-1 font-semibold text-[#8a6a22]">
              Lakhs of NEET Topper records
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
              className="mt-8 cursor-pointer rounded-full bg-[#1B2A4A] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1B2A4A]/20 transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
              onClick={goToCareer}
            >
              Get My Free Reading
            </button>
            <p className="mt-3 text-xs text-[#1A1A1A]/45">
              Guidance and perspective, not a guarantee — your effort still decides the result.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ----------------------------- what we offer ----------------------------- */}
    
    </main>
  )
}

export default Homepage