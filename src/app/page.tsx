import { CategorySection } from "@/components/category-section"
import { PopularLodges } from "@/components/popular-lodges"
import { TestimonialSection } from "@/components/testimonial-section"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import Hero from "./test/Hero"
import Head from "next/head"
import Header from "./test/Header"

export default function Home() {
  return (
    <>
    <Head>
        <title>My Awesome Page</title>
        <meta name="description" content="This is a description for SEO." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>}>
      <div className="ralative min-h-screen">
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
    </>
  )
}

