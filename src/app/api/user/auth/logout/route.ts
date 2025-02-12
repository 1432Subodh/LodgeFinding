import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest){
    // request.cookies.delete('token')
    
    const response =  NextResponse.json({
        message:'Logout successfully'
    })
    // response.cookies.set('token','',{
    //     httpOnly: true,
    //     expires: Date.now()
    response.cookies.delete('token')
    return response
}