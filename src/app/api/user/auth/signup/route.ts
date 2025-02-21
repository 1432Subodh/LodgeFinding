import { NextRequest, NextResponse } from "next/server";
import { connect_db } from "../../../../../../utils/connect";
import userSchema from "../../../../../../models/UserModel";
import bcryptjs from 'bcryptjs'

connect_db()

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();
        const { username, password, email, firstname, lastname } = reqBody;


        const user = await userSchema.findOne({ email })
        if (user) {

            return NextResponse.json({
                message: 'user already exits',
                success: false
            })
        }


        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new userSchema({
            username, email,
            password: hashedPassword,
            isVerified: true, firstname, lastname,
        })
        const saved = await newUser.save()
        console.log(saved)

        // sending mail : saying for money so I stop this function 

        // await resendEmail({emailType :'USER_VERIFY', userId: savedUser._id, email: savedUser.email})



        return NextResponse.json({
            message: "Registration successful",
            success: true
        }, { status: 200 });


    } catch (error: any) {

        return NextResponse.json({
            error: error.message,
            message: 'from me'
        }, { status: 500 })
    }
}