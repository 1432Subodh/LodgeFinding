import mongoose from "mongoose";


const lodge = new mongoose.Schema({
    lodgeName: {
        type: String,
        require: true
    },
    location: {
        place: {
            type: String,
            require: true
        },
        city: {
            type: String,
            require: true
        },
        state: {
            type: String,
            require: true
        },
        pincode: {
            type: String,
            require: true
        },
        coordinates: {
            lat: { type: Number, required: true },
            lng: { type: Number, required: true },
        },

        roomPrice: {
            type: Number,
            require: true
        },
        facilities: {
            wifi: { type: Boolean, default: false },
            parking: { type: Boolean, default: false },
            foodAvailable: { type: Boolean, default: false },
            airConditioning: { type: Boolean, default: false },
            laundryService: { type: Boolean, default: false },
        },
        owner: {
            name: { type: String, required: true },
            contact: { type: String , required: true },
            email: { type: String , required: true },
        },
        availableRooms: {
            type: Number,
            required: true,
        },
        images: [{
            type: String, // URLs of images
        }],
        description: {
            type: String,
            trim: true,
        },

    }
})


const lodgeSchema = mongoose.models.lodges || mongoose.model('lodge', lodge)

export default lodgeSchema