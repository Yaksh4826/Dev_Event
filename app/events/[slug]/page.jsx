import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Calendar } from "lucide-react";
import { Contact } from "lucide-react";
import { MapPin } from "lucide-react";
import { Laptop } from "lucide-react";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;




const EventDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const response = await fetch(`${base_url}/api/events/${slug}`);
  const {
    event: {
      description,
      overview,
      date,
      location,
      audience,
      time,
      agenda,
      tags,
      image,
      mode,
      organizer,
    },
  } = await response.json();

  return (
    <section id="event">
        <Link href="/" className="text-sm text-blue-400 m-3 flex gap-1.5 items-center"><MoveLeft size={14}/> Back to Home</Link>
      <div className="header">
        <h1> Event Description</h1>
        <p className="mt-2">{description}</p>
      </div>

      <div className="detials">
        {/* Left side with the image and other details */}
        <div className="content">
          <Image src={image} alt="event-image" width={800} height={850}></Image>

          <section className="flex flex-col gap-2">
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>

       <section className="flex flex-col mt-3 gap-2 flex-wrap">
            <h2>Event Details</h2>
            <p className="flex flex-row gap-2 text-gray-300"> <Calendar size={24}></Calendar> {date}</p>
            <p className="flex flex-row gap-2 text-gray-300"><Clock size={24}/> {time}</p>
            <p className="flex flex-row gap-2 text-gray-300"><MapPin size={24} /> {location}</p>
            <p className="flex flex-row gap-2 text-gray-300"><Laptop size={24}/> {mode}</p>
            <p className="flex flex-row gap-2 text-gray-300"><Contact size={24}/> {audience}</p>
          </section>



     <section className="flex flex-col gap-2 mt-2">
            <h2>About Organizer</h2>
            <p>{organizer}</p>
          </section>


        </div>

        {/* Right side of the event detials  */}

        <aside className="booking">
          <p className="text-lg font-semibold"> Book Event</p>
        </aside>
      </div>




    </section>

    
  );
};

export default EventDetailsPage;
