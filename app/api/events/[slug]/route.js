import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import EventModel from '@/database/event.model';

export async function GET(req, { params }) {
    try {
        await connectDB();
        const { slug } = params;
        const event = await EventModel.findOne({ slug });
        if (!event) {
            return NextResponse.json({ message: "Event not found" }, { status: 404 });
        }
        return NextResponse.json({ event });
    } catch (e) {
        return NextResponse.json({ message: "Failed to fetch event", error: e.message });
    }
}