import React from 'react'
import SplitText from './SplitText'
import Image from './LazyLoadingImage'

export default function Image_textSection() {
  return (
    <div className='h-[80vh] flex items-center justify-around'>
     
     <div className='max-w-[40%]'>
        
        <Image
        title="why choose us"
        path="/wcu_section.png"
        styling="w-full object-cover h-full"
        />
 
      </div>

     <div className='max-w-[35%] w-full'>
       <SplitText
          text="Why Choose Us ?"
          className="text-[#225E9C] text-center text-[2.5rem] font-bold"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <p className='pt-5 leading-8'>At Stellar Education System, we are dedicated to preparing students for success in their Matric and HSSC board exams. Our expert-led courses, innovative teaching methods, and personalized approach ensure that you gain the knowledge and skills necessary to excel in your exams. With a strong focus on each student’s individual strengths, we help unlock their full potential and guide them towards academic success.</p>
     </div>
    
    </div>
  )
}
