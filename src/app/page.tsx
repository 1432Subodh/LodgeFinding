import { Hero } from "@/components/hero"
import { CategorySection } from "@/components/category-section"
import { PopularLodges } from "@/components/popular-lodges"
import { TestimonialSection } from "@/components/testimonial-section"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
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
  )
}

