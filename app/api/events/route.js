
import { v2 as cloudinary } from "cloudinary";
import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import EventModel from '@/database/event.model';

export async function GET() {
    try {
        await connectDB();
        const events = await EventModel.find({}).sort({createdAt:-1});
        return NextResponse.json({ events });
    } catch (e) {
        return NextResponse.json({ message: "Failed to fetch events", error: e.message });
    }
}

export async function POST(req) {
    try{
        await connectDB();

        let event;
        let file;
        try {
            const formData = await req.formData();
            event = Object.fromEntries(formData.entries());
            file = formData.get('image');
        } catch (e) {
            try {
                event = await req.json();
                file = event.image; // assume base64 data URI
                delete event.image;
            } catch (e2) {
                return NextResponse.json({message:"Invalid data format", error:e.message})
            }
        }

        if(!file){
            return NextResponse.json({message: "file is required"}, {status:400})
        }
    
    let uploadResult;
    if (typeof file === 'string') {
        uploadResult = await cloudinary.uploader.upload(file, { resource_type: "image", folder: "DevEvent" });
    } else {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        uploadResult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { resource_type: "image", folder: "DevEvent" },
                (error, result) => {
                    if (error) return reject(error)
                    resolve(result)
                }
            )

            stream.end(buffer)
        })
    }

event.image = uploadResult.secure_url;




    const createdEvent  =  await EventModel.create(event)
    return NextResponse.json({event:createdEvent, message:"Successfully created an event"})


    }catch(e){
        return NextResponse.json({message:"Failed to create Event", error: e? e.message:"unknown"})
    }
}