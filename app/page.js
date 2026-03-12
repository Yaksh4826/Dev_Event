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
      <h1 className="text-center">The Hub for Every Dev <br /> Event You Can't Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

<ExploreBtn/>

    <div className="mt-20 space-y-7">
    <h3> Featured Events</h3>
      <ul className="events">
{events.map(event => (
            <li key={event.slug} className="list-none">
              <EventCard
                title={event.title}
                image={event.image}
                location={event.location}
                date={event.time.split('T')[0]}
                time={event.time.split('T')[1]}
                slug={event.slug}
              />
            </li>
          ))}

      </ul>

    </div>
  
  </section>
  );
}
