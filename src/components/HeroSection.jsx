import React from "react";
import SplitText from "./SplitText";
import Image from './LazyLoadingImage'
import {Fade} from 'react-awesome-reveal'

export default function HeroSection() {
  return (
    <div className="bg-[url(/.webp)] bg-contain bg-center w-full bg-no-repeat flex justify-around relative items-center min-h-screen px-4 sm:px-10 mt-20 sm:mt-10 min-[1000px]:my-0">

      <div className="w-[20rem] h-[20rem] hidden sm:block absolute rounded-full bg-orange-100 -top-32 -right-20 -z-10"> 
      </div>
      <div className="space-y-5 min-[1000px]:max-w-[35rem] w-full text-start sm:text-center min-[1000px]:!text-start">
      <Fade direction="down" triggerOnce={true}>
        <h1 className="text-[2.5rem] sm:text-[3rem] font-bold ">
          {" "}
          Unlock Your   
          <SplitText
          text=" Potential"
          className="text-orange-500"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
          <br />with Quality Education
        </h1>
        </Fade>
        <Fade direction="left" delay={1000} triggerOnce={true}>
        <h3 className="leading-7">
        Unlock your full potential with a transformative learning experience that combines expert mentorship, hands-on training, and a supportive community empowering you with the knowledge and skills to achieve your goals and thrive in the future
        </h3>
        </Fade>
        <Fade direction="up" delay={2000} triggerOnce={true}>
        <button className="py-2 px-6 rounded-sm bg-orange-400 text-white cursor-pointer hover:bg-orange-600 transition-all duration-500">View Courses</button>
        </Fade>
      </div>

      <div className="m-8 max-w-[25rem] w-full hidden min-[1000px]:block -z-20">
        <Image
          title="HeroSection"
          path="/Hero.jpg"
          styling="w-full object-cover h-full"
          placeholder='/placeholder.jpg'
        />
      </div>
    </div>
  );
}
