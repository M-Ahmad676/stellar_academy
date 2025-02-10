import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/Image_textSection";
import BlurText from "../../components/Blur Text/BlurText";
import SplitText from "../../components/SplitText";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Cards from "../../components/Cards";
import { FaLightbulb } from "react-icons/fa";
import { MdAssessment } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { BsFillClockFill } from "react-icons/bs";
import LazyLoadingImage from "../../components/LazyLoadingImage";
import Statistics from "../../components/AcademyStatistics/Statistics";
import { Slide } from "react-awesome-reveal";

export default function LandingPage() {
  const Methodology = [
    {
      icon: <FaLightbulb />,
      title: "Concept-Based Learning",
      body: "We focus on deep understanding rather than rote memorization, ensuring students grasp the core concepts effectively.",
    },
    {
      icon: <MdAssessment />,
      title: "Weekly Assessment",
      body: "Frequent quizzes and tests help track progress and reinforce learning",
    },
    {
      icon: <FaBookOpen />,
      title: "Visual and Practical Learning",
      body: "Lessons are supported by diagrams, animations, and real-world examples to make learning engaging and easy to understand.",
    },
    {
      icon: <BsFillClockFill />,
      title: "Doubt-Clearing Sessions",
      body: "Dedicated sessions to resolve student queries and provide extra support where needed.",
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto overflow-hidden">
        <HeroSection />
        <AboutUs />
        <div className="bg-gradient2 h-auto py-20 flex justify-center items-center">
          <div className="w-[1350px] max-w-full mx-auto text-center px-4 sm:px-10">
            <BlurText
              text="Our Programs"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[2.3rem] sm:text-[2.5rem] mb-8 font-semibold text-white"
            />
           <p className="mb-8 text-base sm:text-[1.1rem] text-white">We Offer all inclusive Preparation for all major local and foreign test at our campus
           </p>
            <Cards />
          </div>
        </div>
        <div className="w-[1450px] max-w-full mx-auto h-auto my-24 px-4 sm:px-10">
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
          <div className="flex flex-col lg:flex-row justify-between items-start gap-y-20 mt-14">
            <div className="lg:max-w-[50%] w-full space-y-8">
                <Slide cascade={true} triggerOnce={true}>
                {Methodology.map((data, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center gap-x-4 w-full">
                    <div className="w-[6rem] lg:w-[4rem] flex-shrink-0 h-[6rem] lg:h-[4rem] rounded-full bg-red-500 text-white shadow-md shadow-gray-400 flex items-center justify-center">
                      <span className="text-[2rem] lg:text-[1.5rem]">{data.icon}</span>
                    </div>
                    <div className="flex-grow space-y-3 text-center sm:text-start lg:space-y-0 max-w-full shadow-md shadow-gray-400 rounded-md p-5">
                      <h3 className="text-[1.08rem] font-medium">{data.title}</h3>
                      <p className="block lg:hidden">{data.body}</p>
                    </div>
                  </div>
                ))}
                </Slide>
            </div>

            <div className=" hidden lg:block lg:max-w-[45%]">
              <LazyLoadingImage
                title="teaching methodology"
                path="/image3.jpg"
                styling="w-full object-cover rounded-xl "
                placeholder='/Placeholder3.jpg'
              />
            </div>
          </div>
       <Statistics/>
        </div>
        <WhyChooseUs />
      </div>
    </div>
  );
}
