import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AboutUs() {
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
        <div className="my-32 grid grid-cols-[1fr_1fr] gap-x-5 justify-items-center">
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

            <div className="flex justify-center gap-x-10 pt-5
            ">
              <ul className="space-y-5">
                <li className="flex items-center gap-x-2"><MdKeyboardDoubleArrowRight className="text-blue-500 text-[1.2rem]"/>Experienced board exam teachers</li>
                <li className="flex items-center gap-x-2"><MdKeyboardDoubleArrowRight className="text-blue-500 text-[1.2rem]"/>Comprehensive notes & past papers</li>
                <li className="flex items-center gap-x-2"><MdKeyboardDoubleArrowRight className="text-blue-500 text-[1.2rem]"/>Regular test sessions</li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-center gap-x-2"><MdKeyboardDoubleArrowRight className="text-blue-500 text-[1.2rem]"/>Concept-based learning</li>
                <li className="flex items-center gap-x-2"><MdKeyboardDoubleArrowRight className="text-blue-500 text-[1.2rem]"/>Exam techniques & time management</li>
                <li className="flex items-center gap-x-2"><MdKeyboardDoubleArrowRight className="text-blue-500 text-[1.2rem]"/>Individual guidance & support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
