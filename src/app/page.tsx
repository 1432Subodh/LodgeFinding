import { Hero } from "@/components/hero"
import { CategorySection } from "@/components/category-section"
import { PopularLodges } from "@/components/popular-lodges"
import { TestimonialSection } from "@/components/testimonial-section"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Suspense } from "react"

export default function Home() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>}>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <CategorySection />
          <PopularLodges />
          <TestimonialSection />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </Suspense>
  )
}

