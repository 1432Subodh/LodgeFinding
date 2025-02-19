import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export async function extractCookies(request: NextRequest) {
    try {
        const token = request.cookies.get('token')?.value;
        console.log("Extracted Token:", token); // Debugging ✅

        if (!token) {
            console.log("No token found in cookies.");
            return null;
        }

        const secretKey = process.env.SECRET_KEY!;
        console.log("SECRET_KEY from env:", secretKey); // Debugging ✅

        if (!secretKey) {
            throw new Error("SECRET_KEY is not defined in environment variables.");
        }

        const decoded: any = jwt.verify(token, secretKey);
        console.log("Decoded Token:", decoded); // Debugging ✅

        return decoded.userId; 

    } catch (error) {
        console.error("JWT Verification Error:", error);
        return null;
    }
}
