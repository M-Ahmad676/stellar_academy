import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md"
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
  const contactData = [
    {
      icon: <IoLocationSharp />,
      text: "234 Street#03,PWD,Islamabad",
    },
    {
      icon: <MdPhone />,
      text: "+92345667893",
    },
    {
      icon: <IoMail />,
      text: "stellar@gmail.com",
    },
  ];

  return (
    <div className="h-auto bg-gradient2 w-full py-20 px-4 sm:px-10">
      <div className="w-[1400px] max-w-full grid grid-cols-[1fr]  min-[550px]:grid-cols-[1fr_1fr]   gap-y-10 xl:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-10  place-content-center h-full">
        <div className="w-full xl:place-items-center">
          <img
            src="/LogoT.png"
            alt="stellar academy"
            className="max-w-[7rem] w-full grayscale brightness-[1000%]"
          />
          <ul className="text-white flex items-center gap-x-5 text-[1.5rem] py-5">
            <li className="cursor-pointer hover:text-blue-300"><FaFacebook/></li>
            <li className="cursor-pointer hover:text-blue-300"><AiFillInstagram/></li>
            <li className="cursor-pointer hover:text-blue-300"><FaLinkedin/></li>
          </ul>
        </div>

        <div className="w-full">
          <h3 className="text-[1.4rem] font-semibold text-white">
            Important Links
          </h3>
          <ul className="space-y-5 pt-7 text-white">
            <li className="flex items-center gap-x-2 cursor-pointer transition-all duration-300 hover:pl-5">
              <MdKeyboardDoubleArrowRight className="text-[1.3rem] text-white" />
              Courses
            </li>

            <li className="flex items-center gap-x-2 cursor-pointer transition-all duration-300 hover:pl-5">
              <MdKeyboardDoubleArrowRight className="text-[1.3rem] text-white" />
              Career
            </li>
            <li className="flex items-center gap-x-2 cursor-pointer transition-all duration-300 hover:pl-5">
              <MdKeyboardDoubleArrowRight className="text-[1.3rem] text-white" />
              Announcements
            </li>
            <li className="flex items-center gap-x-2 cursor-pointer transition-all duration-300 hover:pl-5">
              <MdKeyboardDoubleArrowRight className="text-[1.3rem] text-white" />
              FAQs
            </li>
          </ul>
        </div>
       
        <div className="w-full">
        <h3 className="text-[1.4rem] font-semibold text-white">
            Legal Links
          </h3>
          <ul className="space-y-5 pt-7 text-white">
            <li className="flex items-center gap-x-2 cursor-pointer transition-all duration-300 hover:pl-5">
              <MdKeyboardDoubleArrowRight className="text-[1.3rem] text-white" />
              Privacy Policy
            </li>

            <li className="flex items-center gap-x-2 cursor-pointer transition-all duration-300 hover:pl-5">
              <MdKeyboardDoubleArrowRight className="text-[1.3rem] text-white" />
              Terms & Conditions
            </li>
          </ul>
        </div>


        <div className="text-white w-full">
          <h3 className="text-[1.4rem] font-semibold text-white">Contact Information</h3>
          <ul className="pt-7">
            {contactData.map((data,index) => (
            <li key={index} className="flex items-center gap-x-4 py-2">
              <span className="text-[1.4rem]">{data.icon}</span>
              {data.text}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
