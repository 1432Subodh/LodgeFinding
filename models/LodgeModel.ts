import mongoose from "mongoose";

// 1. Define schema
const lodgeSchemaDef = new mongoose.Schema({
    lodgeName: { type: String, required: true },
    place: { type: String, required: true },
    city: { type: String, default: "Hazaribagh" },
    state: { type: String, default: "Jharkhand" },
    pincode: { type: Number, default: 825312 },
    maplink: { type: String, required: true },
    htmlMapLink: { type: String, required: true },
    lodgeType: { type: String, required: true },
    coordinates: {
        lat: { type: Number, default: 0 },
        lng: { type: Number, default: 0 },
    },
    roomPrice: { type: Number },
    roomPriceText: { type: String },
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
    thumbnailImage: { type: String, required: true },
    images: { type: [String], default: [] },
    description: { type: String, default: "" },
}, { timestamps: true });

// 2. Add full-text search index
lodgeSchemaDef.index(
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
        weights: {
            lodgeName: 5,
            city: 3,
            description: 2,
            state: 1,
            place: 1,
            lodgeType: 1,
            roomPriceText: 1
        }
    }
);

// 3. Create or reuse model
const LodgeModel = mongoose.models.lodges || mongoose.model('lodges', lodgeSchemaDef);

// 4. Optional (but recommended): Ensure index creation at runtime
// Place this where you initialize your DB connection (e.g., in a connectDB function or after mongoose.connect)
LodgeModel.syncIndexes()
    .then(() => console.log("Lodge text indexes are in sync ✅"))
    .catch(err => console.error("Index sync error ❌", err));

export default LodgeModel;
