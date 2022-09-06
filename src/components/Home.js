import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
   return (
      <>
         <div name='Home' className='bg-black w-full h-screen'>
            <div className='max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center '>
               <p className='text-orange-600'>Hi, my name is</p>
               <h1 className='text-[#ccd6f6] text-7xl md:text-4xl font-bold'>Israel omole</h1>
               <h2 className='text-[#8892b0] text-7xl md:text-4xl font-bold'>I'm a Frontend Developer</h2>
               <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend developer specialized in building (and occasionally designing) exceptional digital experiences. I am focused on building responsive web pages and applications for any niche.</p>
               <div>
                  <button className='flex gap-4 text-white border-2 px-6 py-3 my-2 items-center hover:bg-orange-700 hover:border-orange-700'>
                     View Work  <HiArrowNarrowRight />
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Home