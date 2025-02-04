import React from 'react'
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { TiGlobe } from "react-icons/ti";

export default function Cards() {

  const cardData = [
   
    {
      icon: <MdOutlineMenuBook/>,
      title:"Entry Test Preparation",
      body:"Boost up your prospects of getting enrolled in top institutes by becoming a part of the most efficacious entry tests preparation institute of Pakistan.",
    },

    {
      icon: <FaChalkboardTeacher/>,
      title:"Evening Coaching",
      body:"Make use of the best coaching classes to give yourself a shot at being among the frontrunners in board exams.",
      
    },
    {
      icon: <TiGlobe/>,
      title:"Foreign Test Preparation",
      body:"Unlock your potential for joining world-class foreign institutes by benefitting from the most experienced faculty and the best pedagogical methods.",
      
    },
  ]
  return (
    <div className='grid grid-cols-[repeat(3,_minmax(15rem,_23rem))] gap-x-10 justify-items-center py-10'>
      {cardData.map((card,index) => (
      <div key={index} className='flex flex-col items-center justify-center text-white border-2 p-5 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105'>
        <span className='text-[3.2rem] py-7'>{card.icon}</span>
        <h4 className='text-[1.5rem] font-medium pb-2'>{card.title}</h4>
        <p>{card.body}</p>
      </div>
      ))}
        
            
    </div>
  )
}
