import React from "react";
import SplitText from "./SplitText";
import Image from './LazyLoadingImage'
import {Fade} from 'react-awesome-reveal'

export default function HeroSection() {
  return (
    <div className="bg-[url(/.jpg)] bg-contain bg-center w-full bg-no-repeat flex justify-around relative items-center h-[100vh] px-4 sm:px-10 mt-20 sm:mt-10 min-[1000px]:my-0">

      <div className="w-[20rem] h-[20rem] hidden sm:block absolute rounded-full bg-[#dde9f7] -top-32 -left-20 -z-10 shadow-sm shadow-gray-400"> 
      </div>

      <div className="space-y-5 min-[1000px]:max-w-[35rem] w-full text-start sm:text-center min-[1000px]:!text-start">
      <Fade direction="down" triggerOnce={true}>
        <h1 className="text-[2.5rem] sm:text-[3rem] font-bold">
          {" "}
          Unlock Your   
          <SplitText
          text=" Potential"
          className="text-[#0056D2] "
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
        <button className="py-2 px-6 rounded-sm bg-[#3677d1] text-white cursor-pointer hover:bg-[#0056D2] transition-all duration-500">View Courses</button>
        </Fade>
      </div>

      <div className="m-8 max-w-[25rem] w-full hidden min-[1000px]:block">
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
