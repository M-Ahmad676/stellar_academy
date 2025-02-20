import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import { useForm } from 'react-hook-form'


export default function ContactUs() {

  const {
    register,
    handleSubmit,
    watch,
    formState: {error}
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <HeroSection  title="Contact Us"/>
      <div className='max-w-screen-xl mx-auto'>
       <div className='my-36'> 
        <h3 className='text-blue-500 font-medium'>Get in Touch with Us</h3>
        <h1 className='text-[2rem] pt-3 font-medium'>Have questions? We’re here to help!</h1>
        <div className='flex gap-x-10 my-16'>

         <form onSubmit={handleSubmit} className='flex flex-col items-start gap-y-5 basis-[50%] px-7'> 

           <input type="text" placeholder='Name' {...register("Name", {required:true})} className='border-b-2 border-gray-300 w-full py-2'/>

          <input type="email" placeholder='Email' {...register("Email", {required:true})} className='border-b-2 border-gray-300 w-full py-2' />
          
          <textarea  cols="50" rows="8" placeholder='Message' {...register("Message", {required:true})} className='border-b-2 border-gray-300 w-full py-2'></textarea>

          <input type="submit" value="Send Message" className='bg-blue-500 text-white font-medium w-full py-2 rounded-sm cursor-pointer hover:bg-blue-600' />
         
         </form>

         <div className='basis-[50%]'>
          <img src="/ContactUs.jpg" alt="contact Us" className='rounded-xl'/>
         </div>

        </div> 


        </div>
      </div>
    </div>
  )
}
