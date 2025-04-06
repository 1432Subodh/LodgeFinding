import { NextRequest, NextResponse } from "next/server";
import { connect_db } from "../../../../../utils/connect";
import lodgeSchema from "../../../../../models/LodgeModel";
import { checkPrimeSync } from "crypto";

connect_db()

export async function POST(request: NextRequest) {
    try {
        // ✅ Connect to MongoDB

        const reqBody = await request.json();
        const { search } = reqBody;

        // ✅ Optional: Guard against empty search
        if (!search || typeof search !== 'string') {
            return NextResponse.json({ message: 'Search query is required.' }, { status: 400 });
        }

        // ✅ Perform full-text search
        const results = await lodgeSchema.find(
            { $text: { $search: search } },
            { score: { $meta: "textScore" } }
        )
        .sort({ score: { $meta: "textScore" } })
        .select("lodgeName place city state roomPrice availableRooms images score lodgeType");

        return NextResponse.json({
            message: 'Search results retrieved successfully ✅',
            results
        });
    } catch (error: any) {
        console.error("Search Error ❌", error.message);
        return NextResponse.json({
            message: error.message || 'Something went wrong'
        }, { status: 500 });
    }
}
