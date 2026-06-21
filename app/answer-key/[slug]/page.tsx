import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { answerKeys, getAnswerKeyBySlug } from '@/Data/answer-keys'
import DistrictModal from '@/components/DistrictModal'
import AstraCareerPage from '@/components/Palm/PalmHomepage'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yourdomain.com'

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ modal?: string; set?: string }>
}

export function generateStaticParams() {
  return answerKeys.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const item = getAnswerKeyBySlug(slug) 

  if (!item) return {}

  const title = `${item.subject} Answer Key – Re-NEET 2026 (21 July) | Download PDF`
  const description = item.description
  const url = `${SITE_URL}/answer-key/${item.slug}`
  const imageUrl = `${SITE_URL}${item.thumbnail}`

  return {
    title,
    description,
    keywords: [
      `Re-NEET 2026 ${item.subject} answer key`,
      `NEET 2026 ${item.subject} answer key pdf`,
      `${item.subject} answer key 21 July 2026`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 900, alt: `${item.subject} answer key` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function AnswerKeyDetailPage({ params, searchParams }: Props) {
  const { slug } = await params
  const { modal, set } = await searchParams
  const item = getAnswerKeyBySlug(slug) 
  if (!item) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${item.subject} Answer Key – Re-NEET 2026`,
    description: item.longDescription,
    image: `${SITE_URL}${item.thumbnail}`,
    datePublished: '2026-07-21',
    author: {
      '@type': 'Organization',
      name: 'RE-NEET Advisory',
    },
  }

  // The 4 paper sets available for download
  const paperSets = ['A', 'B', 'C', 'D']

  return (
    <main className="min-h-screen bg-[#FAF6ED]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10">
        <Link
          href="/"
          className="text-sm font-semibold text-[#1B2A4A]/60 transition-colors hover:text-[#1B2A4A]"
        >
          ← Back to home
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-[450px_1fr] md:items-start">
          
          {/* Image Container */}
          <div className="relative aspect-[8/9] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-[#C99A3D]/30">
            <Image
              src={item.thumbnail}
              alt={`${item.subject} Re-NEET 2026 answer key cover`}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
              priority
            />
          </div>

          {/* Content Container */}
          <div>
            <span className="inline-block rounded-full bg-[#C99A3D]/15 px-3 py-1 text-xs font-semibold text-[#8a6a22]">
              Re-NEET 2026 · 21 July
            </span>

            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#1A1A1A] md:text-4xl">
              {item.subject} Answer Key
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-[#1A1A1A]/70">
              {item.longDescription}
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-base text-[#1A1A1A]/75"
                >
                  <span className="mt-0.5 text-[#C99A3D]">✦</span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Paper Sets */}
            <div className="mt-10">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#1A1A1A]/50">
                Select Paper Set
              </h3>
              <div className="flex flex-wrap gap-4">
                {paperSets.map((paperSet) => (
                  <Link
                    key={paperSet}
                    href={`?modal=true&set=${paperSet}`}
                    scroll={false}
                    className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#211D19] text-xl font-bold text-[#FAF6ED] shadow-lg transition-all hover:-translate-y-1 hover:bg-[#C99A3D] hover:shadow-xl"
                    title={`Download Set ${paperSet}`}
                  >
                    {paperSet}
                  </Link>
                ))}
              </div>
            </div>

            {/* NEW: Master Download Button */}
            <div className="mt-8">
              <Link
                href="?modal=true"
                scroll={false}
                className="group flex w-full md:w-max items-center justify-center gap-3 rounded-xl bg-[#C99A3D] px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:-translate-y-1 hover:bg-[#b58935] hover:shadow-lg"
              >
                <svg 
                  className="h-5 w-5 transition-transform group-hover:translate-y-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Master Answer Key
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* The modal will still open normally because of the ?modal=true parameter */}
      {modal === 'true' && <DistrictModal pdfUrl={item.pdfUrl} />}



    </main>
  )
}