import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"


export async function extractCookies(request:NextRequest) {
    try {
        
        const token = request.cookies.get('token')?.value ||''

        if(!token){
            return
        }

        const decoded:any = jwt.verify(token, process.env.SCRECT_KEY!)
        return decoded.userId

    } catch (error) {
        console.log(error)
    }
}