import React, { useState } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Model from "../../components/Model/Model";
import BarLoader from "react-spinners/BarLoader";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [messageStatus, setMessageStatus] = useState("");
  const [showBg, setShowBg] = useState(false);

  const [placeholder, setPlaceholder] = useState({
    name: "Username",
    email: "Email",
    message: "Your Message",
  });

  const CloseModal = () => {
    setMessageStatus("");
    setShowBg(false);
  };

  const handleFocus = (field) => {
    setPlaceholder((prev) => ({ ...prev, [field]: "" }));
  };

  const handleBlur = (field, defaultValue) => {
    setPlaceholder((prev) => ({ ...prev, [field]: defaultValue || "" }));
  };

  const onSubmit = (data) => {
    setShowBg(true);

    emailjs
      .send(
        "service_nyopf5b",
        "template_z5l81t8",
        {
          name: data.name,
          email: data.email, // This is used in "Reply-To"
          message: data.message,
        },
        "CQS_BYsJWAm6Hpltr"
      )
      .then(
        (response) => {
          console.log("Email sent Successfully", response);
          setMessageStatus("Message sent Successfully !");
          reset();
        },
        (error) => {
          console.error("Error Sending Message:", error);
          setMessageStatus("Failed to send Message !");
        }
      );
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      {showBg && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#18181862] flex flex-col gap-y-5 justify-center items-center">
          {messageStatus ? (
            <Model message={messageStatus} CloseModal={CloseModal} />
          ) : (
            <div className="text-center space-y-5">
              <h2 className="font-semibold text-[1.4rem] text-white">
                Sending
              </h2>
              <BarLoader
                color={"white"}
                size={200}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
        </div>
      )}
      <HeroSection title="Contact Us" />
      <div className="max-w-screen-xl mx-auto">
        <div className="my-20 sm:my-32 mx-2 sm:mx-10 xl:mx-0">
          <div className="flex gap-x-7 2xl:gap-x-14 my-16 shadow-sm shadow-gray-400 rounded-xl">
            <div className="basis-[100%] lg:basis-[50%] p-10">
              <h3 className="text-orange-500 font-medium">
                Get in Touch with Us
              </h3>
              <h1 className="text-[2rem] pt-3 font-medium">
                Have questions? We’re here to help!
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-start mt-10"
              >
                <div className="w-full h-[5rem]">
                  <input
                    type="text"
                    placeholder={placeholder.name}
                    {...register("name", { required: "Name is required" })}
                    className="border-b-2 border-gray-300 w-full py-2 focus:outline-none"
                    onFocus={() => handleFocus("name")}
                    onBlur={() => handleBlur("name", "Username")}
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="w-full h-[5rem]">
                  <input
                    type="email"
                    placeholder={placeholder.email}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid Email Format",
                      },
                    })}
                    className="border-b-2 border-gray-300 w-full py-2 focus:outline-none"
                    onBlur={() => handleBlur("email", "Email")}
                    onFocus={() => handleFocus("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="w-full">
                  <textarea
                    cols="50"
                    rows="5"
                    placeholder={placeholder.message}
                    {...register("message", { required: true })}
                    className="border-b-2 border-gray-300 w-full py-2 focus:outline-none resize-none"
                    aria-label="Message"
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message", "Your Message")}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <input
                  type="submit"
                  value="Send Message"
                  className="bg-orange-400 text-white font-medium w-full py-3 rounded-lg cursor-pointer hover:bg-orange-500 mt-5"
                />
              </form>
            </div>
            <div className="lg:basis-[50%] hidden lg:flex items-center">
              <img
                src="/ContactUs.png"
                alt="contact Us"
                className="rounded-r-xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
