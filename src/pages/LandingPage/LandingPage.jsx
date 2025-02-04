import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/Image_textSection";
import SplitText from "../../components/SplitText";
import BlurText from "../../components/Blur Text/BlurText";
import Cards from "../../components/Cards";

export default function LandingPage() {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        <HeroSection />
        <AboutUs />
        <div className="bg-gradient2 h-auto py-20 flex justify-center items-center">
          <div className="max-w-screen-xl text-center">
            <BlurText
              text="Our Programs"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[2.5rem] mb-8 font-semibold text-white"
            />
            <BlurText
              text="We Offer all inclusive Preparation for all major local and foreign test at our campus"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[1.1rem] mb-8 text-white"
            />
            <Cards/>
          </div>
        </div>
        <div className="flex justify-around items-center my-16 ">
          <div className="max-w-[45%] w-full">
          <SplitText
          text="Why Choose Us ?"
          className="text-red-500 text-center text-[2.5rem] font-bold"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
        <p className="leading-8 pt-5">At Stellar Education System, we are dedicated to preparing students for success in their Matric and HSSC board exams. Our expert-led courses, innovative teaching methods, and personalized approach ensure that you gain the knowledge and skills necessary to excel in your exams. With a strong focus on each student’s individual strengths, we help unlock their full potential and guide them towards academic success.</p>
          </div>
          <div className="max-w-[45%] w-full">
            <img src="/image1.jpg" alt="image2" className="w-full h-[25rem] object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
