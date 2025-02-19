import { NextRequest, NextResponse } from "next/server";
import { extractCookies } from "../../../../../helper/extractCookies";
import { connect_db } from "../../../../../utils/connect";
import userSchema from "../../../../../models/UserModel";

export async function GET(request: NextRequest) {
    try {
        await connect_db(); // Ensure DB is connected ✅

        const userId = await extractCookies(request);
        if (!userId) {
            return NextResponse.json({ message: "Invalid or expired token", success: false }, { status: 401 });
        }

        const user = await userSchema.findById(userId).select("-password");

        if (!user) {
            return NextResponse.json({ message: "User not found", success: false }, { status: 404 });
        }

        return NextResponse.json({ message: "User found", user, success: true }, { status: 200 });

    } catch (error: any) {
        // console.error("Profile Fetch Error:", error);
        return NextResponse.json({ message: error.message, success: false }, { status: 500 });
    }
}
