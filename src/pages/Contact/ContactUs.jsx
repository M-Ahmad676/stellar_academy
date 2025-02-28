import React, {useState} from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import Model from '../../components/Model/Model'


export default function ContactUs() {

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm()

  const [messageStatus, setMessageStatus] = useState('Email sent Successfully')
  
  const [placeholder,setPlaceholder] = useState({
    
    name: "Username",
    email: "Email",
    message: "Your Message"
  })

  const onSubmit = (data) => {
    
    emailjs
    .send(
      "service_nyopf5b",
      "template_z5l81t8",
      {
        name: data.name,
        email: data.email,  // This is used in "Reply-To"
        message: data.message,
      },
      "_kwzWxIi4hqGAG7GR"
    )
    .then(
       
      (response) => {
        console.log("Email sent Successfully", response)
        setMessageStatus("Message sent Successfully !")
        reset()
      },
      (error) => {
        console.error("Error Sending Message:", error)
        setMessageStatus("Failed to send Message !")
      }
    );
  }

  return (
    <div className='min-h-screen overflow-hidden relative'>
       {messageStatus && 
      <div className='w-full h-full bg-[#18181862] absolute '>
      </div>
        }
      <HeroSection  title="Contact Us"/>
      {messageStatus && 
         <Model message = {messageStatus}/>
        }
      <div className='max-w-screen-xl mx-auto'>
       <div className='my-32'>
        <div className='flex gap-x-14 my-16 shadow-sm shadow-gray-400 rounded-xl'>
        <div className='basis-[50%] p-10'>
        <h3 className='text-orange-500 font-medium'>Get in Touch with Us</h3>
        <h1 className='text-[2rem] pt-3 font-medium'>Have questions? We’re here to help!</h1>
         <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start mt-10'> 
           
           <div className='w-full h-[5rem]'>
           <input type="text" placeholder={placeholder.name}
            {...register("name", {required:"Name is required"})} 
           className='border-b-2 border-gray-300 w-full py-2 focus:outline-none'
           />
           {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </div>

          <div className='w-full h-[5rem]'>
          <input type="email" placeholder={placeholder.email} 
          {...register("email", {required:"Email is required", pattern: {value: /^\S+@\S+$/i, message:"Invalid Email Format" }})} 
          className='border-b-2 border-gray-300 w-full py-2 focus:outline-none' 
          />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </div>
           
          <div className='w-full'> 
          <textarea  cols="50" rows="5" placeholder={placeholder.message} {...register("message", {required:true})} className='border-b-2 border-gray-300 w-full py-2 focus:outline-none'></textarea>
          {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
          </div>

          <input type="submit" value="Send Message" className='bg-orange-400 text-white font-medium w-full py-3 rounded-lg cursor-pointer hover:bg-orange-500 mt-5' />
         
         </form>
         </div>
         <div className='basis-[50%]'>
          <img src="/ContactUs.png" alt="contact Us" className='rounded-r-xl object-cover w-full h-full'/>
         </div>

        </div> 
        </div>
      </div>
    </div>
  )
}
