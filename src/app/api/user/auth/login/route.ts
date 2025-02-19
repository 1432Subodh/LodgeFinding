import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import userSchema from "../../../../../../models/UserModel";
import { connect_db } from "../../../../../../utils/connect";

export async function POST(request: NextRequest) {
    try {
        await connect_db(); // Ensure DB is connected ✅

        const reqBody = await request.json();
        const { email, password, remember } = reqBody;

        const user = await userSchema.findOne({ email });

        if (!user) {
            return NextResponse.json({ message: "User not found. Please sign up.", success: false }, { status: 404 });
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ message: "Invalid password", success: false }, { status: 401 });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.SECRET_KEY!,
            { expiresIn: remember === "on" ? "30d" : "1d" } // 30 days if "remember" is checked, otherwise 1 day
        );

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
            },
        });

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: remember === "on" ? 30 * 24 * 60 * 60 : 24 * 60 * 60, // 30 days or 1 day
            path: "/",
        });

        return response;

    } catch (error: any) {
        console.error("Login Error:", error);
        return NextResponse.json({ message: error.message, success: false }, { status: 500 });
    }
}
