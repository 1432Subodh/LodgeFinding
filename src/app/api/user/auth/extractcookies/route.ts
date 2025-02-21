import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import userSchema from "../../../../../../models/UserModel";

import { connect_db } from "../../../../../../utils/connect";



export async function POST(request: NextRequest){
    try {
        await connect_db()

        const reqBody = await request.json()
        const {token} = reqBody
        
        
        const decoded:any = jwt.verify(token, process.env.JWT_KEY!)

        const user = await userSchema.findById(decoded._id)
        return NextResponse.json({
            message: 'asdf',
            decoded,
            user
        })

    } catch (error:any) {
        return NextResponse.json({
            message: error.message
        })
    }
}