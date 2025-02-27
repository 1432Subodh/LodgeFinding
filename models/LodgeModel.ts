import mongoose from "mongoose";


const lodge = new mongoose.Schema({
    lodgeName: { type: String, required: true },
    place: { type: String, required: true },
    city: { type: String, default: "Hazaribagh" },
    state: { type: String, default: "Jharkhand" },
    pincode: { type: Number, default: 825312 },
    maplink: { type: String, require: true},
    lodgeType: { type: String, require: true},
    coordinates: {
        lat: { type: Number, default: 0 },
        lng: { type: Number, default: 0 },
    },
    roomPrice: { type: Number},
    roomPriceText: {type:String},
    facilities: {
        wifi: { type: Boolean, default: false },
        parking: { type: Boolean, default: false },
        foodAvailable: { type: Boolean, default: false },
        airConditioning: { type: Boolean, default: false },
        laundryService: { type: Boolean, default: false },
    },
    owner: {
        name: { type: String, required: true },
        contact: { type: String, required: true },
        email: { type: String, required: true },
    },
    availableRooms: { type: Number, default: 0 },
    images: { type: [String], default: [] }, // Store image URLs or base64 strings
    description: { type: String, default: "" },
    // base64Images: { type: [String], default: [] },
}, { timestamps: true })

lodge.index(
    {
        lodgeName: "text", 
        place: "text", 
        city: "text", 
        state: "text", 
        description: "text",
        roomPriceText: "text",
        lodgeType: "text"
    }, 
    {
        weights: { lodgeName: 5, city: 3, description: 2, state: 1, place: 1, lodgeType: 1, roomPriceText: 1 } // Higher weight = More relevance
    }
);



const lodgeSchema = mongoose.models.lodges || mongoose.model('lodges', lodge)

export default lodgeSchema