import React from 'react'
import Fade from 'react-reveal/Fade';

const About = () => {
   return (
      <div name='About' className='w-full h-screen bg-black text-gray-300'>

         {/* container */}
         <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
               <Fade left>
                  <div className='ml:text-right pb-8 pl-4'>
                     <p className='text-4xl font-bold inline border-b-4 border-orange-600'>About</p>
                  </div>
               </Fade>
               <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid ml:grid-cols-2 gap-8'>
               <Fade left>
                  <div className='ml:text-right text-4xl font-bold'>
                     <p>Hi, I'm Israel, nice to meet you. Please take a look around</p>
                  </div>
               </Fade>
               <div>
                  <p>Front End Developer with experience in the Fin-tech domains. Extensive experiences in HTML5, CSS3,
                     SASS(SCSS),JavaScript and React Js. Proven track record in Analysis, Design, Development, Testing, and
                     Implementation of Applications, Application Maintenance, and Project Deliverables. Detail-oriented with
                     ability to own a project, follow complex instructions, diagnose and resolve issues. Possess problem-solving
                     skills with a career objective to create stunning interactive websites that are visually appealing as well as
                     user-friendly.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About