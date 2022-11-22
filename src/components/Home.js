import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
   return (
      <>
         <div name='Home' className='bg-black w-full h-screen'>
            <div className='max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center '>
               <Fade left>
                  <p className='text-orange-600'>Hi, my name is</p>
                  <h1 className='text-[#ccd6f6] text-7xl md:text-4xl font-bold'>Israel omole</h1>
               </Fade>
               <Fade right>
                  <h2 className='text-[#8892b0] text-7xl md:text-4xl font-bold'>I'm a Frontend Developer</h2>
               </Fade>
               <TypeAnimation
                  // Same String at the start will only be typed once, initially
                  sequence={[
                     "I'm a frontend developer specialized in building (and occasionally designing) exceptional digital experiences. I am focused on building responsive web pages and applications for any niche.",
                     1000,
                  ]}
                  speed={70} // Custom Speed from 1-99 - Default Speed: 40
                  style={{ color: '#8892b0', paddingTop: '1rem', paddingBottom: '1rem', maxWidth: '700px' }}
                  wrapper="p" // Animation will be rendered as a <span>
                  repeat={Infinity} // Repeat this Animation Sequence infinitely
               />



               {/* <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend developer specialized in building (and occasionally designing) exceptional digital experiences. I am focused on building responsive web pages and applications for any niche.</p> */}
               <div>

                  <button className='flex gap-4 text-white border-2 px-6 py-3 my-2 items-center hover:bg-orange-700 hover:border-orange-700'>
                     <Link to='Projects' className="flex justify-between items-center gap-3">
                        View Work  <HiArrowNarrowRight />
                     </Link>
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Home