import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Start a Project with Ahsan Art Creative Studio',
  description: 'Get in touch with Ahsan Art Creative Studio to discuss your product photography or videography project. Based in Faisalabad. WhatsApp: 0308-1122525.',
  alternates: { canonical: 'https://www.ahsanart.pk/contact' },
  openGraph: {
    url: 'https://www.ahsanart.pk/contact',
    title: 'Contact Us | Start a Project with Ahsan Art Creative Studio',
    description: 'Contact Ahsan Art Creative Studio for product photography & videography in Faisalabad. WhatsApp: 0308-1122525.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
