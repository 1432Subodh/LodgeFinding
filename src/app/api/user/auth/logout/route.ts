import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest){

    try {

        // const response = NextResponse.redirect('/')

        const response = NextResponse.json({
            message: 'logout successfull',
            success: true
        })

        response.cookies.delete('token')
        return response
        
    } catch (error:any) {
        // console.log(error.message)
    }
}