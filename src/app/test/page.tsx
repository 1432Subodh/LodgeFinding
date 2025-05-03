"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Hero from "./Hero";
import PopularLodge from "./PopularLodge";
import Header from "./Header";

function Page() {

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

      


      
    </>
  );
}

export default Page;
