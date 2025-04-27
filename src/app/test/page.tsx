// app/page.tsx
'use client'
import React from 'react'
import Head from 'next/head'
import Hero from './Hero';
import PopularLodge from './PopularLodge';
import Header from './Header';

function Page() {
  return (
    <>

      <Head>
        <title>Find Your Perfect Lodge | LodgeScape</title>
        <meta name="description" content="Discover breathtaking lodges for your next getaway" />
      </Head>
      
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Hero Section */}
        <Hero />
        
        {/* Popular Lodge Section */}
        <div className="snap-start">
          <PopularLodge />
        </div>
        <div className='snap-start flex justify-center items-center w-full h-screen '>
          <h1>kaise ho</h1>
        </div>
      </main>
    </>
  );
}

export default Page