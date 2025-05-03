"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { usePreloader } from "./PreloaderContext";

interface ExploreButtonProps {
  href: string;
  children: React.ReactNode;
}

const ExploreButton: React.FC<ExploreButtonProps> = ({ href, children }) => {
  const router = useRouter();
  const { setLoading } = usePreloader();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === href) {
      return; // Prevent navigation if the current path is the same as the target path
    }
    setLoading(true);
    setTimeout(() => {
      router.push(href);
    }, 100); // Adjust delay as needed
  };

  return <span onClick={handleClick}>{children}</span>;
};

export default ExploreButton;
