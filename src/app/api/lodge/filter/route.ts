import { NextRequest } from "next/server";
import { connect_db } from "../../../../../utils/connect";



export async function POST(request:NextRequest){
    try {
        await connect_db()
        const reqBody =await request.json();
        const{lodgType, priceMin, priceMax  } = reqBody;
    } catch (error) {
        
    }

    
}