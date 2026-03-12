import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
   <header>
    <nav>
        <Link href="/" className='logo'>    <p className='logo'>DevEvent</p></Link>
 <Link href="/">  Home</Link>
 <Link href="/">  Events</Link>
 <Link href="/" > Create Event</Link>

    </nav>
   </header>
  )
}

export default Navbar
