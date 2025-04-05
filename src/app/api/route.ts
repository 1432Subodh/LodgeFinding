import { NextRequest, NextResponse } from "next/server";
import { connect_db } from "../../../utils/connect"; 

connect_db()

export async function GET(request:NextRequest){


    // const newUser = new userSchema({
    //     username: 'suadsbodh',
    //     email: 'subodsh@12gmai.com',
    //     password : '23jakadf'
    // })
    // const savedUser = await newUser.save()
    // // console.log(savedUser)

    return NextResponse.json({
        message: 'verify'
    })
}