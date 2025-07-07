import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ISMT College - Redefining Higher Education in Nepal",
  description:
    "Earn prestigious UK qualifications without leaving Nepal. ISMT bridges the gap between academia and industry with internationally recognized, industry-relevant education.",
  keywords:
    "ISMT College, Nepal education, UK degrees, University of Sunderland, Pearson Edexcel, Computer Science, Business Management, Tourism, Cyber Security",
  authors: [{ name: "Rupesh Karki", url: "https://rupeshkarki.com.np" }],
  creator: "Rupesh Karki",
  publisher: "ISMT College",
  robots: "index, follow",
  openGraph: {
    title: "ISMT College - Redefining Higher Education in Nepal",
    description: "Earn prestigious UK qualifications without leaving Nepal with internationally recognized programs.",
    url: "https://ismt.edu.np",
    siteName: "ISMT College",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISMT College - Redefining Higher Education in Nepal",
    description: "Earn prestigious UK qualifications without leaving Nepal with internationally recognized programs.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="developer" content="Rupesh Karki" />
        <meta name="contact" content="rupesh@example.com" />
        <link rel="canonical" href="https://ismt.edu.np" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
