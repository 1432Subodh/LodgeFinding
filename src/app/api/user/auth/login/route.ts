// import { NextRequest, NextResponse } from "next/server";
// import userSchema from "../../../../../../models/UserModel";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { NextRequest, NextResponse } from "next/server";
import userSchema from "../../../../../../models/UserModel";
import { connect_db } from '../../../../../../utils/connect';


// export async function POST(request: NextRequest) {
//     const reqBody = await request.json()

//     const { password, email, remember } = reqBody

//     const user = await userSchema.findOne({ email })

//     if (!user) {
//         return NextResponse.json({
//             message: "user not found",
//             success: false

//         },{status:202})
//     }
//     const validation = await bcryptjs.compare(password,user.password)
//     if(!validation){
//         return NextResponse.json({
//             message: "Incorrect Password",
//             success: false
//         })
//     }


//     const token = jwt.sign({
//         email : user.email,
//         userId : user._id,
//     }, process.env.SCRECT_KEY!,{expiresIn : `${remember=='on' ? '30d': '1d'}`})

//     const response = NextResponse.json({
//         message: 'login successfull',
//         success: true
//     },{status:200})

//     response.cookies.set('token', token,{
//         httpOnly: true,
//     })
//     return response


    
// }

connect_db()

export async function POST(request:NextRequest) {
    const reqBody = await request.json()
    const{email, password, remember} = reqBody;

    const isUser = await userSchema.findOne({email})

    if(!isUser){
        return NextResponse.json({message: 'User not exits first sign up'})
    }

    const validatedPassword = await bcryptjs.compare(password, isUser.password)

    if(!validatedPassword){
        return NextResponse.json({message: 'Invalid Password'})
    }


    const token = jwt.sign({
        userId : isUser._id,
        email: isUser.email,
    }, process.env.SECRET_KEY!)


    const response = NextResponse.json({
        message: 'Login Successfull',
        isUser,
        success: true
    },{status: 200})
    
    response.cookies.set('token', token)

    return response

}