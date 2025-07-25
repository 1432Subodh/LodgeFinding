"use client"; // Ensure this is added for Next.js
import { useState, useEffect, useRef } from "react";
import HeroHeading from "./HeroHeading";
import Preloader from "./Preloader";
import Link from "next/link";
import ExploreButton from "../../../context/ExploreButton";

// Define the type for lodge data
interface Lodge {
  id: number;
  name: string;
  location: string;
  videoUrl: string;
  description: string;
}

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Sample lodge data with videos
  const featuredLodges: Lodge[] = [
    {
      id: 1,
      name: "Korrha Chowk",
      location: "Hazaribagh",
      videoUrl: "/video/01.mp4",
      description:
        "Discover serene countryside charm blended with authentic local culture in the heart of Hazaribagh.",
    },
    {
      id: 2,
      name: "Zabra",
      location: "Hazaribagh",
      videoUrl: "/video/02.mp4",
      description:
        "A peaceful escape surrounded by nature, offering a perfect blend of simplicity and scenic beauty.",
    },

    // {
    //   id: 3,
    //   name: "Forest Sanctuary",
    //   location: "Redwood Forest, California",
    //   videoUrl: "/video/3.mp4",
    //   description: "Immerse yourself in nature's embrace",
    // },
  ];

  // Handle video playback control for the current video
  useEffect(() => {
    // console.log(videoRefs.current[0])

    const video = videoRefs.current[0];

    if (video) {
      if (video.readyState >= 3) {
        // Already ready
        console.log("Video readyState:", video.readyState);
        setIsLoading(false);
      } else {
        // Wait for it to become ready
        video.addEventListener("canplay", () => {
          console.log("Video is loaded!");
          setIsLoading(false);
        });
      }
    }

    // Pause all videos first
    // videoRefs.current.forEach((video) => {
    //   if (video) {
    //     video.pause();
    //   }
    // });

    // Get the currently active video
    const currentVideoElement = videoRefs.current[currentVideo];

    if (currentVideoElement) {
      currentVideoElement.muted = true;
      currentVideoElement.currentTime = 0;

      const playPromise = currentVideoElement.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // console.log("Video playing successfully.");
            setIsLoading(false); // If needed
          })
          .catch((err) => {
            console.warn("Play was prevented. Handling gracefully.", err);
            // Maybe show a fallback UI if autoplay is blocked
            setIsLoading(false);
          });
      }
    }

    // Pause all *other* videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentVideo) {
        video.pause();
      }
    });
  }, [currentVideo, isPlaying]);

  // Auto-rotate videos every 8 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % featuredLodges.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying, featuredLodges.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Smooth scroll to Popular Lodges section
  const scrollToPopular = () => {
    document
      .getElementById("popular-lodges")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* <Header /> */}
      <div className="relative h-screen w-full overflow-hidden snap-start">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {featuredLodges.map((lodge, index) => (
            <div
              key={lodge.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentVideo === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <video
                ref={(el: HTMLVideoElement | null) => {
                  videoRefs.current[index] = el;
                }}
                className="object-cover w-full h-full"
                src={lodge.videoUrl || "/video/02.mp4"}
                muted
                loop
                playsInline
                autoPlay
              />
              <div className="absolute inset-0 bg-black  bg-opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative h-[95%] sm:h-full flex flex-col items-center justify-center px-4 text-center text-white z-9">
          <HeroHeading />

          <p className="text-xl md:text-2xl max-w-2xl mb-8 animate-fade-in-delay">
            {featuredLodges[currentVideo].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-fade-in-delay-2 ">
            <ExploreButton href="/lodge">
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 rounded-full text-lg font-semibold transition-colors duration-300">
                Explore Lodges
              </button>
            </ExploreButton>
            <Link href={'/profile'}>
              <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-full text-lg font-semibold transition-all duration-300">
                Create Your Own Lodge
              </button>
            </Link>
          </div>

          {/* Lodge Info & Video Controls */}
          <div className="absolute bottom-10 left-0 right-0 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 z-9">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">
                {featuredLodges[currentVideo].name}
              </h2>
              <p className="text-lg">{featuredLodges[currentVideo].location}</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={togglePlayPause}
                className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all"
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </button>

              {/* Video Selection Indicators */}
              <div className="flex gap-2">
                {featuredLodges.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentVideo === index
                        ? "bg-primary w-6"
                        : "bg-white bg-opacity-50 hover:bg-opacity-80"
                    }`}
                    aria-label={`View lodge ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
        </div>
      </div>
      {/* Preloader */}
      {isLoading && <Preloader />}
    </>
  );
}
