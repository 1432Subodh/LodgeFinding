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
      <Hero setIsLoading={setIsLoading} />
      <div className="snap-start" id="popular-lodges">
          <PopularLodge />
        </div>
        <div className="snap-start flex justify-center items-center w-full h-screen">
          <h1>kaise ho</h1>
        </div>
      </main>

      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-card z-50">
          {/* Simple House Icon */}
          <div className="relative mb-6">
            <svg
              className="w-16 h-16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 10.5V21h18V10.5L12 3L3 10.5Z"
                stroke="#14b8a6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>

            {/* Subtle Scanning Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 transform -translate-y-1/2">
              <div className="w-full h-full bg-teal-500 animate-pulse opacity-60"></div>
            </div>
          </div>

          {/* Minimal Text */}
          <p className="text-card-foreground text-sm mb-6">
            Finding your perfect lodge
          </p>

          {/* Clean Progress Bar */}
          <div className="w-48 h-0.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-500 rounded-full"
              style={{
                width: "60%",
                animation: "progress 2s ease-in-out infinite",
              }}
            ></div>
          </div>

          {/* Add keyframes for progress animation */}
          <style jsx>{`
            @keyframes progress {
              0% {
                width: 0%;
              }
              50% {
                width: 60%;
              }
              100% {
                width: 0%;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}

export default Page;
