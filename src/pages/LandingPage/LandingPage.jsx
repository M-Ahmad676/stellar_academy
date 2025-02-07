import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/Image_textSection";
import BlurText from "../../components/Blur Text/BlurText";
import SplitText from "../../components/SplitText";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Cards from "../../components/Cards";
import { FaLightbulb } from "react-icons/fa"
import { MdAssessment } from "react-icons/md"
import { FaBookOpen } from "react-icons/fa6"
import { BsFillClockFill } from "react-icons/bs"
import LazyLoadingImage from "../../components/LazyLoadingImage";

export default function LandingPage() {

    const Methodology = [
       
      {
       icon: <FaLightbulb/>,
       title: "Concept-Based Learning",
       body: "We focus on deep understanding rather than rote memorization, ensuring students grasp the core concepts effectively."
      }
      ,
      {
        icon: <MdAssessment/>,
        title: "Weekly Assessment",
        body: "Frequent quizzes and tests help track progress and reinforce learning"
       }
       ,
       {
        icon: <FaBookOpen/>,
        title: "Visual and Practical Learning",
        body: "Lessons are supported by diagrams, animations, and real-world examples to make learning engaging and easy to understand."
       }
       ,
       {
        icon: <BsFillClockFill/>,
        title: "Doubt-Clearing Sessions",
        body: "Dedicated sessions to resolve student queries and provide extra support where needed."
       }
       ,
    ]
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
             <div className="space-y-6 pt-10">
             {Methodology.map((data,index) => (  
               <div key={index} className="flex items-center gap-x-4 ">
                 <div className="w-[4rem] max-w-full h-[4rem] rounded-full bg-red-500 text-white shadow-md shadow-gray-400 flex items-center justify-center">
                    <span className="text-[1.5rem]">{data.icon}</span> 
                 </div>
                 <div className="w-[80%] max-w-full shadow-md shadow-gray-400 rounded-md p-5">
                  <h3 className="text-[1rem] font-medium">{data.title}</h3>
                 </div>
               </div>
             ))}
             </div>
          </div>

          <div className="max-w-[45%] my-auto">
            <LazyLoadingImage title="teaching methodology" path="/image3.jpg" styling="w-full object-cover h-[25rem] rounded-xl " />
          </div>
        </div>
        <WhyChooseUs />
      </div>
    </div>
  );
}
