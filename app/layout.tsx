import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://playwithdate.in"),
  title: "RE-NEET Answer Key 21 June 2026 | Paper Solutions & PDF Download",
  description: "Get the complete and accurate RE-NEET answer key for the exam held on 21 June 2026. Download the question paper solutions for Physics, Chemistry, and Biology.",
  keywords: [
  "UPTET answer key 2026",
  "UPTET 2 July 2026 paper",
  "UPTET Paper 1 answer sheet",
  "UPTET question paper PDF 2026",
  "2 July UPTET paper solution",
  "UPTET Child Development and Pedagogy solutions",
  "playwithdate.in UPTET",
  "UPTET Paper 2 answer key",
  "UPTET unofficial answer key 2 July",
  "UPTET test series 2026",
  "UPTET online test series Paper 1",
  "UPTET test series 3 July 2026",
  "UPTET 2 July 2026 mock test",
  "Free UPTET mock test series 2026",
  "UPTET sample papers with solutions",
  "Best test series for UPTET 2026",
  "UPTET Paper 2 test series PDF",
  "Playwithdate.in UPTET test series download",
  "UPTET Maths and EVS test series 2026",
  "2 July UPTET Hindi answer key",
  "3 July UPTET Science and Maths paper solution",
  "UPTET EVS chapter-wise mock test",
  "UPTET Social Studies mock test 4 July 2026",
  "2 July UPTET Shift 1 answer sheet",
  "UPTET Paper 1 and 2 paper analysis",
  "UPTET Sanskrit test series",
  "UPTET CDP high-yield questions",
  "EVS answer key UPTET 2026 PDF",
  "UPTET Primary level test series 2026",
  "UPTET exam Maths answer key 2 July",
  "UPTET 3 July Upper Primary question paper",
  "UPTET NCERT-based mock test",
  "UPTET solved paper Paper 1",
  "UPTET English and Urdu answer sheet",
  "UPTET exam CDP question paper PDF",
  "Unofficial UPTET Shift 2 answer sheet 2026",
  "UPTET Maths numerical solutions",
  "Download UPTET 2 July 2026 answer key PDF",
  "UPTET 4 July 2026 question paper download with solutions",
  "UPTET exam answer key by expert faculties",
  "UPTET official answer key release date 2026",
  "playwithdate.in UPTET exam paper solution PDF",
  "UPTET last minute revision test series",
  "UPTET 2026 expected questions",
  "UPTET syllabus-wise mock test papers",
  "UPTET 2026 practice paper Shift 1"
],
  authors: [{ name: "Play With Date" }],
  openGraph: {
    title: "RE-NEET Answer Key 21 June 2026 | Paper Solutions",
    description: "Download the complete RE-NEET answer key for the exam held on 21 June 2026. Get full solutions for Physics, Chemistry, and Biology.",
    url: "https://playwithdate.in/",
    siteName: "Play With Date",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RE-NEET Answer Key 21 June 2026",
    description: "Download the complete RE-NEET answer key and paper solutions for the exam held on 21 June 2026.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}