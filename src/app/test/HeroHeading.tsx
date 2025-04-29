import { useEffect, useState } from "react";

export default function HeroHeading() {
  const places = ["Korrah", "Zabara", "Matwari", "Babugaon"];
  const [currentPlace, setCurrentPlace] = useState("");
  const [placeIndex, setPlaceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = places[placeIndex];
    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setCurrentPlace((prev) => prev + current[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentPlace("");
        setCharIndex(0);
        setPlaceIndex((prev) => (prev + 1) % places.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, placeIndex, places]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
      Find Lodge At <br className="sm:hidden" /> <span className="text-primary">{currentPlace}</span>
      <span className="border-r-2 border-primary animate-pulse ml-1" />
    </h1>
  );
}
