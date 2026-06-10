import React, { Suspense } from "react"
import type { Metadata, Viewport } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import { CursorFollower } from "@/components/CursorFollower"
import MetaPixel from "@/components/MetaPixel"
import JsonLd from "@/components/JsonLd"

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
  metadataBase: new URL('https://www.ahsanart.pk'),
  title: {
    default: 'Ahsan Art | Product Photography & Videography Studio Faisalabad',
    template: '%s | Ahsan Art Faisalabad',
  },
  description: "Faisalabad's #1 product photography & videography studio for e-commerce brands. Photos, UGC videos & Amazon content that drive sales.",
  authors: [{ name: 'Ahsan Art Creative Studio' }],
  creator: 'Ahsan Art',
  publisher: 'Ahsan Art Creative Studio',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://www.ahsanart.pk',
    siteName: 'Ahsan Art Creative Studio',
    title: 'Ahsan Art Creative Studio | Product Photography & Videography in Faisalabad',
    description: "Faisalabad's e-commerce content studio. Product photography, videography, UGC, and Amazon content that drives real sales.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahsan Art Creative Studio — Product Photography in Faisalabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahsan Art Creative Studio | Product Photography Faisalabad',
    description: 'E-commerce content studio in Faisalabad. Product photography, videography, UGC & Amazon content.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.ahsanart.pk',
  },
  icons: {
    icon: '/favicon.png?v=3',
    shortcut: '/favicon.png?v=3',
    apple: '/favicon.png?v=3',
  },
  verification: {
    google: 'G1u452HZsA8jYIUY4MyaH0c9Af_oWXoxLbMva6GCaaE',
  }
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
    <html lang="en-PK" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <meta property="og:url" content="https://www.ahsanart.pk/" />
        <meta property="og:image" content="https://www.ahsanart.pk/images/og-image.jpg" />
        <meta name="twitter:site" content="@ahsanart_studio" />
        <meta name="twitter:image" content="https://www.ahsanart.pk/images/og-image.jpg" />
        <JsonLd />
        <meta name="google-site-verification" content="G1u452HZsA8jYIUY4MyaH0c9Af_oWXoxLbMva6GCaaE" />
        <link rel="icon" href="/favicon.png?v=3" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png?v=3" type="image/png" />
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
            className="hidden"
            src="https://www.facebook.com/tr?id=4212243222420918&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <CursorFollower />
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        {children}
      </body>
    </html>
  )
}