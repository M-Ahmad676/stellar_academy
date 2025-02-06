import React from "react";
import SplitText from "./SplitText";
import Image from './LazyLoadingImage'

export default function HeroSection() {
  return (
    <div className="flex justify-around relative items-center h-[100vh] px-10">

      <div className="w-[20rem] h-[20rem] absolute rounded-full bg-[#e86464] -top-32 -left-20 -z-10 shadow-sm shadow-gray-400"> 
      </div>

      <div className="space-y-5 max-w-[35rem] w-full">
        <h1 className="text-[3rem] font-bold">
          {" "}
          Unlock Your   
          <SplitText
          text=" Potential"
          className="text-red-500 text-center"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
          <br />with Quality Education
        </h1>
        <h3 className="leading-7">
        Unlock your full potential with a transformative learning experience that combines expert mentorship, hands-on training, and a supportive community empowering you with the knowledge and skills to achieve your goals and thrive in the future
        </h3>
        <button className="py-2 px-6 rounded-sm bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-all duration-500">View Courses</button>
      </div>

      <div className="m-8 max-w-[25rem] w-full">
        <Image
          title="HeroSection"
          path="/Hero.jpg"
          styling="w-full object-cover h-full"
        />
      </div>
    </div>
  );
}
