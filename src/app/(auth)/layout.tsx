'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>

      {children}

    </div>
  );
}
