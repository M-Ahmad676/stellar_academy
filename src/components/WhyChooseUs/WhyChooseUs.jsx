import React from 'react'
import SplitText from "../../components/SplitText";
import { FaBook } from "react-icons/fa"
import { FaClipboardList } from "react-icons/fa"
import { FaChalkboardTeacher } from "react-icons/fa"
import { FaMoneyBill } from "react-icons/fa"
import { Zoom } from 'react-awesome-reveal';

export default function WhyChooseUs() {

    const cardData = [
   
        {
          icon: <FaChalkboardTeacher/>,
          title:"Experienced Instructors",
          body:"Gain insights from highly skilled and knowledgeable instructors with years of industry and teaching experience",
        },
    
        {
          icon: <FaBook/>,
          title:"Professional Notes",
          body:"Boost your exam readiness with structured test series designed to evaluate and improve your performance.",
          
        },
        {
          icon: <FaClipboardList/>,
          title:"Test Series",
          body:"Access well-organized, easy-to-understand notes crafted by experts to support your learning and revision.",
          
        },
        {
          icon: <FaMoneyBill/>,
          title:"Affordable Fees",
          body:"Quality education at competitive prices with flexible payment options.",
          
        },
      ]

  return (
    <div className="w-[1450px] max-w-full mx-auto h-auto my-28 px-4 sm:px-10">
    <div className="flex justify-center items-center gap-x-4">  
    <div className="hidden sm:block w-[5rem] h-1 bg-black rounded-full"></div> 
   <SplitText
     text="Why Choose Us ?"
     className="text-center text-[2rem] sm:text-[2.3rem] font-bold"
     delay={100}
     animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
     animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
     easing="easeOutCubic"
     threshold={0.2}
     rootMargin="-50px"
   />
   <div className="hidden sm:block w-[5rem] h-1 bg-black rounded-full"></div> 
   </div>

   <div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 xl:grid-cols-[repeat(4,_minmax(12rem,_20rem))] justify-self-center gap-x-5 my-20'>
    <Zoom  duration={1200} triggerOnce={true}>
    {cardData.map((data,index) => (
     <div key={index} className='flex flex-col items-center w-full h-full text-center gap-y-5 bg-gradient2 text-white shadow-md shadow-gray-400 py-10 px-5 rounded-2xl'>
        
        <span className='text-[2.5rem]'>{data.icon}</span>
         
        <h4 className='text-[1.6rem] font-semibold'>{data.title}</h4> 

        <p>{data.body}</p>

     </div>
     ))}
     </Zoom>
   </div>
   

   </div>

  )
}

