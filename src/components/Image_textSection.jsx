import React from 'react'
import SplitText from './SplitText'
import Image from './LazyLoadingImage'
import {Fade} from 'react-awesome-reveal'

export default function Image_textSection({}) {
  return (
    <div className='flex flex-col-reverse items-center lg:flex-row h-auto px-4 sm:px-10 py-16 lg:items-stretch gap-y-10 lg:gap-x-14 justify-center'>
     
     <div className='w-[100%] max-w-full lg:basis-[45%]'>
        <Image
        title="About Us"
        path="/image2.jpg"
        styling="w-full h-full object-cover rounded-lg"
         placeholder="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        />
      </div>  

     <div className='lg:basis-[47%] w-full bg-orange-100 p-3 sm:p-10 rounded-xl overflow-hidden'>
      <Fade direction='up' duration={1000} triggerOnce={true} cascade={true}>
         <h4 className='text-orange-500 font-semibold'>Who We Are</h4>
         <h1 className='text-[1.7rem] font-medium pt-2'>Empowering Learners for a Brighter Tomorrow</h1>
        <p className='pt-5 leading-8 text-base sm:text-[1.05rem]'>Stellar Education System is a premier academy dedicated to preparing students for Matric and HSSC board exams. With expert instructors, a structured curriculum, and a personalized learning approach, we ensure students achieve academic excellence. Our commitment to quality education, innovative teaching methods, and a supportive learning environment empowers students to reach their full potential. Join us and take the next step toward success!</p>
        <p className='leading-8 pt-4 text-base sm:text-[1.05rem] lg:hidden xl:block'>At Stellar Education System, we believe in nurturing confidence and critical thinking alongside academic success. Our goal is to equip students with the knowledge and skills they need to excel in their exams and beyond</p>
        </Fade>
     </div>
    </div>
  )
}
