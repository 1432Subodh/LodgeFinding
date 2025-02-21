import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import userSchema from "../../../../../../models/UserModel";

import { connect_db } from "../../../../../../utils/connect";

await connect_db()


 export async function GET(request: NextRequest){
    try {
        
        const cookies:any = request.cookies.get('token')?.value
        
        console.log(cookies)

        const decoded:any = jwt.verify(cookies, process.env.JWT_KEY!)

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