import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import ArrowList from "../../components/ArrowList/ArrowList";
import { useForm } from "react-hook-form";

export default function Enrollment() {
  const Instructions = [
    "Carefully fill out the form with accurate details",
    "Provide your correct WhatsApp number, as all further communication will be done via WhatsApp",
    "Double-check your email address to ensure you receive important updates",
    "Make sure your provided information is accurate to avoid any issues in the admission process.",
    "For any queries, contact us via stellar@gmail.com",
  ];

  const {
    register,
    handleSubmit,
    reset,
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
       
       <div className="border-2 my-12">          
          <div>


          </div>

         <form>
          <div>
            <input type="text"
            {...register('fullName', {required:"Name is required"})}
            />
            {
              errors.fullName && (
               <p>{errors.fullName.message}</p>
              )
            }
          </div>
      
        </form> 

        </div>
      </div>
    </div>
  );
}
