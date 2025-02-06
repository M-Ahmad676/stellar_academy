import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/Image_textSection";
import BlurText from "../../components/Blur Text/BlurText";
import SplitText from "../../components/SplitText";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Cards from "../../components/Cards";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import LazyLoadingImage from "../../components/LazyLoadingImage";

export default function LandingPage() {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        <HeroSection />
        <AboutUs />
        <div className="bg-gradient2 h-auto py-20 flex justify-center items-center">
          <div className="w-[1350px] max-w-full mx-auto text-center">
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
            <Cards />
          </div>
        </div>
        <div className="w-[1350px] max-w-full mx-auto h-auto my-28 flex justify-between">
          <div className="max-w-[45%] w-full">
            <SplitText
              text="Our Teaching Methodology"
              className="text-center text-[2.3rem] font-bold"
              delay={100}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
            <ul className="font-medium text-[1.1rem] space-y-5 py-10">
              <li className="flex items-center">
                <MdKeyboardDoubleArrowRight className="text-[1.5rem] text-blue-500" />
                Concept-Based Learning
              </li>

              <li className="flex items-center">
                <MdKeyboardDoubleArrowRight className="text-[1.5rem] text-blue-500" />
                Weekly Assessments
              </li>
              <li className="flex items-center">
                <MdKeyboardDoubleArrowRight className="text-[1.5rem] text-blue-500" />
                Visual & Practical Learning
              </li>
              <li className="flex items-center">
                <MdKeyboardDoubleArrowRight className="text-[1.5rem] text-blue-500" />
                Doubt-Clearing Sessions
              </li>
            </ul>
          </div>

          <div className="max-w-[45%] ">
            <LazyLoadingImage title="teaching methodology" path="/image3.jpg" styling="w-full object-cover h-[25rem] rounded-xl" />
          </div>
        </div>
        <WhyChooseUs />
      </div>
    </div>
  );
}
