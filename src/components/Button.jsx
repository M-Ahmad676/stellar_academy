import React from 'react'

export default function Button({label}) {
  return (
    <div className='max-w-[6rem] sm:max-w-[7rem] w-full'>
    <button className='py-1.5 w-full rounded-lg border-0 sm:border-2 border-orange-400  transition-all text-sm sm:text-base bg-orange-400 sm:bg-transparent duration-500 ease-in-out cursor-pointer text-white sm:text-orange-400 font-medium hover:text-white hover:bg-orange-400'>{label}</button>
   </div> 
  )
}
