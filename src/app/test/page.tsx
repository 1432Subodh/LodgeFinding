"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Hero from "./Hero";
import PopularLodge from "./PopularLodge";
import Header from "./Header";

function Page() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Fixed timeout to remove loader
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000); // 3 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <Head>
        <title>Find Your Perfect Lodge | LodgeScape</title>
        <meta
          name="description"
          content="Discover breathtaking lodges for your next getaway"
        />
      </Head>

      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <Hero />
      <div className="snap-start" id="popular-lodges">
          <PopularLodge />
        </div>
        <div className="snap-start flex justify-center items-center w-full h-screen">
          <h1>kaise ho</h1>
        </div>
      </main>

      
    </>
  );
}

export default Page;
