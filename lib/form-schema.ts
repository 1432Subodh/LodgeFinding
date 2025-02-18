import * as z from "zod"

export const formSchema = z.object({
  lodgeName: z.string().min(2, "Lodge name must be at least 2 characters"),
  place: z.string().min(2, "Place is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.number().min(6, "Valid pincode is required").max(6),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
  roomPrice: z.number().min(1, "Room price is required"),
  facilities: z.object({
    wifi: z.boolean(),
    parking: z.boolean(),
    foodAvailable: z.boolean(),
    airConditioning: z.boolean(),
    laundryService: z.boolean(),
  }),
  owner: z.object({
    name: z.string(),
    contact: z.string(),
    email: z.string(),
  }),
  availableRooms: z.number().min(1, "Number of rooms is required"),
  description: z.string(),
})

