import React from 'react'
import CountUp from "../CountUp/CountUp";
import { PiStudentFill } from "react-icons/pi";
import { FaUserTie, FaBuilding, FaUserAlt } from "react-icons/fa"

export default function Statistics() {

    const storage = [
        {
            icon: <PiStudentFill/> ,
            number: 55,
            label:"Students" 
        },
        {
            icon: <FaUserTie/> ,
            number: 8,
            label:"Teachers" 
        },
        {
            icon: <FaBuilding/> ,
            number: 10,
            label:"Classrooms" 
        },
        {
            icon: <FaUserAlt/> ,
            number: 1,
            label:"Asad Ejaz" 
        },
    ]

  return (
    <div className='flex my-20 w-full justify-center gap-x-10'>
      {storage.map((data,index) => (  
       <div className="flex flex-col items-center justify-between gap-y-3 w-full text-white p-5 bg-gradient3 max-w-full rounded-2xl shadow-sm shadow-gray-400" key={index}>
            <span className='text-[3rem]'>{data.icon}</span>
            <CountUp
              from={0}
              to={data.number}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-[2rem] font-medium"
            />
            <h4 className="text-[1.2rem] font-medium">{data.label}</h4>
          </div>
          ))}
    </div>
  )
}
