import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Navbar() {
  return (
    <nav className='w-full fixed flex justify-between px-10 h-[5rem] items-center bg-white shadow-sm shadow-gray-400 z-10'>
       
       <div className='max-w-[5rem]'>
       <img src="/Logo.png" alt="Stellar Academy" className='w-full' />
       </div>

       <ul className='flex gap-x-16'>
        <li className='group'>
            <Link to='/' className='relative group-hover:text-[#DC3332]'>
            Home
            <span className='absolute h-1 w-0 rounded-full transition-all duration-500 ease-in-out bg-[#DC3332] -bottom-2 left-0 group-hover:w-full'></span>
            </Link>
        </li>
        <li className='group'>
            <Link to='/' className='group relative group-hover:text-[#DC3332]'>Programs
            <span className='absolute h-1 w-0 rounded-full transition-all duration-500 ease-in-out bg-[#DC3332] -bottom-2 left-0 group-hover:w-full'></span>
            </Link>
            
        </li>
        <li className='group'>
            <Link to='/' className='group relative group-hover:text-[#DC3332]'>Career
            <span className='absolute h-1 w-0 rounded-full transition-all duration-500 ease-in-out bg-[#DC3332] -bottom-2 left-0 group-hover:w-full'></span>
            </Link>
        </li>
        <li className='group'>
            <Link to='/' className='group relative group-hover:text-[#DC3332]'>About
            <span className='absolute h-1 w-0 rounded-full transition-all duration-500 ease-in-out bg-[#DC3332] -bottom-2 left-0 group-hover:w-full'></span>
            </Link>
        </li>
       </ul>

       <Button/>

    </nav>
  )
}
