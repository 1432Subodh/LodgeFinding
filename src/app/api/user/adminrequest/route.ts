import { NextRequest, NextResponse } from "next/server";
import { connect_db } from "../../../../../utils/connect";
import userSchema from "../../../../../models/UserModel";

connect_db()

export async function GET(request: NextRequest) {


    const users = await userSchema.find({ adminRequest: true })



    if (users.length === 0) {
        return NextResponse.json({
            message: 'admin request not found'
        })
    }

    return NextResponse.json({
        message: 'admin request found',
        users
        // users
    })
}



export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json()
        const { _id, type } = reqBody
    
        const user = await userSchema.findById(_id)
        // console.log(user)
    
        if (!user) {
            return NextResponse.json({
                message: 'user not found',
                success: false
            })
        }
    
        if(type === 'ACCEPT'){
            user.isAdmin= true;    
            user.adminRequest = false
            await user.save()

            return NextResponse.json({
                message: 'Accepted for Admin'
            })
        }else if(type === 'REJECT'){
            user.adminRequest = false
            await user.save()

            return NextResponse.json({
                message: 'Rejected for Admin'
            })
        }
        return NextResponse.json({
                    message: 'some error'
                })
    } catch (error:any) {
        return NextResponse.json({
            message : error.message
        })
    }

    
}