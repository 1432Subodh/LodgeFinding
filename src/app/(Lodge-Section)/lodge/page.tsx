import LodgeSection from '@/components/lodges/lodge-section'
import React, { Suspense } from 'react'

function page() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>}>
    <LodgeSection />
  </Suspense>
  )
}
export default page