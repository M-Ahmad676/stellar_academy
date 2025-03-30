import React, { useState } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import ArrowList from "../../components/ArrowList/ArrowList";
import { useForm } from "react-hook-form";
import LazyLoadingImage from "../../components/LazyLoadingImage";
import BounceLoader from "react-spinners/BounceLoader";
import { Fade } from "react-awesome-reveal";
import Modal2 from "../../components/Modal2/Modal2";
import emailjs from "@emailjs/browser";

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
    email: "Email",
    whatsapp: "WhatsApp Number",
  });

  const grades = ["9th", "10th", "11th", "12th"];
  const [selected, setSelected] = useState({});
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("")

  const handleFocus = (field) => {
    setPlaceHolder((prev) => ({ ...prev, [field]: "" }));
  };

  const handleBlur = (field, defaultValue) => {
    setPlaceHolder((prev) => ({ ...prev, [field]: defaultValue || " " }));
  };

  const handledropDownColorChange = (e, name) => {
    setSelected((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    emailjs
      .send(
        "service_cltd42i",
        "template_75haoa2",
        {
          fullName: data.fullName,
          gender: data.gender,
          email: data.email,
          whatsapp: data.whatsapp,
          grade: data.grade,
        },
        "CQS_BYsJWAm6Hpltr"
      )
      .then(
        (response) => {
          console.log("Success", response.status, response.text);
          setLoading(false)
          setModal(true);
          setMessageStatus("Success")
          reset();
        },
        (error) => {
          console.log("Failed .....", error);
          setMessageStatus("Failure")
        }
      ) .finally(()=> setLoading(false))
  };

  return (
    <div className="min-h-screen overflow-hidden mx-auto relative">
       {modal && (
           <Modal2 setModal={setModal}  messageStatus={messageStatus}/>
          )}
      <HeroSection title="Application Form" />

      <div className="max-w-screen-xl my-20 mx-auto">
        <div className="space-y-7">
          <h2 className="text-[1.4rem] font-medium">
            Important Instructions for Applicants
          </h2>
          <div className="p-10 bg-orange-100 rounded-xl">
            <ArrowList ListItems={Instructions} />
          </div>
        </div>

        <div className=" my-12 flex justify-between relative">
         
          <div className="basis-[50%]">
            <Fade triggerOnce={true} duration={1500} direction="left">
              <div className="p-10 shadow-sm shadow-gray-400 rounded-xl">
                <div className="mb-10">
                  <h3 className="text-[2rem] font-semibold text-center">
                    Register Now
                  </h3>
                  <div className="hidden sm:block w-[10rem] h-1 bg-orange-400 mx-auto rounded-full"></div>
                </div>
                <form
                  className="px-6 space-y-10"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <input
                      type="text"
                      {...register("fullName", {
                        required: "Name is required",
                      })}
                      placeholder={placeholder.fullName}
                      className="border-b-2 border-gray-300 w-full focus:outline-none px-3 py-2 bg-transparent"
                      onFocus={() => handleFocus("fullName")}
                      onBlur={() => handleBlur("fullName", "Full Name")}
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-sm pt-2">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <select
                      {...register("gender", {
                        required: "Gender is required",
                      })}
                      className={`w-full border-b-2 border-gray-300 p-2 focus:outline-none ${
                        selected.gender ? "text-black" : "text-gray-500"
                      }`}
                      onChange={(e) => handledropDownColorChange(e, "gender")}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-600 text-sm pt-2">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="w-full border-b-2  p-2 focus:outline-none border-gray-300"
                      placeholder={placeholder.email}
                      onBlur={() => handleBlur("email", "Email")}
                      onFocus={() => handleFocus("email")}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm pt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      {...register("whatsapp", {
                        required: "WhatsApp Number is required",
                      })}
                      className="w-full border-b-2 p-2 border-gray-300 focus:outline-none"
                      placeholder="WhatsApp Number"
                      onFocus={() => handleFocus("whatsapp")}
                      onBlur={() => handleBlur("whatsapp", "WhatsApp Number")}
                    />
                    {errors.whatsapp && (
                      <p className="text-red-600 text-sm pt-2">
                        {errors.whatsapp.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <select
                      {...register("grade", { required: "Grade is required" })}
                      className={`w-full border-b-2 border-gray-300 p-2 focus:outline-none ${
                        selected.grade ? "text-black" : "text-gray-500"
                      }`}
                      onChange={(e) => handledropDownColorChange(e, "grade")}
                    >
                      <option value="">Select Grade</option>
                      {grades.map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                    {errors.grade && (
                      <p className="text-red-600 text-sm pt-2">
                        {errors.grade.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-300 my-5 text-white p-3 flex items-center justify-center rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-orange-400"
                    disabled={loading}
                  >
                    {loading ? (
                      <BounceLoader
                        color={"white"}
                        size={24}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              </div>
            </Fade>
          </div>

          <div className="basis-[48%]">
            <Fade triggerOnce={true} duration={1500} direction="right">
              <div className="flex justify-center items-center">
                <div className="w-[90%]">
                  <LazyLoadingImage
                    title="applicationFormVector"
                    path="/ApplicationFormImage.jpg"
                    styling="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
