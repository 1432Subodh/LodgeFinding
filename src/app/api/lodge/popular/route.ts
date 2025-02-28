import { NextRequest, NextResponse } from "next/server";
import { connect_db } from "../../../../../utils/connect";
import lodgeSchema from "../../../../../models/LodgeModel";

connect_db()

export async function GET(request: NextRequest) {
    try {

        const randomLodge = await lodgeSchema.aggregate([{ $sample: { size: 4 } }])
        return NextResponse.json({
            message: 'found',
            randomLodge
        })

    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        })
    }
}

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();
        const { location, id } = reqBody;
        const results = await lodgeSchema.find(
            {
                $text: { $search: location },
                _id: { $ne: id }
            },
            { score: { $meta: "textScore" } } // Include score
        )
            .sort({ score: { $meta: "textScore" } }) // Sort by relevance
            .select("lodgeName place city state roomPrice availableRooms images score");

        return NextResponse.json({
            message: 'lodge found',
            results
        })


    } catch (error: any) {
        return NextResponse.json({
            message: error.message
        })
    }
}