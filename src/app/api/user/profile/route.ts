import { NextRequest, NextResponse } from "next/server";
import { extractCookies } from "../../../../../helper/extractCookies";
import userSchema from "../../../../../models/UserModel";
import { connect_db } from "../../../../../utils/connect";

connect_db()
export async function GET(request: NextRequest) {
    try {
        const userId = await extractCookies(request)

        const user = await userSchema.findOne({ _id:userId }).select('-password')
        if (!user) {
            return NextResponse.json({
                message: 'not a valid cookies',
                success: false
            })
        }
            return NextResponse.json({
                message: 'user found',
                user,
                success: true
            })

    } catch (error: any) {
        return NextResponse.json({
            message: error.message,
            success: false

        })
    }
} 