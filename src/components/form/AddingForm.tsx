"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import ImageUploadWithPreview from "./ImageUploadWithPreview";
import BasicInfo from "./BasicInfo";
import Location from "./Location";
import Amenities from "./Amenities";
import { useState } from "react";
import { Api_addingLodge, convertingImgToBase64 } from "../../../helper/helper";
import axios from "axios";
import toast from "react-hot-toast";

export default function LodgeForm() {

  const [isDisable, setIsDisable] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsDisable(true);
    const formData = new FormData(e.currentTarget);
  
    // Images
    let imagesArray: any = Array.from(formData.getAll("images"));
    const thumbnailImage: any = formData.get("thumbnailImage");
    console.log(imagesArray[0].name==='')
    if(imagesArray[0].name===''){
      imagesArray = []
    }

    const imageUrls = await convertingImgToBase64([thumbnailImage,  ...imagesArray]);
    // Basic Information
    const lodgeName = formData.get("lodgeName");
    const place = formData.get("place");
    const city = formData.get("city");
    const state = formData.get("state");
    const pincode = formData.get("pincode");
    const lodgeType = formData.get("lodgeType");
    const roomPrice = Number(formData.get("roomPrice"));
    const availableRooms = Number(formData.get("availableRooms"));
  
    // Location
    const maplink = formData.get("maplink");
    const htmlMapLink = formData.get("htmlMapLink");
    const lat = parseFloat(formData.get("coordinates.lat") as string);
    const lng = parseFloat(formData.get("coordinates.lng") as string);
  
    // Amenities (ensure these are checkboxes with proper names)
    const wifi = formData.get("facilities.wifi")=== "on";
    const parking = formData.get("facilities.parking")=== "on";
    const foodAvailable = formData.get("facilities.foodAvailable")=== "on";
    const airConditioning = formData.get("facilities.airConditioning")=== "on";
    const laundryService = formData.get("facilities.laundryService")=== "on";
  
    // Owner
    const ownerName = formData.get("owner.name");
    const ownerContact = formData.get("owner.contact");
    const ownerEmail = formData.get("owner.email");
  
    // Description
    const description = formData.get("description");
  
    // Final structured object
    const lodgeData = {
      lodgeName,
      place,
      city,
      state,
      pincode,
      lodgeType,
      maplink,
      htmlMapLink,
      coordinates: {
        lat,
        lng
      },
      roomPrice,
      roomPriceText: roomPrice.toString(),
      facilities: {
        wifi,
        parking,
        foodAvailable,
        airConditioning,
        laundryService
      },
      owner: {
        name: ownerName,
        contact: ownerContact,
        email: ownerEmail
      },
      availableRooms,
      images: imageUrls, 
      description
    };
    console.log(lodgeData)


    toast.promise(
      axios.post(Api_addingLodge, lodgeData),
       {
         loading: 'Saving...',
         success: <b>Lodge Created!</b>,
         error: <b>Try Again.</b>,
       }
     );

  
  };

  

  return (
    <div className="container mx-auto py-4 px-2 sm:px-4 sm:py-8 max-w-4xl">
      <form onSubmit={handleSubmit}>
        <Card className="shadow-lg border-0 w-full ">
          <CardHeader className="bg-primary/5 px-4 py-4 sm:px-6 sm:py-6">
            <CardTitle className="text-xl sm:text-2xl font-bold">Lodge Registration</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Enter the details of your property to list it on our platform
            </CardDescription>
          </CardHeader>

          <CardContent className="p-3 sm:p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Basic Information</h2>
              <BasicInfo />
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Location</h2>
              <Location />
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Amenities</h2>
              <Amenities />
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Media</h2>
              <ImageUploadWithPreview />

              <div className="space-y-1">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your property - highlight unique features, nearby attractions, etc."
                  className="min-h-32"
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between border-t p-4 sm:p-6 bg-muted/10">
            <Button variant="outline" type="button" className="w-full sm:w-auto">Cancel</Button>
            <Button  type="submit" className="w-full sm:w-auto">Submit Registration</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}