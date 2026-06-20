'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DownloadButton({ subject }: { subject: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleDownloadClick = () => {
    setIsLoading(true)
    
    // Wait 5 seconds, then open the modal
    setTimeout(() => {
      setIsLoading(false)
      // scroll: false prevents the page from jumping to the top
      router.push('?modal=true', { scroll: false })
    }, 5000)
  }

  return (
    <button
      onClick={handleDownloadClick}
      disabled={isLoading}
      className="mt-8 inline-flex min-w-[240px] items-center justify-center gap-2 rounded-full bg-[#1B2A4A] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#1B2A4A]/20 transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D] disabled:opacity-80 disabled:hover:scale-100"
    >
      {isLoading ? (
        <>
          <svg className="h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Fetching Document...
        </>
      ) : (
        `⬇ Download ${subject} PDF`
      )}
    </button>
  )
}