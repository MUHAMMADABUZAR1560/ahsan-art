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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '4212243222420918');
fbq('track', 'PageView');
            `
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4212243222420918&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <CursorFollower /> {/* Restored global cursor component */}
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        {children}
      </body>
    </html>
  )
}