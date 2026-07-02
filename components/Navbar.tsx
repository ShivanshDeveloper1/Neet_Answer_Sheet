"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Helper to close mobile drawer on link click
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="bg-white px-5 md:px-12 lg:px-24 py-5 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-gray-900 font-extrabold text-base md:text-xl tracking-wider select-none">
          Bulbul Paper Analyzer
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center font-medium">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-600 active:text-blue-700 transition-colors duration-200"
          >
            About
          </Link>

          <Link
            href="/#answer-cards"
            className="text-green-700 hover:text-green-800 active:text-green-900 font-bold tracking-wide transition-colors duration-200"
          >
            UPTET PDF
          </Link>

         
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700 hover:text-black focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${open ? "max-h-60 opacity-100 pt-5 pb-2" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col gap-4 md:hidden font-medium text-gray-700 border-t border-gray-100 pt-4">
          <Link 
            href="/" 
            onClick={handleLinkClick}
            className="hover:text-blue-600 py-1 transition-colors"
          >
            About
          </Link>

          <Link
            href="/#answer-cards"
            onClick={handleLinkClick}
            className="text-green-700 hover:text-green-800 font-bold py-1 transition-colors"
          >
            NEET Answers
          </Link>

        
        </div>
      </div>
    </nav>
  );
}