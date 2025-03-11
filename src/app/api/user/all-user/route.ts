import { NextResponse } from "next/server";
import { connect_db } from "../../../../../utils/connect";
import userSchema from "../../../../../models/UserModel";


export async function GET (){
    try {
        
        connect_db()

        const users = await userSchema.find();

        return NextResponse.json({
            message: 'user found',
            users
        })

    } catch (error:any) {
        return NextResponse.json({
            message: error.message
        })
    }
}