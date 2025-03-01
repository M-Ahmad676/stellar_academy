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
      image: '/Teachers/Teacher2.PNG',
      Subject: "Mathematics & Statistics"
    },
    {
      Name:"Arham Gul",
      image: '/Teachers/Teacher1.jpeg',
      Subject: "Biology & Physics"
    },
    {
      Name:"Tabish Khizer",
      image: '/Teachers/Teacher4.jpeg',
      Subject: "Chemistry"
    },
    {
      Name:"Wajahat Imran",
      image: '/Teachers/Teacher3.JPG' ,
      Subject: "Computer Science"
    },

  ]

  return (
    <div className="min-h-screen mx-auto overflow-hidden">
      <HeroSection title="About Us"/>
      <div className="max-w-screen-2xl min-h-screen mx-auto px-14">
        <div className="mt-32 flex gap-x-14 max-h-screen">

          <div className="flex items-start basis-[48%] gap-x-5 w-full">
            
            <div className="basis-[50%] h-full w-full">
              <LazyLoadingImage
                path="/AboutImage1.jpg"
                title="Image1"
                styling="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="space-y-5 basis-[50%]">
              <div className="w-full">
                <LazyLoadingImage
                  path="/AboutImage3.jpg"
                  title="Image2"
                  styling="w-full h-[20rem] object-cover rounded-lg "
                />
              </div>

              <div className="w-full">
                <LazyLoadingImage
                  path="/AboutImage2.jpg"
                  title="Image3"
                  styling="w-full h-full object-cover rounded-lg "
                />
              </div>
            </div>
          </div>

          <div className="bg-orange-100 w-full basis-[48%] rounded-lg p-14 space-y-5 overflow-hidden">
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
              className="flex justify-center gap-x-10 pt-5
            "
            >
              <ArrowList ListItems={aboutListItemLeft} />
              <ArrowList ListItems={aboutListItemRight} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-x-14 justify-items-center my-24">
          {/* Vision and Mission Text */}
          <div className="w-full justify-self-start space-y-5">
            <div className="bg-orange-100 rounded-lg w-full py-5 px-10 space-y-4">
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
            <div className="bg-orange-100 rounded-lg w-full py-5 px-10 space-y-5">
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
              path="/VisionMission.jpg"
              title="Vision&mission"
              styling="w-full h-full object-center rounded-lg"
            />
          </div>
        </div>

        <div>   
         <div className="text-center space-y-3">
         <Fade direction="down" triggerOnce={true} duration={1000}>
         <h1 className="text-[2rem] font-bold">Meet Our Teachers</h1>
         </Fade>
         <div className="max-w-[10rem] w-full h-1.5 bg-orange-400 rounded-full mx-auto"></div>
         </div>
         <div className="grid grid-cols-4 justify-items-center py-20">
          
          <Zoom duration={2000} triggerOnce={true}>          
          {Teachers.map((teacher,index) => (

           <div key={index} className="space-y-5">
            <div className="max-w-[20rem] w-full h-[20rem] justify-self-center">
             <LazyLoadingImage path={teacher.image} title={teacher.Name} styling="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="h-[7rem] py-4 rounded-xl space-y-2">
             <p className="text-[1.25rem] font-medium text-blue-500">{teacher.Name}</p>
             <h3 className="text-gray-600">{teacher.Subject}</h3>
            </div>
           </div>

          ))}
           </Zoom>

         </div>
        
        </div> 

        <div className="w-full bg-orange-100 rounded-xl p-10 mt-36 mb-24 relative">
          <div className="w-[15rem] h-[15rem] absolute -top-30 left-[40%] ">
            <LazyLoadingImage path="/Teachers/HeadMaster.JPG" title="HeadMaster" styling="rounded-[100%] w-full h-full shadow-md shadow-gray-400 "/>
          </div>

          <div className="w-full pt-28 flex flex-col items-center justify-center space-y-3">
            <Fade direction="down" triggerOnce={true} duration={1000}>
            <h1 className="text-[1.6rem] font-semibold">Some Wise Words From our HeadMaster</h1>
            </Fade>
            <p>Computer scientist</p>
            <Fade direction="up" triggerOnce={true} duration={1000}>
             <h3 className="text-[1.2rem] font-medium italic">"Some people graduate with honors, I am just honored to graduate"</h3>
             </Fade>
          </div>

        </div>

      </div>
    </div>
  );
}
