'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { answerKeys } from '@/Data/answer-keys'

// Per-subject accent
const ACCENTS: Record<string, { ring: string; pill: string; text: string; glow: string }> = {
  Physics: {
    ring: 'ring-[#2D6CDF]/25',
    pill: 'bg-[#2D6CDF]/90',
    text: 'text-[#2D6CDF]',
    glow: 'from-[#2D6CDF]/60',
  },
  Chemistry: {
    ring: 'ring-[#0F9B8E]/25',
    pill: 'bg-[#0F9B8E]/90',
    text: 'text-[#0F9B8E]',
    glow: 'from-[#0F9B8E]/60',
  },
  Biology: {
    ring: 'ring-[#2E8B57]/25',
    pill: 'bg-[#2E8B57]/90',
    text: 'text-[#2E8B57]',
    glow: 'from-[#2E8B57]/60',
  },
}
const DEFAULT_ACCENT = ACCENTS.Physics

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function AnswerKeyCards() {
  return (
    <section id='answer-cards' className="relative w-full overflow-hidden bg-[#FAF6ED] px-6 py-20 text-[#1A1A1A] md:px-16 lg:px-24">
      {/* Decorative Astrology/Celestial Background */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-[0.03] grayscale transition-opacity duration-700 hover:opacity-[0.06]">
        <span className="absolute left-[10%] top-[10%] text-7xl">✨</span>
        <span className="absolute right-[15%] top-[20%] text-8xl">🌙</span>
        <span className="absolute bottom-[15%] left-[20%] text-8xl">☀️</span>
        <span className="absolute right-[25%] top-[40%] text-6xl">♈</span>
        <span className="absolute bottom-[25%] right-[10%] text-7xl">♏</span>
        <span className="absolute left-[5%] top-[50%] text-8xl">♌</span>
        <span className="absolute bottom-[5%] right-[40%] text-9xl">🪐</span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] md:text-4xl">
            RE-NEET Paper 2026
          </h2>
          <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#C99A3D]/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-[#8a6a22]">
            📄 Official Answer Sheet
          </span>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {answerKeys.map((item, i) => {
            const accent = ACCENTS[item.subject] ?? DEFAULT_ACCENT
            return (
              <motion.div
                key={item.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                variants={fadeUp}
              >
                <Link
                  href={`/answer-key/${item.slug}`}
                  // Enhanced the shadow to a dark #1A1A1A tint for that crisp contrast vibe
                  className="group block overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-[#1A1A1A]/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#1A1A1A]/15"
                >
                  <div className={`relative aspect-[4/3] overflow-hidden ring-1 ${accent.ring}`}>
                    <Image
                      src={item.thumbnail}
                      alt={`${item.subject} Re-NEET 2026 answer key thumbnail`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${accent.glow} to-transparent opacity-50`}
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${accent.pill}`}
                    >
                      {item.subject}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                      {item.title} Answer Key
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/70">
                      {item.description}
                    </p>
                    <span
                      className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${accent.text}`}
                    >
                      View &amp; download
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}