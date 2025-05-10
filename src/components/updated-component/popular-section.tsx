"use client";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  User,
  Star,
} from "lucide-react";
import Image from "next/image";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchPopularLodge } from "@/redux/lodgeSlice";
import ExploreButton from "../../../context/ExploreButton";

export default function PopularLodges() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const { popularLodge, loading, error }: any = useSelector(
    (state: RootState) => state.lodgeData,
    shallowEqual
  );
  console.log(popularLodge);
  // const popularLodge = [
  //   {
  //     id: 1,
  //     name: "Alpine Retreat",
  //     location: "Aspen, Colorado",
  //     rating: 4.9,
  //     price: 349,
  //     image: "/api/placeholder/800/500",
  //     description: "Nestled among towering pines with breathtaking mountain views, this luxury lodge offers the perfect blend of rustic charm and modern comfort.",
  //     amenities: ["Hot Tub", "Fireplace", "Mountain View", "Fully Equipped Kitchen"]
  //   },
  //   {
  //     id: 2,
  //     name: "Lakeside Haven",
  //     location: "Lake Tahoe, California",
  //     rating: 4.8,
  //     price: 299,
  //     image: "/api/placeholder/800/500",
  //     description: "Wake up to stunning lake views in this waterfront lodge with private dock access and expansive windows showcasing nature's beauty.",
  //     amenities: ["Lake Access", "Private Dock", "Panoramic Views", "Outdoor Fire Pit"]
  //   },
  //   {
  //     id: 3,
  //     name: "Forest Hideaway",
  //     location: "Smoky Mountains, Tennessee",
  //     rating: 4.7,
  //     price: 275,
  //     image: "/api/placeholder/800/500",
  //     description: "Secluded in a lush forest setting, this cozy lodge provides an intimate escape with wildlife sightings and tranquil surroundings.",
  //     amenities: ["Wildlife Viewing", "Hiking Trails", "Outdoor Shower", "Wood-Burning Stove"]
  //   },
  // ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % popularLodge.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + popularLodge.length) % popularLodge.length
    );
  };

  useEffect(() => {
    dispatch(fetchPopularLodge());
  }, [dispatch]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % popularLodge.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [popularLodge.length]);

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Popular popularLodge</h2>
          <p className="max-w-2xl mx-auto">
            Discover our handpicked selection of premium popularLodge, offering
            unforgettable experiences in breathtaking natural settings with all
            the comforts of home.
          </p>
        </div>

        {/* Lodge Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {popularLodge.map((lodge: any, i: any) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 bg-card">
                    <div className="relative sm:h-96 h-64">
                      <Image
                        src={lodge?.thumbnailImage || "/placeholder.svg"}
                        alt={lodge.lodgeName}
                        width={500}
                        height={0}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-card px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="h-4 w-4 text-amber-500 mr-1 fill-amber-500" />
                        <span>{lodge?.rating || "NA"}</span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-between capitalize">
                      <div>
                        <div className="flex items-center mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">
                            {lodge?.place}, {lodge?.city}, {lodge?.state}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">
                          {lodge.name}
                        </h3>
                        <p className="mb-6">{lodge.description}</p>
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold mb-2">
                            Amenities
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(lodge.facilities)
                              .filter(([key, value]) => value === true) // Filter only the keys with `true` value
                              .map(([key, value], i) => (
                                <span
                                  key={i}
                                  className="bg-primary text-stone-800 text-xs px-3 py-1 rounded-full"
                                >
                                  {key} {/* Display the key */}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-2xl font-bold">
                              ${lodge.roomPrice}
                            </span>
                            <span className="text-sm"> / night</span>
                          </div>
                          <ExploreButton href={`/lodge/view/${lodge._id}`}>
                            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors font-medium">
                              Book Now
                            </button>
                          </ExploreButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 bg-white rounded-full p-2 shadow-lg hover:bg-stone-100 transition-colors"
            aria-label="Previous lodge"
          >
            <ChevronLeft className="h-6 w-6 text-stone-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 bg-white rounded-full p-2 shadow-lg hover:bg-stone-100 transition-colors"
            aria-label="Next lodge"
          >
            <ChevronRight className="h-6 w-6 text-stone-800" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {popularLodge.map((_: any, index: any) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-primary" : "bg-stone-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-stone-100 dark:bg-zinc-900 rounded-xl p-8 text-center shadow-inner">
          <h3 className="text-2xl font-bold mb-4">Find Your Perfect Getaway</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
            Browse our complete collection of unique popularLodge and cabins in
            spectacular locations, each offering a distinctive experience with
            all the amenities you need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              <Calendar className="h-5 w-5" />
              Check Availability
            </button>
            <button className="flex items-center gap-2 bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 px-6 py-3 rounded-lg transition-colors font-medium">
              <User className="h-5 w-5" />
              View All popularLodge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
