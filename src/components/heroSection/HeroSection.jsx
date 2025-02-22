import React from 'react'
import {Fade} from 'react-awesome-reveal'
import {Link} from 'react-router-dom'

export default function HeroSection({title}) {
  return (
    <div className="h-[40vh] mx-14 text-center mt-28 flex flex-col items-center justify-center rounded-xl gap-y-5
    bg-[url(/header_img.jpg)] bg-cover bg-no-repeat shadow-sm shadow-gray-400

    ">
    <Fade triggerOnce={true} direction="down" duration={1000}> 
    <h1 className="text-[2.5rem] font-semibold ">{title}</h1>
    </Fade>
  
    <Fade triggerOnce={true} direction="up">
    <p className="text-sm">
      <Link to="/" className="hover:underline">
        Home </Link>
       / <span className='text-[#d582f3] font-medium'>{title}</span>
    </p>
    </Fade>
  </div>
  )
}
