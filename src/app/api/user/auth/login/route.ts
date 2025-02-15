import { NextRequest, NextResponse } from "next/server";
import userSchema from "../../../../../../models/UserModel";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'


export async function POST(request: NextRequest) {
    const reqBody = await request.json()

    const { password, email, remember } = reqBody

    const user = await userSchema.findOne({ email })

    if (!user) {
        return NextResponse.json({
            message: "user not found",
            success: false

        },{status:202})
    }
    const validation = await bcryptjs.compare(password,user.password)
    if(!validation){
        return NextResponse.json({
            message: "Incorrect Password",
            success: false
        })
    }


    const token = jwt.sign({
        email : user.email,
        userId : user._id,
    }, process.env.SCRECT_KEY!,{expiresIn : `${remember=='on' ? '30d': '1d'}`})

    const response = NextResponse.json({
        message: 'login successfull',
        success: true
    },{status:200})

    response.cookies.set('token', token,{
        httpOnly: true,
    })
    return response


    
}