'use client';

import React, { createContext, useContext, useState } from 'react';
import Preloader from '@/app/test/Preloader';

interface PreloaderContextProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextProps | undefined>(undefined);

export const PreloaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <PreloaderContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <Preloader />}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) throw new Error('usePreloader must be used within PreloaderProvider');
  return context;
};
