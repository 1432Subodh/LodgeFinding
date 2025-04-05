import { NextRequest, NextResponse } from "next/server";
import lodgeSchema from "../../../../../models/LodgeModel";
import { connect_db } from "../../../../../utils/connect";



export async function GET (){
    await connect_db()
    try {
        const lodges = await lodgeSchema.find()
    
        return NextResponse.json({
            message: 'lodges found',
            lodges
        })
    } catch (error:any) {
        return NextResponse.json({
            message: error.message
        })
    }
} 
export async function POST(request:NextRequest) {
    try {
        await connect_db()
    
        const reqBody = await request.json();
        const {id} = reqBody;
        
        
        const lodge = await lodgeSchema.findById(id)
    
        if(!lodge){
            return NextResponse.json({
                message: 'lodge not found',
            })
        }
    
        return NextResponse.json({
            message: 'lodge found',
            lodge
        })
    } catch (error:any) {
        return NextResponse.json({
            error: error.message
        })
    }
}