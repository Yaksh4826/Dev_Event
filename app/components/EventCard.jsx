import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Calendar } from "lucide-react";
import { ClockIcon } from "lucide-react";

const EventCard = ({ title, image, location, date, time, slug }) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image src={image} alt="poster" width={350} height={410} />

      <div className="flex flex-row gap-2">
        <MapPin size={20} />
        <p className="text-gray-500 font-bold">{location}</p>
      </div>
      <p className="title"> {title}</p>

      <div className="flex flex-row gap-2">
           <div className="flex flex-row gap-2">
         <Calendar size={20} color="grey" />
        <p className="text-gray-400 font-bold">{date}</p>
        
           </div>   
           <div className="flex flex-row gap-2">
         <ClockIcon size={20} />
        <p className="text-gray-500 font-bold">{time}</p>
        
           </div>
        
           </div>
    </Link>
  );
};

export default EventCard;
