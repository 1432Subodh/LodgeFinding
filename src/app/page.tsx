import { CategorySection } from "@/components/category-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import Hero from "./test/Hero"
import Head from "next/head"
import Header from "./test/Header"
import PopularLodges from "@/components/updated-component/popular-section"

export const metadata = {
  title: "Lodge Hazar",
  description: "Lodge at Hazaribagh",
};

export default function Home() {
  return (
    <>
    <Head>
        <title>My Awesome Page</title>
        <meta name="description" content="This is a description for SEO." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="ralative min-h-screen">
      <Header />

        <main>
          <Hero />
          
          {/* <CategorySection /> */}
          <PopularLodges/>
          <TestimonialSection />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  )
}

