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
    "RE-NEET answer key 2026",
    "RE-NEET 21 June 2026 paper",
    "NEET UG re-exam answer sheet",
    "RE-NEET question paper PDF",
    "21 June NEET paper solution",
    "RE-NEET Physics Chemistry Biology solutions",
    "playwithdate.in NEET",
    "NEET Phase 2 answer key",
    "RE NEET unofficial answer key",
    "RE-NEET test series 2026",
"NEET UG re-exam online test series",
"RE NEET test series 21 July 2026",
"RE-NEET 21 June 2026 mock test",
"Free RE-NEET mock test series 2026",
"NEET re-test sample papers with solutions",
"Best test series for RE-NEET 2026",
"RE-NEET Phase 2 test series PDF",
"Playwithdate.in RE-NEET test series download",
"RE-NEET Physics test series 2026",
"21 June RE-NEET Physics answer key",
"21 July RE-NEET Physics paper solution",
"RE-NEET Physics chapter-wise mock test",
"RE-NEET Chemistry mock test 21 July 2026",
"21 June RE-NEET Chemistry answer sheet",
"NEET UG re-exam Chemistry paper analysis",
"RE-NEET Organic Chemistry test series",
"RE-NEET Inorganic Chemistry high-yield questions",
"Chemistry answer key RE-NEET 2026 PDF",
"RE-NEET Biology test series 2026",
"NEET re-exam Biology answer key 21 June",
"RE-NEET 21 July Biology question paper",
"RE-NEET Biology NCERT-based mock test",
"NEET UG re-test Biology solved paper",
"RE-NEET Zoology and Botany answer sheet",
"NEET re-exam Physics question paper PDF",
"Unofficial RE-NEET Physics answer sheet 2026",
"RE-NEET Physics numerical solutions",
"Download RE-NEET 21 June 2026 answer key PDF",
"RE-NEET 21 July 2026 question paper download with solutions",
"NEET UG re-exam answer key by expert faculties",
"RE-NEET official answer key release date 2026",
"playwithdate.in NEET re-exam paper solution PDF",
"RE-NEET last minute revision test series",
"NEET 2026 re-test expected questions",
"RE-NEET syllabus-wise mock test papers",
"NEET UG re-exam 2026 practice paper"
    
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