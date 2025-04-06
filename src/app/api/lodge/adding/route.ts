import { NextRequest, NextResponse } from "next/server";
import cloudinaryConfig from "../../../../../utils/cloudinary";
import lodgeSchema from "../../../../../models/LodgeModel";
import { connect_db } from "../../../../../utils/connect";


connect_db()
export async function POST(request: NextRequest) {
  try {

    const cloudinaryInstance = cloudinaryConfig();
    // // console.log(cloudinaryConfig)


    const reqBody = await request.json();
    const { city, description, place, coordinates, facilities, htmlMapLink, lodgeType, maplink, images, availableRooms, lodgeName, owner, pincode, roomPrice, state } = reqBody


    console.log('asdf')
      const uploadedImages = await Promise.all(
        images.map((base64: string) => cloudinaryInstance.uploader.upload(base64,{
          transformation: [
            { width: 1200, height: 900, crop: "limit" },
            { quality: "auto" },
            { fetch_format: "auto" }
          ]
        }, function(error, result) {
          console.log(result);
        }))
      );
      const imageUrls = uploadedImages.map(result => result.secure_url);
      console.log(imageUrls)
 


    const newLodge = new lodgeSchema({
      lodgeName,
      place,
      city,
      state,
      pincode,
      lodgeType,
      maplink: maplink,
      htmlMapLink,
      coordinates: {
        lat: coordinates.lat,
        lng: coordinates.lng
      },
      roomPrice,
      roomPriceText: roomPrice.toString(),
      facilities,
      owner: {
        name: owner.name,
        contact: owner.contact,
        email: owner.email,
      },
      availableRooms,
      images: imageUrls, // Store image URLs or base64 strings
      thumbnailImage: imageUrls[0],
      description,
      // base64Images: { type: [String], default: [] },
    }
    )

    // "lodges validation failed: owner.email: Path `owner.email` is required., owner.contact: Path `owner.contact` is required., owner.name: Path `owner.name` is required."

    // console.log(newLodge)
    const savedLodge = await newLodge.save()


    return NextResponse.json({
      savedLodge,
      success: true
    })
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      
    })
  }

}