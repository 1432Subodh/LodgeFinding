import { Metadata } from 'next';
import ViewWarpper from './viewWarpper';

export const dynamic = 'force-dynamic'; // ✅ Ensures SSR for dynamic pages

type PageProps = any;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = params;

  let data: any = {};
  try {
    const res = await fetch(`${process.env.DOMAIN}api/lodge/get`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
      cache: 'no-store', // ✅ No caching for fresh data
    });

    if (!res.ok) {
      console.error("API fetch failed:", res.statusText);
      throw new Error("API fetch error");
    }

    data = await res.json();
  } catch (error) {
    console.error("Metadata generation error:", error);
  }

  return {
    title: data.lodge?.lodgeName || 'Lodge Hazar',
    description: data.lodge?.description || 'Default Description',
    openGraph: {
      title: data.lodge?.lodgeName || 'Lodge Hazar',
      description: data.lodge?.description || 'Default Description',
      images: [data.lodge?.thumbnailImage || '/default-og.jpg'],
    },
  };
}

function Page() {
  return <ViewWarpper />;
}

export default Page;
