import LodgeSection from '@/components/lodges/lodge-section'
import React, { Suspense } from 'react'

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <LodgeSection />
  </Suspense>
  )
}

export default page