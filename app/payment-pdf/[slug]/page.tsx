'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getAnswerKeyBySlug, AnswerKey } from '@/Data/answer-keys'

export default function PaymentGateway() {
  const router = useRouter()
  const params = useParams() // Gets the [slug] from the URL
  const slug = params.slug as string

  const [item, setItem] = useState<AnswerKey | null>(null)
  const [utr, setUtr] = useState('')
  const [error, setError] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  // Fetch the item details based on the slug
  useEffect(() => {
    if (slug) {
      const data = getAnswerKeyBySlug(slug)
      if (data) setItem(data)
    }
  }, [slug])

  const upiId = "shivanshsingh4539@oksbi" 
  const amount = "50.00"
  const upiLink = `upi://pay?pa=${upiId}&pn=AstraCareer&am=${amount}&cu=INR`

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const cleanUtr = utr.trim()
    if (!/^\d{12}$/.test(cleanUtr)) {
      setError('Invalid Transaction ID. UPI UTR must be exactly 12 digits.')
      return
    }

    setIsProcessing(true)

    // Simulate network request
    setTimeout(() => {
      // Redirect to the success/download page for this specific slug
      router.push(`/download-pdf/${slug}`)
    }, 1500)
  }

  // Show loading state while finding the item
  if (!item) return <div className="min-h-screen bg-[#FAF6ED] flex items-center justify-center">Loading...</div>

  return (
    <div className="min-h-screen bg-[#FAF6ED] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        {/* Dynamic Header */}
        <div className="bg-[#4648d4] p-6 text-center">
          <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">
            Secure Checkout
          </p>
          <h1 className="text-white text-3xl font-bold">₹{amount}</h1>
          <p className="text-white/90 text-sm mt-2">{item.title}</p>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div className="space-y-4">
            <p className="text-center text-sm font-medium text-gray-500">Scan to pay</p>
            <div className="flex justify-center">
            <div className="relative w-64 h-64 p-2 border-2 border-dashed border-gray-200 rounded-2xl overflow-hidden">
  <Image 
    src="/Qr_code.jpeg" 
    alt="QR Code" 
    fill 
    sizes="256px" 
    className="object-contain p-2" 
  />
</div>
            </div>
            <a 
              href={upiLink}
              className="flex items-center justify-center gap-2 bg-black text-white text-sm font-semibold py-3 rounded-xl hover:bg-gray-800"
            >
              Pay via UPI App
            </a>
          </div>

          <hr className="border-gray-100" />

          {/* Verification Form */}
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Enter 12-Digit Transaction ID (UTR)
              </label>
              <input
                type="text"
                maxLength={12}
                placeholder="e.g. 312345678901"
                value={utr}
                onChange={(e) => setUtr(e.target.value.replace(/\D/g, ''))} 
                disabled={isProcessing}
                className="w-full px-4 py-3 rounded-xl border bg-gray-50 text-black outline-none focus:ring-2 focus:ring-[#4648d4]/20 focus:border-[#4648d4]"
              />
              {error && <p className="text-red-500 text-xs">{error}</p>}
            </div>

            <button
              type="submit"
              disabled={isProcessing || utr.length < 12}
              className="w-full bg-[#4648d4] text-white font-bold py-4 rounded-xl disabled:opacity-70"
            >
              {isProcessing ? "Verifying..." : "Verify & Get PDF"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}