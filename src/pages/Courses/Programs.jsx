import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import LazyLoadingImage from '../../components/LazyLoadingImage'

export default function Programs() {

  const programsOffered = [
    {
      title:"Science",
      grade: "Matric",
      image: 'https://img.freepik.com/free-vector/retro-science-education-background_23-2148488850.jpg?t=st=1741188774~exp=1741192374~hmac=b85fdd6c1c5521cc93d9fe4e4411ddd48722c6e18612ac098982c087cbd78eb3&w=1380',
      subjects: "Biology, Physics, Chemistry, Mathematics , English, Urdu, Islamiat / Pak Studies"
    }
     ,
     {
      title:"Computer Science",
      grade: "Matric",
      image: '/Courses/computerScience.webp',
      subjects: "Computer, Physics, Chemistry, Mathematics , English, Urdu, Islamiat / Pak Studies"
    }
     ,
     {
      title:"Accounting",
      grade: "Matric",
      image: 'https://img.freepik.com/free-vector/illustration-data-analysis-graph_53876-18130.jpg?t=st=1741189353~exp=1741192953~hmac=0fc58f53d92bac4cda8150f36ffca35a7ac2301953862b21e7c22b03d6c53926&w=1380',
      subjects: "Statistics, Physics, Chemistry, Mathematics , English, Urdu, Islamiat / Pak Studies"
     }
     ,
     {
      title:"Pre-Engineering",
      grade: "Fsc",
      image: '/Courses/pre_engineering.webp',
      subjects: "Physics, Chemistry, Mathematics , English, Urdu, Islamiat / Pak Studies"
     }
     ,
     {
      title:"Computer Science",
      grade: "Fsc",
      image: '/Courses/computerScience2.webp',
      subjects: "Computer Science, Physics, Chemistry , English, Urdu, Islamiat / Pak Studies"
     }
     ,
     {
      title:"Pre-Medical",
      grade: "Fsc",
      image: '/Courses/pre_medical.webp',
      subjects: "Biology, Physics, Chemistry , English, Urdu, Islamiat / Pak Studies"
     }
     ,
     {
      title:"Statistics and Accounting",
      grade: "Fsc",
      image: '/Courses/Accounting2.webp',
      subjects: "Statistics, Physics, Accounting , English, Urdu, Islamiat / Pak Studies"
     }
     ,
  ]


  return (
    <div className='overflow-hidden min-h-screen'>
      <HeroSection title="Our Programs"/>

      <div className='max-w-screen-xl mx-auto my-20 px-5 2xl:px-0'>
        <h1 className='text-[2rem] font-medium'>Offered Programs</h1>
      <div className='grid  min-[530px]:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] grid-rows-3 justify-items-normal gap-8 sm:gap-20 py-12'>
      {programsOffered.map((program,index) => (
        <div key={index} className=' w-full h-auto rounded-lg shadow-md shadow-gray-400'>
          <div>
            <LazyLoadingImage title={program.title} path={program.image} styling="object-cover w-full rounded-lg" placeholder="/placeholder.png"/>
          </div>
          <div className='h-[12rem] p-5 space-y-4'>
            <span className='font-medium text-white bg-orange-400 text-sm py-1 px-4 rounded-full'>{program.grade}</span>
            <h2 className='text-[1.2rem] font-medium mt-4'>{program.title}</h2>
            <p className='text-gray-600 text-sm leading-6'>{program.subjects}</p>
          </div>

        </div>
        ))}
      </div>

      </div>
      
    </div>
  )
}
