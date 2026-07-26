import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BTSContent } from "./BTSContent"

export const metadata: Metadata = {
  title: "Behind the Scenes | Ahsan Art Creative Studio — Product Content Production Faisalabad",
  description: "Get a behind-the-scenes look at our product photography and videography process at Ahsan Art Creative Studio in Faisalabad. See how we make product content that converts.",
  alternates: { canonical: "https://ahsanart.pk/behind-the-scenes" },
}

export default function BehindTheScenesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BTSContent />
      <Footer />
    </main>
  )
}