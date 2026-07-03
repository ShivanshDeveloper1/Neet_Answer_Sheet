import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { answerKeys, getAnswerKeyBySlug } from '@/Data/answer-keys'
import DistrictModal from '@/components/DistrictModal'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.paperkey.fun'

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

  const title = `UPTET ${item.title} Question Paper PDF Download (2026)`
  const description = item.description
  const url = `${SITE_URL}/government/${item.slug}`
  const imageUrl = `${SITE_URL}${item.thumbnail}`

  return {
    title,
    description,
    keywords: [
      `UPTET ${item.title} question paper`,
      `UPTET ${item.subject} previous year paper pdf`,
      `UPTET exam question paper 2026`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 900, alt: `UPTET ${item.title} Paper` }],
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

  // Match specific PDF link using query parameters safely
  const currentSetSelection = set ?? ''
  const matchedSetObj = item.sets?.find(
    (s) => s.name.toLowerCase() === currentSetSelection.toLowerCase() || 
           s.name.replace('Set ', '').toLowerCase() === currentSetSelection.toLowerCase()
  )
  const computedPdfUrl = matchedSetObj?.url ?? item.sets?.[0]?.url ?? '#'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `UPTET ${item.title} Question Paper PDF Download`,
    description: item.longDescription,
    image: `${SITE_URL}${item.thumbnail}`,
    datePublished: '2026-03-01',
    author: {
      '@type': 'Organization',
      name: 'UPTET Exam Portal',
    },
  }

  return (
    <main className="min-h-screen bg-[#FAF6ED] text-[#1A1A1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:py-16">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]/60 transition-colors hover:text-[#1A1A1A]"
        >
          <span>&larr;</span> Back to Home
        </Link>

        {/* Content View Layout split */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[420px_1fr] lg:items-start">
          
          {/* Card Media Wrapper Display */}
          <div className="sticky top-6 overflow-hidden rounded-3xl bg-white p-4 shadow-xl ring-1 ring-[#1A1A1A]/5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#FAF6ED]">
              <Image
                src={item.thumbnail}
                alt={`UPTET ${item.title} Question Paper Thumbnail`}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-4 flex items-center justify-between px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/40">Subject Code</span>
              <span className="rounded-full bg-[#1A1A1A] px-3 py-1 text-xs font-bold text-white">
                {item.subject}
              </span>
            </div>
          </div>

          {/* Core Markdown Content Details Container */}
          <div className="flex flex-col justify-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C99A3D]/10 px-3 py-1 text-xs font-bold tracking-wide text-[#8a6a22]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C99A3D]" />
                UPTET 2026 Resources
              </span>

              <h1 className="mt-4 font-serif text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                {item.title} Question Paper
              </h1>

              <p className="mt-4 text-base leading-relaxed text-[#1A1A1A]/70 md:text-lg">
                {item.longDescription}
              </p>
            </div>

            {/* Structured Resource Highlights list */}
            <div className="mt-8 border-t border-[#1A1A1A]/10 pt-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/40 mb-4">
                What's included in this resource
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {item.highlights?.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-[#1A1A1A]/80"
                  >
                    <span className="mt-0.5 text-xs text-[#C99A3D]">✦</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fixed Set Mapping Selection Blocks */}
            {item.sets && item.sets.length > 0 && (
              <div className="mt-8 border-t border-[#1A1A1A]/10 pt-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/40">
                  Select Set Variant
                </h3>
                <div className="flex flex-wrap gap-3">
                  {item.sets.map((setObj) => {
                    const code = setObj.name.replace('Set ', '')
                    return (
                      <Link
                        key={setObj.name}
                        href={`?modal=true&set=${encodeURIComponent(code)}`}
                        scroll={false}
                        className="flex h-14 w-14 items-center justify-center rounded-xl bg-white border border-[#1A1A1A]/10 text-lg font-bold text-[#1A1A1A] shadow-sm transition-all hover:-translate-y-1 hover:border-[#C99A3D] hover:bg-[#C99A3D] hover:text-white hover:shadow-md"
                        title={`Download ${setObj.name}`}
                      >
                        {code}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Premium Call to Action Master Trigger */}
            <div className="mt-10 pt-4">
              <Link
               href={`/payment-pdf/${item.slug}`}
                scroll={false}
                className="group flex w-full sm:w-max items-center justify-center gap-3 rounded-2xl bg-[#C99A3D] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#b58935] hover:shadow-xl"
              >
                <svg 
                  className="h-5 w-5 transition-transform group-hover:translate-y-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  viewBox="0 0 24 24" 
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Full Paper Package
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* District Download Flow Modal Portal */}
      {modal === 'true' && <DistrictModal pdfUrl={computedPdfUrl} />}
    </main>
  )
}