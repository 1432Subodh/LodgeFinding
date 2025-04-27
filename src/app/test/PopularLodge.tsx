// components/PopularLodge.tsx
import { useState } from 'react';
import Image from 'next/image';

interface PopularLodgeProps {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: string;
  imageUrl: string;
  amenities: string[];
  description: string;
}

const popularLodges: PopularLodgeProps[] = [
  {
    id: 1,
    name: "Mountain View Cabin",
    location: "Swiss Alps",
    rating: 4.9,
    price: "$349",
    imageUrl: "https://placehold.co/600x400",
    amenities: ["Hot Tub", "Fireplace", "Mountain View", "Ski-in/Ski-out"],
    description: "Luxurious cabin with panoramic mountain views and direct access to ski slopes."
  },
  {
    id: 2,
    name: "Beachfront Villa",
    location: "Malibu, California",
    rating: 4.8,
    price: "$529",
    imageUrl: "https://placehold.co/600x400",
    amenities: ["Private Beach", "Infinity Pool", "Ocean View", "Outdoor Kitchen"],
    description: "Spectacular oceanfront property with private beach access and stunning sunset views."
  },
  {
    id: 3,
    name: "Treehouse Retreat",
    location: "Redwood Forest",
    rating: 4.7,
    price: "$299",
    imageUrl: "https://placehold.co/600x400",
    amenities: ["Suspended Deck", "Forest View", "Outdoor Shower", "Hiking Trails"],
    description: "Unique elevated living experience surrounded by ancient redwoods and natural beauty."
  }
];

export default function PopularLodge() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % popularLodges.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? popularLodges.length - 1 : prev - 1));
  };

  const activeLodge = popularLodges[activeIndex];

  return (
    <section className="h-screen w-full relative overflow-hidden" id="popular-lodges">
      <div className="hidden md:absolute md:top-0 md:left-0 md:w-full md:py-12 md:px-16 md:z-10 md:block">
        <h2 className="text-3xl md:text-5xl font-bold">
          Popular <span className="text-teal-600">Lodges</span>
        </h2>
        <div className="w-24 h-1 bg-teal-500 mt-4"></div>
      </div>


      <div className="flex h-full items-center justify-center px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
          {/* Left Side - Lodge Image */}
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
            <div className="absolute bottom-6 left-6 z-20 flex space-x-3">
              {popularLodges.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${activeIndex === index
                      ? 'bg-white w-8'
                      : 'bg-white bg-opacity-60 hover:bg-opacity-90'
                    }`}
                  aria-label={`View lodge ${index + 1}`}
                />
              ))}
            </div>
            {popularLodges.map((lodge, index) => (
              <div
                key={lodge.id}
                className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src='/placeholder.svg'
                    alt={lodge.name}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
            ))}

            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-3 rounded-full z-20 transition-all"
              aria-label="Previous lodge"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-3 rounded-full z-20 transition-all"
              aria-label="Next lodge"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Side - Lodge Details */}
          <div className="flex flex-col justify-center p-6 md:p-12 dark:bg-zinc-900 bg-zinc-100 rounded-2xl shadow-lg">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-200 font-medium">Featured Lodge</span>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27z" />
                </svg>
                <span className="ml-1 font-semibold">{activeLodge.rating}</span>
              </div>
            </div>

            <h3 className="text-3xl font-bold  mb-2">{activeLodge.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {activeLodge.location}
            </p>

            <p className="text-gray-700 dark:text-gray-400 mb-8">{activeLodge.description}</p>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
              <div className="flex flex-wrap gap-2">
                {activeLodge.amenities.map((amenity, index) => (
                  <span key={index} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div>
                <span className="block text-gray-500 text-sm">per night</span>
                <span className="text-3xl font-bold text-teal-600">{activeLodge.price}</span>
              </div>
              <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}