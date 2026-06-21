'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PaymentGateway() {
  const router = useRouter()
  const [utr, setUtr] = useState('')
  const [error, setError] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  // Replace this with your actual UPI ID
  const upiId = "shivanshsingh4539@oksbi" 
  const amount = "10.00"
  const upiLink = `upi://pay?pa=${upiId}&pn=AstraCareer&am=${amount}&cu=INR`

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // UPI UTRs are exactly 12 digits long
    const cleanUtr = utr.trim()
    if (!/^\d{12}$/.test(cleanUtr)) {
      setError('Invalid Transaction ID. UPI UTR must be exactly 12 digits.')
      return
    }

    setIsProcessing(true)

    // Simulate a network verification delay for legitimacy (1.5 seconds)
    setTimeout(() => {
      // Proceed to the palm scan page after "successful" verification
      router.push('/palm-scan')
    }, 1500)
  }

  const handleDownloadQR = () => {
    // In a real app, this would be the path to your actual QR code image
    const link = document.createElement('a')
    link.href = '/Qr_code.jpeg' 
    link.download = 'Qr_code.jpeg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-[#FAF6ED] flex items-center justify-center p-4 selection:bg-[#4648d4]/20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#4648d4] p-6 text-center">
          <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">
            Secure Checkout
          </p>
          <h1 className="text-white text-3xl font-bold">₹10.00</h1>
          <p className="text-white/90 text-sm mt-2">NEET Astro Career Prediction</p>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          
          {/* QR Code Section */}
          <div className="space-y-4">
            <p className="text-center text-sm font-medium text-gray-500">
              Scan with any UPI app to pay
            </p>
            
            <div className="flex justify-center">
              {/* Increased size from w-48 h-48 to w-72 h-72 for a much larger image */}
              <div className="relative w-72 h-72 p-2 border-2 border-dashed border-gray-200 rounded-2xl overflow-hidden">
                <Image 
                  src="/Qr_code.jpeg" 
                  alt="Payment QR Code" 
                  fill 
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Payment Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a 
                href={upiLink}
                className="flex items-center justify-center gap-2 bg-black text-white text-sm font-semibold py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <span>⚡</span> Pay via App
              </a>
              <button 
                onClick={handleDownloadQR}
                type="button"
                className="flex items-center justify-center gap-2 bg-gray-100 text-black text-sm font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors"
              >
                <span>⬇️</span> Save QR
              </button>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Verification Form */}
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="utr" className="block text-sm font-semibold text-gray-700">
                Enter 12-Digit Transaction ID (UTR)
              </label>
              <input
                id="utr"
                type="text"
                maxLength={12}
                placeholder="e.g. 312345678901"
                value={utr}
                onChange={(e) => setUtr(e.target.value.replace(/\D/g, ''))} // Strips out non-numbers automatically
                disabled={isProcessing}
                className={`w-full px-4 py-3 rounded-xl border bg-gray-50 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                  error ? 'border-red-400 focus:ring-red-400/20' : 'border-gray-200 focus:ring-[#4648d4]/20 focus:border-[#4648d4]'
                }`}
              />
              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs font-medium pl-1"
                >
                  {error}
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              disabled={isProcessing || utr.length === 0}
              className="w-full bg-gradient-to-r from-[#4648d4] to-[#6063ee] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#4648d4]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 relative"
            >
              {isProcessing ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying Payment...
                </span>
              ) : (
                "Verify & Continue 🚀"
              )}
            </button>
          </form>

          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-4 text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1">🔒 256-bit Secure</span>
            <span>•</span>
            <span className="flex items-center gap-1">✅ Verified Merchant</span>
          </div>

        </div>
      </motion.div>
    </div>
  )
}