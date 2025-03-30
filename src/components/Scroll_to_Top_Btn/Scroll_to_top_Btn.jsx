import React from 'react'
import { useState,useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa6";

export default function Scroll_to_top_Btn() {
        
    const [isVisible, setIsVisible] = useState(false)
       
    useEffect(() => {
        
        const toggleVisibility = () => {
            if(window.scrollY > 300){
                setIsVisible(true)
            }
            else{
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    },[])

    const scrolltoTop = () => {
        window.scrollTo({ top:0 , behavior:"smooth"})
    }

  return (
    <div className={` w-[2rem] h-[2rem] text-sm sm:text-base sm:w-[3rem] sm:h-[3rem] fixed rounded-full bottom-6 right-4 sm:right-8 bg-orange-400 flex items-center cursor-pointer justify-center transition-opacity duration-300 text-white ${ isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    onClick={scrolltoTop}
    >
    
    <FaArrowUp/>
      
    </div>
  )
}
