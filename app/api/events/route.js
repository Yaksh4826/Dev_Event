
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import EventModel from '@/database/event.model';

export async function POST(req) {
    try{
        await connectDB();
    const formData = await req.formData()

        let event
    try{
        event = Object.fromEntries(formData.entries())
    }catch(e){
        return NextResponse.json({message:"Invalid data format{JSON needed}", error:e.message})
    }

    const createdEvent  =  await EventModel.create(event)
    return NextResponse.json({event:createdEvent, message:"Successfully created an event"})


    }catch(e){
        return NextResponse.json({message:"Failed to create Event", error: e? e.message:"unknown"})
    }
}