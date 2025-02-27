import { NextRequest, NextResponse } from "next/server";
import cloudinaryConfig from "../../../../../utils/cloudinary";
import lodgeSchema from "../../../../../models/LodgeModel";
import { connect_db } from "../../../../../utils/connect";


connect_db()
export async function POST(request: NextRequest) {
  try {

    const cloudinaryInstance = cloudinaryConfig();
    // console.log(cloudinaryConfig)


    const reqBody = await request.json();
    const {city, description, place, coordinates, facilities, lodgeType, maplink, base64Images, availableRooms, lodgeName, owner, pincode, roomPrice, state } = reqBody



    // console.log(lodgeType)
    // console.log(base64Images)
    const uploadedImages = await Promise.all(
      base64Images.map((base64: string) => cloudinaryInstance.uploader.upload(base64))
    );
    const imageUrls = uploadedImages.map(result => result.secure_url);
    //   console.log(uploadedImages)

    const newLodge = new lodgeSchema({
      lodgeName,
      place,
      city,
      state,
      pincode,
      lodgeType,
      maplink: maplink,
      coordinates: {
        lat: coordinates.lat,
        lng: coordinates.lng
      },
      roomPrice,
      roomPriceText : roomPrice.toString(),
      facilities: {
        wifi: true,
        parking: false,
        foodAvailable: false,
        airConditioning: true,
        laundryService: false,
      },
      owner: {
        name: owner.name,
        contact: owner.contact,
        email: owner.email,
      },
      availableRooms,
      images: imageUrls, // Store image URLs or base64 strings
      description,
      // base64Images: { type: [String], default: [] },
    }
    )

    const savedLodge = await newLodge.save()
    // console.log(savedLodge)


    return NextResponse.json({
      message: "error.message",
      // imageUrls
    })
  } catch (error: any) {
    return NextResponse.json({
      message: error.message
    })
  }

}