import React from 'react'

export default function Button({label}) {
  return (
    <div className='max-w-[6rem] sm:max-w-[7rem] w-full'>
    <button className='py-1.5 w-full rounded-lg border-0 sm:border-2 border-red-600  transition-all text-sm sm:text-base bg-red-500 sm:bg-transparent duration-500 ease-in-out cursor-pointer text-white sm:text-red-600 font-medium hover:text-white hover:bg-red-600'>{label}</button>
   </div> 
  )
}
