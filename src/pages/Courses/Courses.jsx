import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'

export default function Courses() {

  const coursesOffered = [
    {
      title:"Science",
      grade: "Matric",
      image: '',
      subjects: "Biology, Physics, Chemistry, Mathematics"
    }
     ,
     {
      title:"Computer Science",
      grade: "Matric",
      image: '',
      subjects: "Computer Science, Physics, Chemistry, Mathematics"
    }
     ,
     {
      title:"Accounting",
      grade: "Matric",
      image: '',
      subjects: "Statistics, Physics, Chemistry, Mathematics"
     }
     ,
     {
      title:"Pre-Engineering",
      grade: "Fsc",
      image: '',
      subjects: "Physics, Chemistry, Mathematics"
     }
     ,
     {
      title:"Computer Science",
      grade: "Fsc",
      image: '',
      subjects: "Computer Science, Physics, Chemistry"
     }
     ,
     {
      title:"Pre-Medical",
      grade: "Fsc",
      image: '',
      subjects: "Biology, Physics, Chemistry"
     }
     ,
     {
      title:"Statistics and Accouinting",
      grade: "Fsc",
      image: '',
      subjects: "Statistics, Physics, Accounting"
     }
     ,
  ]


  return (
    <div className='overflow-hidden min-h-screen'>
      <HeroSection title="Our Courses"/>

      <div className='max-w-screen-xl mx-auto my-20'>
        <h1 className='text-[2rem] font-medium'>Offered Courses</h1>
        
        <div>
          
          <div>

          </div>

          <div>

          </div>

        </div>

      </div>
      
    </div>
  )
}
