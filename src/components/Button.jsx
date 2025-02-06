import React from 'react'

export default function Button({label}) {
  return (
    <div className='max-w-[7rem] w-full'>
    <button className='py-1.5 w-full rounded-lg border-2 transition-all duration-500 ease-in-out border-red-600 cursor-pointer text-red-600 font-medium hover:text-white hover:bg-red-600'>{label}</button>
   </div>
  )
}
