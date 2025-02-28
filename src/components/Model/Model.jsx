import React from 'react'

export default function Model({message, CloseModal}) {
  return (
    <div className='relative  max-w-[20rem] sm:max-w-[23rem]  w-full bg-white h-auto shadow-md shadow-gray-600 rounded-lg z-0 overflow-hidden'>
             <div className='w-[8rem] h-[8rem] bg-orange-100 rounded-full absolute -left-10 -top-10'>
             </div>
             { (() => {
        
              const isFailed = /Failed/i.test(message);
              const imageSrc = isFailed ? "/Error Bot.png" : "/MailSent.png";
              const buttonText = isFailed ? "Try Again" : "Close";
              const textCSS = message.includes("Successfully") ? "text-orange-500 text-[1.2rem]" : "text-red-500 text-[1.2rem]";
              
              return(
              <div className='flex flex-col items-center font-semibold h-auto gap-y-8 py-10'>
                <img src={imageSrc} alt="Mail" className='w-[12rem]' />
              <h2 className={textCSS}>{message}</h2>      
              <button className='bg-amber-500 text-white max-w-[8rem] w-full py-1.5 rounded-md cursor-pointer hover:bg-orange-400'
              onClick={CloseModal}
              >{buttonText}</button>   
              </div> 
             )
              })()}
              <div className='w-[7rem] h-[7rem] bg-orange-100 rounded-full absolute  -right-10 -bottom-10'>
              </div>
        </div>
  )
}
