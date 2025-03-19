import React, { useState } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import ArrowList from "../../components/ArrowList/ArrowList";
import LazyloadingImage from '../../components/LazyLoadingImage'
import { useForm } from "react-hook-form";
import LazyLoadingImage from "../../components/LazyLoadingImage";
import { option } from "framer-motion/client";

export default function Enrollment() {
  const Instructions = [
    "Carefully fill out the form with accurate details",
    "Provide your correct WhatsApp number, as all further communication will be done via WhatsApp",
    "Double-check your email address to ensure you receive important updates",
    "Make sure your provided information is accurate to avoid any issues in the admission process.",
    "For any queries, contact us via stellar@gmail.com",
  ];

  const [placeholder, setPlaceHolder] = useState({
     
    fullName: "Full Name",
    Gender: "Gender",
    email: "Email",
    whatsAppNo: 'WhatsApp Number',
    Grade: "Grade",
    Subjects: "Enter Subjects"
  })

  const [selectGrade, setSelectGrade] = useState('')
  const grades = ["9th", "10th", "11th", "12th"];

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {errors}, 
  } = useForm()

  return (
    <div className="min-h-screen overflow-hidden mx-auto">
      <HeroSection title="Application Form" />

      <div className="max-w-screen-xl my-20 mx-auto">
        <div className="space-y-7">
          <h2 className="text-[1.4rem] font-medium">
            Important Instructions for Applicants
          </h2>
          <div className="p-10 bg-orange-100 rounded-xl">
            <ArrowList ListItems={Instructions}/>
          </div>
        </div>
       
       <div className="border-2 my-12 rounded-xl flex justify-between">            
          <div className="basis-[48%] p-10">
            <h3 className="text-[2rem] font-semibold pb-14 text-center">Register Now</h3>
         <form className="px-10">
          <div>
            <input type="text"
            {...register('fullName', {required:"Name is required"})}
            placeholder={placeholder.fullName}
            className="border-b-2 border-gray-300 w-full focus:outline-none py-2"
            />
            {
              errors.fullName && (
               <p>{errors.fullName.message}</p>
              )
            }
          </div>

          <div>
            <select {...register("gender",{required:"Gender is required"})} className="w-full">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>             
            {
              errors.gender && (
               <p>{errors.gender.message}</p>
              )
            }
          </div>
          <div>
           <input type="email" {...register("email", {required:"Email is required"})} 
           className="w-full border-b-2 focus:outline-none border-gray-300"/>
           {
            errors.email && (
              <p>{errors.email.message}</p>
            )
           }
          </div>
          <div>
             <input type="tel" {...register("whatsapp",{required:"WhatsApp Number is required"})}
             className="w-full border-b-2 border-gray-300 focus:outine-none" />
             {
              errors.whatsapp && (
                <p>{errors.whatsapp.message}</p>
              )
             }
          </div>
          <div>
            <select {...register("grade",{required:"Grade is required"})}
            className="w-full"
            onChange={(e) => setSelectGrade(e.target.value)}
            >
            <option value="">Select Grade</option>
            {grades.map((grade) => (
              <option key={grade} value={grade}>{grade}</option>

            ))}
            </select>
             {errors.grade && (
                <p>{errors.grade.message}</p>
             )}
          </div>

          <div>
            
          </div>
      
        </form> 
        </div>

         <div className="basis-[48%] border-l-2">
          <LazyLoadingImage title="applicationFormVectoe" path="/ApplicationFormImage.jpg" styling="w-full h-full object-cover"/>
           
         </div>

        </div>
      </div>
    </div>
  );
}
