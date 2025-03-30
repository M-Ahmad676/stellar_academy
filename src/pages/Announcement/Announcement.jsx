import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoMegaphone } from "react-icons/io5"
import HeroSection from '../../components/heroSection/HeroSection'

export default function Announcement() {

        
  const[announcements, setAnnouncemets] = useState([])

  useEffect(() => {
   
   const fetchannouncements = async () => {
     
     const SHEET_ID = "1NfTq_P1t7FWqfFAuXXn19nFl73oGuJtoT-G2h7B7kgM"
     const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
     const RANGE = "A2:D"
     
     
     const url =`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
       
     try{
       
       const response = await axios.get(url)
       const rows = response.data.values;
       if(rows){
         
         const formattedAnnouncements = rows.map((rows) => ({
           date:rows[3],
           title:rows[1],
           description: rows[2],
         }))
         
         setAnnouncemets(formattedAnnouncements)
       }
     }
     catch(error){
       console.error("Error Fetching Announcement:" , error)
     }
   }
   fetchannouncements()
  },[])

  return (
    <div className='min-h-screen overflow-hidden'>

    <HeroSection title="Announcements"/>

    <div className='max-w-screen-xl mx-auto my-20'>
     {announcements.map((announcement,index) => ( 
      <div className='flex items-center gap-x-6 bg-orange-100 rounded-xl p-5 my-5' key={index}>

        <div>
          <img src="/megaPhone.png" alt="loud speaker image" className='w-[5rem]'/>
        </div>

        <div className='space-y-2'> 
          <h2 className='text-[1.2rem] font-semibold'>{announcement.title}</h2>
          <p className='text-orange-600'>{announcement.description}</p>
          <p>Date : <span className='font-medium text-sm'>{announcement.date}</span></p>
        </div>
           
      </div>
      ))}

    </div>
 

  </div>
  )
}
