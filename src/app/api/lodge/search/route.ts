import { NextRequest, NextResponse } from "next/server";
import { connect_db } from "../../../../../utils/connect";
import lodgeSchema from "../../../../../models/LodgeModel";

connect_db()
export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()

        const {search} = reqBody
        const results = await lodgeSchema.find(
            { $text: { $search: search } },
            { score: { $meta: "textScore" } } // Include score
        )
        .sort({ score: { $meta: "textScore" } }) // Sort by relevance
        .select("lodgeName place city state roomPrice availableRooms images score");


        return NextResponse.json({
            message: 'asdf',
            results
        })
        
    } catch (error:any) {
        return NextResponse.json({
            message: error.message
        })
    }
}