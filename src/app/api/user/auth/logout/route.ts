import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest){

    try {

        const response = NextResponse.json({
            message: 'logout successfull'
        })

        response.cookies.set('token', '')
        return response
        
    } catch (error:any) {
        console.log(error.message)
    }
}