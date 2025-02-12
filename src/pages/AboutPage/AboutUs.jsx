import React from 'react'
import {Link} from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className='min-h-screen mx-auto overflow-hidden'>

      <div className='h-[40vh] py-40 w-full text-center bg-blue-600 rounded-b-[100%] space-y-5 text-white'>

        <h1 className='text-[2.5rem] font-semibold'>About Us</h1>
       
        <p className='text-sm'><Link to='/' className=' hover:underline'> Home</Link> / About Us</p>

      </div>
      
      <div className='max-w-screen-2xl'>
      <div className='border-2 my-14 '>
          
          <div>

            
          

          </div>
         
          <div>
             
             <h4 className='font-medium'>ABOUT STELLAR</h4>


          </div>
          
          
      </div>
      </div>

    </div>
  )
}
