import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    try {
        return NextResponse.json({
            message: "error.message"
        })
    } catch (error:any) {
        return NextResponse.json({
            message: error.message
        })
    }
}