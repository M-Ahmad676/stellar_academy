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
      image: 'https://img.freepik.com/free-vector/flat-design-cms-concept-illustrated_23-2148796510.jpg?t=st=1741189488~exp=1741193088~hmac=ae7ab0f6577f48f849346581cc44d8abb55fc1209bffc59681c1d3ca148f007b&w=1380',
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
      image: 'https://img.freepik.com/free-vector/maths-chalkboard_23-2148178219.jpg?t=st=1741187926~exp=1741191526~hmac=c64b9348aa079730d6085989c82b410b20dc31039ec6984faa1da2b56e1a975a&w=1380',
      subjects: "Physics, Chemistry, Mathematics , English, Urdu, Islamiat / Pak Studies"
     }
     ,
     {
      title:"Computer Science",
      grade: "Fsc",
      image: 'https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg?t=st=1741187960~exp=1741191560~hmac=43b8a93ff0f95c3d16d9e3fee933df792a9ad57a8fd244c2c32d79a9dada3606&w=1380',
      subjects: "Computer Science, Physics, Chemistry , English, Urdu, Islamiat / Pak Studies"
     }
     ,
     {
      title:"Pre-Medical",
      grade: "Fsc",
      image: 'https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?t=st=1741188398~exp=1741191998~hmac=540511e035521426eacbd17ad278f128db7a9917f727a34591bab9c00f4caa3b&w=1380',
      subjects: "Biology, Physics, Chemistry , English, Urdu, Islamiat / Pak Studies"
     }
     ,
     {
      title:"Statistics and Accounting",
      grade: "Fsc",
      image: 'https://img.freepik.com/free-vector/gradient-stock-market-concept-with-statistics_23-2149157696.jpg?t=st=1741188456~exp=1741192056~hmac=718c378793b4b067385df0ae239f5906b2eaf37fe7d02cabf0be23e563c9d120&w=1380',
      subjects: "Statistics, Physics, Accounting , English, Urdu, Islamiat / Pak Studies"
     }
     ,
  ]


  return (
    <div className='overflow-hidden min-h-screen'>
      <HeroSection title="Our Programs"/>

      <div className='max-w-screen-xl mx-auto my-20'>
        <h1 className='text-[2rem] font-medium'>Offered Programs</h1>
      <div className='grid grid-cols-[1fr_1fr_1fr] grid-rows-3 justify-items-center gap-y-20 py-12'>
      {programsOffered.map((program,index) => (
        <div key={index} className='max-w-[20rem] w-full h-auto rounded-lg shadow-md shadow-gray-400'>
          <div>
            <LazyLoadingImage title={program.title} path={program.image} styling="object-cover w-full rounded-lg" placeholder="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"/>
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
