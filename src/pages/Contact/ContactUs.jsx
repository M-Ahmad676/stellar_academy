import React, {useState} from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import { useForm } from 'react-hook-form'


export default function ContactUs() {

  const {
    register,
    handleSubmit,
    watch,
    formState: {error}
  } = useForm()
  
  const [placeholder,setPlaceholder] = useState({
    
    name: "Username",
    email: "Email",
    Message: "Message"
  })

  const onSubmit = (data) => console.log(data)

  return (
    <div className='min-h-screen overflow-hidden'>
      <HeroSection  title="Contact Us"/>
      <div className='max-w-screen-xl mx-auto'>
       <div className='my-36'> 
        <h3 className='text-[#CC33FF] font-medium'>Get in Touch with Us</h3>
        <h1 className='text-[2rem] pt-3 font-medium'>Have questions? We’re here to help!</h1>
        <div className='flex justify-between gap-x-20 my-16'>

         <form onSubmit={handleSubmit} className='flex flex-col items-start gap-y-10 basis-[50%]'> 

           <input type="text" placeholder={placeholder.name}  {...register("Name", {required:true})} className='border-b-2 border-gray-300 w-full py-2 focus:outline-none'
           onFocus={() => setPlaceholder('')}
           />

          <input type="email" placeholder={placeholder.email} {...register("Email", {required:true})} className='border-b-2 border-gray-300 w-full py-2 focus:outline-none' />
          
          <textarea  cols="50" rows="5" placeholder={placeholder.Message} {...register("Message", {required:true})} className='border-b-2 border-gray-300 w-full py-2 focus:outline-none'></textarea>

          <input type="submit" value="Send Message" className='bg-purple-400 text-white font-medium w-full py-3 rounded-lg cursor-pointer hover:bg-purple-500 mt-5' />
         
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
