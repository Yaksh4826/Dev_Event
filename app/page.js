import { Divide, Section } from "lucide-react";
import Image from "next/image";
import ExploreBtn from "./components/ExploreBtn";
import EventCard from "./components/EventCard";
import Navbar from "./components/NavBar";
import events from "../lib/events";

export default function Home() {
 
  return (
  <section>
<Navbar/>
    <h1 className="text-center"> Hub for events you can't miss</h1>
    <p className="text-center mt-2"> Hackathon, Events, Tech Meetups, All in One Place</p>
    <ExploreBtn/>

    <div className="mt-20 space-y-7">
    <h3> Featured Events</h3>
      <ul id="events">
{events.map(event=>(<li key={event.slug} > <EventCard title ={event.title} image= {event.image}></EventCard></li>))}

      </ul>

    </div>
  
  </section>
  );
}
