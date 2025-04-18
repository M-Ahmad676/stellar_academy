import React from "react";
import { TbBinocularsFilled } from "react-icons/tb";
import { PiTarget } from "react-icons/pi";
import HeroSection from "../../components/heroSection/HeroSection";
import ArrowList from "../../components/ArrowList/ArrowList";
import {Fade, Zoom} from 'react-awesome-reveal'
import LazyLoadingImage from '../../components/LazyLoadingImage'

export default function AboutUs() {
  const aboutListItemLeft = [
    "Experienced board exam teachers",
    "Comprehensive notes & past papers",
    "Regular test sessions",
  ];

  const aboutListItemRight = [
    "Concept-based learning",
    "Exam techniques & time management",
    "Individual guidance & support",
  ];

  const MissionListItems = [
    "Provide comprehensive coaching for board exams",
    "Offer expert faculty, structured notes, and past paper solutions",
    "Conduct regular test sessions to enhance exam readiness.",
    "Develop critical thinking & time management skills.",
    "Create a supportive and motivating learning environment.",

  ];

  const Teachers = [
    {
      Name:"Ilyas Ahmad",
      image: '/Teachers/Teacher2.webp',
      Subject: "Mathematics & Statistics"
    },
    {
      Name:"Arham Gul",
      image: '/Teachers/Teacher4.webp',
      Subject: "Biology & Physics"
    },
    {
      Name:"Tabish Khizer",
      image: '/Teachers/user_placeholder.png',
      Subject: "Chemistry"
    },
    {
      Name:"Wajahat Imran",
      image: '/Teachers/Teacher3.webp' ,
      Subject: "Computer Science"
    },

  ]

  return (
    <div className="min-h-screen mx-auto overflow-hidden">
      <HeroSection title="About Us"/>
      <div className="max-w-screen-2xl min-h-screen mx-auto px-3 sm:px-7 lg:px-14">
        <div className="mt-24 sm:mt-32 flex flex-col-reverse gap-y-7 lg:flex-row gap-x-7 xl:gap-x-14 h-auto">
          <div className="flex items-start basis-[48%] gap-x-5 w-full">
            
            <div className="basis-[100%] min-[1400px]:basis-[50%] h-full w-full">
              <LazyLoadingImage
                path="/image5.webp"
                title="Image1"
                styling="w-full h-full object-cover rounded-lg"
              />
            </div>
         
            <div className="space-y-5 hidden min-[1400px]:block basis-[50%]">
              <div className="w-full">
                <LazyLoadingImage
                  path="/AboutImage3.webp"
                  title="Image2"
                  styling="w-full h-[20rem] object-cover rounded-lg "
                />
              </div>

              <div className="w-full h-full">
                <LazyLoadingImage
                  path="/AboutImage2.webp"
                  title="Image3"
                  styling="w-full object-cover rounded-lg "
                />
              </div>
            </div>
          </div>

          <div className="bg-orange-100 w-full basis-[48%] text-start sm:text-center lg:text-start rounded-lg p-7 xl:p-14 space-y-5 overflow-hidden">
            <h4 className="font-medium text-orange-500">ABOUT STELLAR</h4>
            <Fade direction="down" triggerOnce={true} duration={1000}>
            <h1 className="text-[2rem] font-medium">
              Shaping Bright Minds for a Brighter Future
            </h1>
            </Fade>
            <p>
              Education is the key to success, and at Stellar Academy, we strive
              to provide an enriching learning experience. Our expert faculty,
              well-structured curriculum, and student-centric approach ensure
              that every learner reaches their full potential.
            </p>

            <div
              className="flex  flex-col gap-y-5 text-start sm:flex-row justify-around lg:justify-center gap-x-10 pt-5
            "
            >
              <ArrowList ListItems={aboutListItemLeft} />
              <ArrowList ListItems={aboutListItemRight} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-7 lg:grid-cols-[1fr_1fr] gap-x-7 xl:gap-x-14 justify-items-center my-14 sm:my-24">
          {/* Vision and Mission Text */}
          <div className="w-full justify-self-start space-y-5">
            <div className="bg-orange-100 rounded-lg w-full py-5 px-5 xl:px-10 space-y-4">
              <div className="px-5 py-1 bg-white rounded-full flex items-center gap-x-3 max-w-[14rem] w-full">
                <TbBinocularsFilled className="text-[2rem]" />
                <Fade direction="up" triggerOnce={true} duration={1000}>
                <h3 className="text-[1.7rem]">Our Vision</h3>
                </Fade>
              </div>
              <p>
                To be Pakistan’s leading academy, empowering students with
                quality education, expert guidance, and strategic preparation to
                achieve top results in board exams and excel in their academic
                journey.
              </p>
            </div>
            <div className="bg-orange-100 rounded-lg w-full py-5 px-5 xl:px-10 space-y-5">
              <div className="px-5 py-1 bg-white rounded-full flex items-center gap-x-3 max-w-[16rem]">
                <PiTarget className="text-[2rem]" />
                <Fade direction="up" triggerOnce={true} duration={1000}>
                <h3 className="text-[1.7rem]">Our Mission</h3>
                </Fade>
              </div>
               <ArrowList ListItems={MissionListItems}/>
            </div>
          </div>
          {/* Vision and Mission Image */}
          <div className="w-full">
            <LazyLoadingImage
              path="/VisionMission.webp"
              title="Vision&mission"
              styling="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>


        <div className="w-full bg-orange-100 rounded-xl p-10 mt-52 mb-28 relative shadow-sm shadow-gray-400">
          <div className="w-[13rem] h-[13rem] sm:w-[15rem] sm:h-[15rem] absolute -top-30 left-1/2 -translate-x-1/2">
            <LazyLoadingImage path="/Teachers/user_placeholder.png" title="HeadMaster" styling="rounded-[100%] w-full h-full shadow-md shadow-gray-400 "/>
          </div>

          <div className="w-full pt-20 sm:pt-28 flex flex-col items-center justify-center space-y-5">
           <Fade direction="down" triggerOnce={true} duration={1000}>
            <h1 className="text-[1.6rem] text-center font-semibold">Message From the Head Master</h1>
            </Fade>
            <Fade direction="down" triggerOnce={true} duration={1000}>
            <h1 className="text-[1.3rem] text-center font-bold">Dr. Ahmed Farooq</h1>
            </Fade>
            <p className="text-center">Head Master | Professor of Computer Science</p>
            <Fade direction="up" triggerOnce={true} duration={1000}>
             <h3 className="text-[0.93rem] text-center font-medium italic ">"Excellence isn’t achieved overnight, it’s earned day by day, with discipline, dedication, and the will to improve. At our center, we help you turn effort into achievement."</h3>
             </Fade>
          </div>

        </div>


        <div>   
         <div className="text-center space-y-3">
         <Fade direction="down" triggerOnce={true} duration={1000}>
         <h1 className="text-[2rem] font-bold">Meet Our Teachers</h1>
         </Fade>
         <div className="max-w-[10rem] w-full h-1.5 bg-orange-400 rounded-full mx-auto"></div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center py-20">
          
          <Zoom duration={2000} triggerOnce={true}>          
          {Teachers.map((teacher,index) => (

           <div key={index} className="space-y-5">
            <div className="max-w-[20rem] w-full h-[20rem] justify-self-center">
             <LazyLoadingImage path={teacher.image} title={teacher.Name} styling="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="h-[7rem] py-4 rounded-xl space-y-2">
             <p className="text-[1.25rem] font-medium text-orange-300">{teacher.Name}</p>
             <h3 className="text-gray-600">{teacher.Subject}</h3>
            </div>
           </div>

          ))}
           </Zoom>

         </div>
        
        </div> 

      </div>
    </div>
  );
}
