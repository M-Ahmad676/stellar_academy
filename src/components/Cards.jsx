import React from 'react'
import { PiExamFill } from "react-icons/pi";
import { MdOutlineMenuBook } from "react-icons/md";
import { TiGlobe } from "react-icons/ti";
import {Fade} from 'react-awesome-reveal'

export default function Cards() {

  const cardData = [
   
    {
      icon: <MdOutlineMenuBook/>,
      title:"Entry Test Preparation",
      body:"Boost up your prospects of getting enrolled in top institutes by becoming a part of the most efficacious entry tests preparation institute of Pakistan.",
    },

    {
      icon: <PiExamFill/>,
      title:"Board Exam Preparation",
      body:"Make use of the best coaching classes to give yourself a shot at being among the frontrunners in board exams.",
      
    },
    {
      icon: <TiGlobe/>,
      title:"Foreign Test Preparation",
      body:"Unlock your potential for joining world-class foreign institutes by benefitting from the most experienced faculty and the best pedagogical methods.",
      
    },
  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 lg:grid-cols-[repeat(3,_minmax(15rem,_23rem))] gap-x-16 place-content-center justify-items-center py-10'>
     <Fade cascade direction='up' triggerOnce={true}>
      {cardData.map((card,index) => (
      <div key={index} className='flex flex-col items-center justify-center bg-white p-5 w-full h-full rounded-lg cursor-pointer transition-all duration-300 hover:scale-105'>
        <span className='text-[3.2rem] py-7'>{card.icon}</span>
        <h4 className='text-[1.5rem] font-medium pb-2'>{card.title}</h4>
        <p>{card.body}</p>
      </div>
      ))}
      </Fade>
           
    </div>
  )
}
