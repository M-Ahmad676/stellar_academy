import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import WhyChooseUs from '../../components/Image_textSection'

export default function LandingPage() {
  return (
    <div>
      <Navbar/>
      <div className='max-w-screen-2xl mx-auto'> 
      <HeroSection/>
      <WhyChooseUs/>
 
      </div>
    </div>
  )
}
