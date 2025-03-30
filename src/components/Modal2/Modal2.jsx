import React, {useEffect} from 'react'

export default function Modal2({setModal, messageStatus}) {

    useEffect(() => {

        document.body.style.overflow = "hidden"
        
        return () => {
           document.body.style.overflow = "auto"
        }
    },[])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#17171731]">
    <div className="max-w-[25rem] w-full text-center bg-white space-y-5 rounded-xl p-5 relative shadow-lg ">
      <h3 className="font-medium text-[1.5rem]">{messageStatus !== "Success" ? "Error" : "Success" }</h3>
      <p> {messageStatus !== "Success" ? "Error while submitting, Please Try Again" : "Your Form has been Submitted Successfully."}</p>
      <button
        className="bg-orange-400 py-2 text-white px-5 rounded-lg cursor-pointer hover:bg-orange-500"
        onClick={() => setModal(false)}
      >
        {messageStatus !== "Success" ? "Try Again" : "Close" }
      </button>
    </div>
  </div>
  )
}
