import { NextRequest, NextResponse } from "next/server";
import { connect_db } from "../../../../../utils/connect";
import userSchema from "../../../../../models/UserModel";

connect_db()

export async function GET (request: NextRequest){


    const users = await userSchema.find({adminRequest: false})


    
    if(users.length === 0){
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