import React, { Suspense } from "react"
import type { Metadata, Viewport } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import { CursorFollower } from "@/components/CursorFollower" // Restored import
import MetaPixel from "@/components/MetaPixel"

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
  display: 'swap'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Ahsan Art - Creative Studio | Product Photography & Videography',
  description: 'Premium product photography and videography studio. Specializing in e-commerce, Amazon content, food photography, and UGC videos. 5+ years of professional experience.',
  keywords: ['product photography', 'videography', 'e-commerce', 'amazon', 'food photography', 'ugc videos', 'creative studio'],
  authors: [{ name: 'Ahsan Art' }],
  openGraph: {
    title: 'Ahsan Art - Creative Studio',
    description: 'Premium product photography and videography studio',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#8c52ff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <CursorFollower /> {/* Restored global cursor component */}
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        {children}
      </body>
    </html>
  )
}