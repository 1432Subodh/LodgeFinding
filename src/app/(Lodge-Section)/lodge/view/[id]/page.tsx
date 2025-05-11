import { Metadata } from 'next';
import ViewWarpper from './viewWarpper';

type PageProps = any

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
 const { id } = await params
  const res = await fetch(`${process.env.DOMAIN}api/lodge/get`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
    cache: 'no-store',
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

function Page() {
  return <ViewWarpper />;
}

export default Page;
