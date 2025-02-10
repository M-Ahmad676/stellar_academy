import React from 'react'
import SplitText from './SplitText'
import Image from './LazyLoadingImage'
import {Fade} from 'react-awesome-reveal'

export default function Image_textSection({}) {
  return (
    <div className='flex flex-col-reverse items-center lg:flex-row h-auto px-4 sm:px-10 py-16 lg:items-stretch gap-y-10 lg:gap-x-20 justify-center bg-gradient'>
     
     <div className='w-[100%] max-w-full lg:max-w-[40%]'>
        <Image
        title="About Us"
        path="/image2.jpg"
        styling="w-full object-cover rounded-lg"
        placeholder='/Placeholder2.jpg'
        />
      </div>  

     <div className='lg:max-w-[45%] w-full'>
      <Fade direction='right' duration={1500} triggerOnce={true} cascade={true}>
       <SplitText
          text="About Stellar"
          className="text-center text-[2.3rem] sm:text-[2.5rem] font-bold"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <p className='pt-5 leading-8 text-base sm:text-[1.05rem]'>Stellar Education System is a premier academy dedicated to preparing students for Matric and HSSC board exams. With expert instructors, a structured curriculum, and a personalized learning approach, we ensure students achieve academic excellence. Our commitment to quality education, innovative teaching methods, and a supportive learning environment empowers students to reach their full potential. Join us and take the next step toward success!</p>
        <p className='leading-8 pt-4 text-base sm:text-[1.05rem] lg:hidden xl:block'>At Stellar Education System, we believe in nurturing confidence and critical thinking alongside academic success. Our goal is to equip students with the knowledge and skills they need to excel in their exams and beyond</p>
        </Fade>
     </div>
    </div>
  )
}
