import React from 'react'
import ViewWarpper from './viewWarpper'

import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  console.log(id)

  // Use full URL if fetching server-side from an API
  const res = await fetch(`${process.env.DOMAIN}api/lodge/get`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
    // Ensure it doesn't cache (optional, for dynamic data)
    cache: 'no-store'
  });

  const data = await res.json();

  return {
    title: data.lodge?.lodgeName || 'Lodge Hazar',
    description: data.lodge?.description || 'Default Description',
    openGraph: {
      title: data.lodge?.lodgeName,
      description: data.lodge?.description,
      images: [data.lodge?.thumbnailImage || '/default-og.jpg'],
    },
  };
}


function page() {
  return (
    <ViewWarpper/>
  )
}

export default page