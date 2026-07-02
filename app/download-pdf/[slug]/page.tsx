import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAnswerKeyBySlug } from '@/Data/answer-keys'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function DownloadSuccessPage({ params }: Props) {
  const { slug } = await params
  const item = getAnswerKeyBySlug(slug)

  if (!item) notFound()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF6ED] to-[#F3EDE0] dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-4 antialiased transition-colors duration-300">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-gray-100/50 dark:border-gray-800/60 text-center relative overflow-hidden">
        
        {/* Top colored accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500" />

        {/* Premium Success Icon with background pulse */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/30 mb-6 relative">
          <div className="absolute inset-0 rounded-full bg-emerald-100/60 dark:bg-emerald-900/20 animate-ping opacity-75 [animation-duration:2s]" />
          <svg className="h-10 w-10 text-emerald-600 dark:text-emerald-400 relative z-10" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mb-6 px-2">
          Thank you for your purchase. Your digital file is securely prepared and ready for download.
        </p>

        {/* Structured File Info Box */}
        <div className="bg-gray-50 dark:bg-gray-800/40 rounded-2xl p-4 mb-6 border border-gray-100 dark:border-gray-800 text-left flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl text-emerald-700 dark:text-emerald-400 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Ready to Download</p>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate" title={item.title}>
                {item.title}
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded-lg shrink-0">
            PDF
          </span>
        </div>

        {/* The Action Button - High Contrast & Fixed Hover */}
        <a 
          href={item.pdfUrl}
          download
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100 px-6 py-4 text-base font-bold shadow-xl active:scale-[0.98] transition-all transform hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5 animate-bounce [animation-duration:2.5s]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download Document
        </a>

        {/* Trust Footer & Navigation */}
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs font-medium text-gray-400 dark:text-gray-500">
            <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            Secure, Instant Delivery
          </div>
          
          <Link href="/" className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
            Return to Homepage
          </Link>
        </div>

      </div>
    </div>
  )
}