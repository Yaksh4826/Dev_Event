import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const EventCard = ({title, image, location , date, time, slug}) => {
  return (
<Link href={`/events`} id='event-card'>
<Image src={image} alt='poster' width={350} height={410}/>
<p className='title'> {title}</p>
</Link>
  )
}

export default EventCard
