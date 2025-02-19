import { NextRequest, NextResponse } from "next/server";
import { connect_db } from "../../../../../utils/connect";
import userSchema from "../../../../../models/UserModel";

connect_db()

async function POST (request: NextRequest){


    const users = userSchema.find({adminRequest: true})
    if(!users){
        return NextResponse.json({
            message: 'admin request not found'
        })
    }

    return NextResponse.json({
        message: 'admin request found'
    })
}