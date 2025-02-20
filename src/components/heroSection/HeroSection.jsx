import React from 'react'
import {Fade} from 'react-awesome-reveal'
import {Link} from 'react-router-dom'

export default function HeroSection({title}) {
  return (
    <div className="h-[40vh] py-40 w-full text-center bg-[#DDE9F7] rounded-b-[100%] space-y-5 ">
    <Fade triggerOnce={true} direction="down" duration={1000}> 
    <h1 className="text-[2.5rem] font-semibold">{title}</h1>
    </Fade>
  
    <Fade triggerOnce={true} direction="up">
    <p className="text-sm">
      <Link to="/" className=" hover:underline">
        Home </Link>
       / <span className='text-blue-600 font-medium'>{title}</span>
    </p>
    </Fade>
  </div>
  )
}
