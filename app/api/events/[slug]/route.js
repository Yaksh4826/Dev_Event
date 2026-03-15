import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import EventModel from "@/database/event.model";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { slug } = await params;
    console.log("Slug received:", slug);

    const event = await EventModel.findOne({ slug });

    if (!event) {
      return NextResponse.json(
        { message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      event,
      message: "Event fetched successfully"
    });
  } catch (e) {
    console.error("Error fetching event:", e);
    return NextResponse.json(
      { message: "Failed to fetch event", error: e.message },
      { status: 500 }
    );
  }
}