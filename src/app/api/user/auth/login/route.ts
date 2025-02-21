import { NextRequest, NextResponse } from "next/server";
import userSchema from "../../../../../../models/UserModel";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { connect_db } from "../../../../../../utils/connect";


export async function POST(request: NextRequest) {
    try {
        await connect_db()
        const reqBody = await request.json()
        const { email, password, remeber } = reqBody

        const user = await userSchema.findOne({ email })

        if (!user) {
            return NextResponse.json({
                message: 'user not exist',
                success: false
            })
        }

        const passwordValidation = await bcryptjs.compare(password, user.password)

        if (!passwordValidation) {
            return NextResponse.json({
                message: 'invaild password'
            })
        }

        const token = jwt.sign({
            _id: user._id,
        }, process.env.JWT_KEY!, { expiresIn: remeber==='on' ? '30d' : '1d' })


        const response = NextResponse.json({
            message: 'login successfull',
            success: true,
            user
        })

        // const decoded = jwt.verify(token, process.env.JWT_KEY!)
        // console.log(decoded)

        response.cookies.set('token', token)
        return response





    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        })
    }


}