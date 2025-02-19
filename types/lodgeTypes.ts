export interface LodgeFormData {
  lodgeName: string
  place: string
  city: string
  state: string
  pincode: number
  coordinates: {
    lat: number
    lng: number
  }
  roomPrice: number
  facilities: {
    wifi: boolean
    parking: boolean
    foodAvailable: boolean
    airConditioning: boolean
    laundryService: boolean
  }
  owner: {
    name: string
    contact: string
    email: string
  }
  availableRooms: number
  images: string[]
  description: string
}

export const defaultValues: LodgeFormData = {
  lodgeName: "",
  place: "",
  city: "Hazaribagh",
  state: "Jharkhand",
  pincode: 825312,
  coordinates: { lat: 0, lng: 0 },
  roomPrice: 0,
  facilities: {
    wifi: false,
    parking: false,
    foodAvailable: false,
    airConditioning: false,
    laundryService: false,
  },
  owner: {
    name: "",
    contact: "",
    email: "",
  },
  availableRooms: 0,
  images: [],
  description: "",
}

