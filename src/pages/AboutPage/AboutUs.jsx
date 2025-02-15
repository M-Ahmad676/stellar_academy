import React from "react";
import { TbBinocularsFilled } from "react-icons/tb";
import { PiTarget } from "react-icons/pi";
import ArrowList from "../../components/ArrowList/ArrowList";


import { Link } from "react-router-dom";

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
      Name:"Ilyas Kashmiri",
      image: '/Teachers/Teacher2.PNG',
      Subject: "Mathematics very thick"
    },
    {
      Name:"Arham Gully",
      image: '/Teachers/Teacher1.jpeg',
      Subject: "Biology insanon ki"
    },
    {
      Name:"Pomberry",
      image: '/Teachers/Teacher4.jpeg',
      Subject: "Computer without Computer"
    },
    {
      Name:"Guddu Bhaiya",
      image: '/Teachers/Teacher3.JPG' ,
      Subject: "Gym with Biology"
    },

  ]

  return (
    <div className="min-h-screen mx-auto overflow-hidden">
      <div className="h-[40vh] py-40 w-full text-center bg-[#DDE9F7] rounded-b-[100%] space-y-5 ">
        <h1 className="text-[2.5rem] font-semibold">About Us</h1>

        <p className="text-sm">
          <Link to="/" className=" hover:underline">
            {" "}
            Home
          </Link>{" "}
          / About Us
        </p>
      </div>

      <div className="max-w-screen-2xl px-14">
        <div className="mt-32 grid grid-cols-[1fr_1fr] gap-x-5 justify-items-center">
          <div className="grid grid-cols-[repeat(2,_minmax(10rem,_17rem))] gap-x-5">
            <div className="w-[30rem] max-w-full h-[33rem]">
              <img
                src="/AboutImage1.jpg"
                alt="Image1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="space-y-5">
              <div className="h-[20rem]">
                <img
                  src="/AboutImage3.jpg"
                  alt="Image2"
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>

              <div>
                <img
                  src="/AboutImage2.jpg"
                  alt="Image3"
                  className="w-full object-cover rounded-lg "
                />
              </div>
            </div>
          </div>

          <div className="bg-[#DDE9F7] w-full rounded-lg p-14 space-y-5">
            <h4 className="font-medium text-blue-500">ABOUT STELLAR</h4>
            <h1 className="text-[2rem] font-medium">
              Shaping Bright Minds for a Brighter Future
            </h1>
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

        <div className="grid grid-cols-[1fr_1fr] gap-x-5 justify-items-center my-24">
          {/* Vision and Mission Text */}
          <div className="lg max-w-[83%] w-full justify-self-center space-y-5">
            <div className="bg-[#DDE9F7] rounded-lg w-full p-5 space-y-4">
              <div className="px-5 py-1 bg-white rounded-full flex items-center gap-x-3 max-w-[14rem] w-full">
                <TbBinocularsFilled className="text-[2rem]" />
                <h3 className="text-[1.7rem]">Our Vision</h3>
              </div>
              <p>
                To be Pakistan’s leading academy, empowering students with
                quality education, expert guidance, and strategic preparation to
                achieve top results in board exams and excel in their academic
                journey.
              </p>
            </div>
            <div className="bg-[#DDE9F7] rounded-lg w-full p-5 space-y-5">
              <div className="px-5 py-1 bg-white rounded-full flex items-center gap-x-3 max-w-[16rem]">
                <PiTarget className="text-[2rem]" />
                <h3 className="text-[1.7rem]">Our Mission</h3>
              </div>
               <ArrowList ListItems={MissionListItems}/>
            </div>
          </div>
          {/* Vision and Mission Image */}
          <div className="w-full">
            <img
              src="/VisionMission.jpg"
              alt="Vision&mission"
              className="w-full h-full object-center rounded-lg"
            />
          </div>
        </div>

        <div>   
         <div className="text-center space-y-3">
         <h1 className="text-[2rem] font-bold">Meet Our Teachers</h1>
         <div className="max-w-[10rem] w-full h-1.5 bg-blue-400 rounded-full mx-auto"></div>
         </div>
         <div className="grid grid-cols-4 justify-items-center py-20">
          
          {Teachers.map((teacher,index) => (

           <div key={index} className="space-y-5">
            <div className="max-w-[20rem] w-full h-[20rem] justify-self-center">
             <img src={teacher.image} alt={teacher.Name} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="h-[7rem] bg-[#DDE9F7] p-5 rounded-xl space-y-2">
             <p className="text-[1rem] font-medium">{teacher.Name}</p>
             <h3 className="text-[1.3rem]">{teacher.Subject}</h3>
            </div>
           </div>

          ))}

         </div>
        
        </div> 

        <div className="w-full bg-[#DDE9F7] rounded-xl p-10 mt-36 mb-24 relative">

          <div className="w-[15rem] h-[15rem] absolute -top-30 left-[40%] ">
            <img src="/Teachers/HeadMaster.JPG" alt="HeadMaster" className="rounded-[100%] w-full h-full shadow-sm shadow-gray-400 "/>
          </div>

          <div className="w-full pt-28 flex flex-col items-center justify-center">
            <h1 className="text-[1.6rem] font-semibold">Some Wise Words From our HeadMaster</h1>
            <h3>Computer science Professional with the first two missing</h3>
             <p>""</p>
          </div>

        </div>

      </div>
    </div>
  );
}
