import React from 'react'
import {Fade} from 'react-awesome-reveal'
import {Link} from 'react-router-dom'

export default function ContactUs() {
  return (
    <div>
        <div className="h-[40vh] py-40 w-full text-center bg-[#DDE9F7] rounded-b-[100%] space-y-5 ">
        <Fade triggerOnce={true} direction="down" duration={1000}> 
        <h1 className="text-[2.5rem] font-semibold">Contact Us</h1>
        </Fade>
      
        <Fade triggerOnce={true} direction="up">
        <p className="text-sm">
          <Link to="/" className=" hover:underline">
            Home
          </Link>
           /Contact Us
        </p>
        </Fade>
      </div>
      <div className='max-w-screen-xl mx-auto'>
       <div className='my-36'> 
        <h3 className='text-blue-500 font-medium'>Get in Touch with Us</h3>
        <h1 className='text-[2rem] pt-3 font-medium'>Have questions? We’re here to help!</h1>

        <div>
          
          </div> 


        </div>
      </div>
    </div>
  )
}
