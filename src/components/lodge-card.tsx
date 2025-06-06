import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Star, Users, Bed, Bath } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { fetchLodgeDetails, removeLodgeDetails } from "@/redux/lodgeSlice";
import ExploreButton from "../../context/ExploreButton";

export function LodgeCard({
  name,
  location,
  rating,
  id,
  beds,
  baths,
  price,
  image,
  lodgeType,
}: {
  name: string;
  location: string;
  rating: number;
  id: number;
  beds: number;
  baths: number;
  price: number;
  image?: string;
  lodgeType: string;
}) {

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card className="overflow-hidden group">
      <div className="flex flex-row md:flex-col">
        {/* Image Section */}
        <div className="w-1/3 md:w-full relative aspect-square md:aspect-[1/0.7] overflow-hidden">
          {/* Wrapper for both Image and Gradient */}
          <div className="relative w-full h-full transition-all duration-300 group-hover:scale-[102%]">
            <Image
              src={image || "/placeholder.svg"}
              alt={name || "something"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />

            {/* Vignette Gradient */}
            {/* {
              image && <div className={`absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_40%,_rgba(0,0,0,0.6)_100%)]`}></div>
            } */}
          </div>

          {/* Lodge Type Badge (Bottom-Right) */}
          {lodgeType && (
            <div className="absolute bottom-2 right-2">
              <Badge className={`text-white capitalize text-xs sm:scale-100 scale-90 ${lodgeType === 'boys' ? 'bg-green-700 hover:bg-green-800' : 'bg-pink-600 hover:bg-pink-700'}`}>
                {lodgeType}
              </Badge>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-2/3 md:w-full p-2 sm:p-3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-1 sm:mb-0">
              <h3 className="font-semibold text-sm sm:text-base line-clamp-1">
                {name} 
              </h3>
              <div className="flex items-center">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                <span className="text-xs sm:text-sm ml-1">{rating}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-2 line-clamp-2 capitalize">
              {location.replace(', Jharkhand', "")}
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-1">
            <div className="flex items-center gap-1">
              <Bed className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{beds}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{baths}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm sm:text-lg font-bold">₹{price}</span>
              <span className="text-xs sm:text-sm text-muted-foreground">/Month</span>
            </div>
            <ExploreButton href={`/lodge/view/${id}`}>
              <Button size="sm" className="text-xs sm:text-sm" onClick={()=>dispatch(removeLodgeDetails())}>
                View Now
              </Button>
            </ExploreButton>
          </div>
        </div>
      </div>
    </Card>
  );
}


export function LodgeCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="flex flex-row md:flex-col">
        {/* Image Skeleton */}
        <div className="w-1/3 md:w-full relative aspect-square md:aspect-[1/0.7]">
          <Skeleton className="h-full w-full" />
        </div>

        {/* Content Skeleton */}
        <div className="w-2/3 md:w-full p-2 sm:p-3 space-y-3">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-[60%]" />
            <Skeleton className="h-4 w-8" />
          </div>

          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-[80%]" />

          <div className="flex gap-4">
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-8" />
          </div>

          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>
    </Card>
  );
}