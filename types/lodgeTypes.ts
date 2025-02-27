export interface LodgeFormData {
  lodgeName: string
  place: string
  city: string
  state: string
  pincode: number
  maplink: string
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
  lodgeType: string
  images: []
  imageAddress:[]
  description: string
  base64Images:any
}

export const defaultValues: LodgeFormData = {
  lodgeName: "",
  place: "",
  city: "Hazaribagh",
  state: "Jharkhand",
  pincode: 825312,
  maplink: "",
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
  imageAddress : [],
  images: [], // ✅ Now explicitly an empty array of `File`
  description: "",
  base64Images:[],
  lodgeType: "",
};


