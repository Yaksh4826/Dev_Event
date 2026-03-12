"use client"
import React from 'react'
import { ArrowDown } from 'lucide-react'
const ExploreBtn = () => {
  return (
    <button  id="explore-btn" className='mt-7 mx-auto' onClick={()=>{console.log("Clicked events")}}>
      <a href="#events"> Explore Events <ArrowDown size={24}/> </a>
    </button>
  )
}

export default ExploreBtn
