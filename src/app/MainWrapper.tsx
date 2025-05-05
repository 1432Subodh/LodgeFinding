'use client';
import { TestimonialSection } from "@/components/testimonial-section";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import Hero from "./test/Hero";
import Header from "./test/Header";
import PopularLodges from "@/components/updated-component/popular-section";
import { Suspense } from "react";
import Preloader from "./test/Preloader";
function MainWrapper() {
  return (
    <Suspense fallback={<Preloader/>}>
    <div className="ralative min-h-screen">
        <Header />

        <main>
          <Hero />

          {/* <CategorySection /> */}
          <PopularLodges />
          <TestimonialSection />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </Suspense>
  )
}

export default MainWrapper