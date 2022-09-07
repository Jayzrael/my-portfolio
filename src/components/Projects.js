import React from 'react'
import WorkImg from '../images/workImg.jpeg'
import WorkImg2 from '../images/realestate.jpg'
import { Fade } from 'react-reveal'

const Projects = () => {
   return (
      <div name='Projects' className='w-full ml:h-screen bg-black text-gray-300'>

         {/* container */}
         <div className='max-w-[1000px] mx-auto p-4 w-full h-full flex flex-col justify-center'>
            <Fade right>
               <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Projects</p>
                  <p className='py-6'>Checkout some of my recent projects</p>
               </div>
            </Fade>

            {/* cards */}
            <div
               className='grid ml:grid-cols-2 mg:grid-cols-3 gap-4'>

               {/* cards container */}
               <div style={{ backgroundImage: `url(${WorkImg})` }}
                  className='shadow-lg shadow-yellow-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

                  {/* hover effect */}
                  <div className='opacity-0 group-hover:opacity-100 '>
                     <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js Application
                     </span>
                     <div className='pt-8 text-center'>
                        <a href="">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                     </div>
                  </div>
               </div>
               <div style={{ backgroundImage: `url(${WorkImg2})` }}
                  className='shadow-lg shadow-cyan-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

                  {/* hover effect */}
                  <div className='opacity-0 group-hover:opacity-100'>
                     <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js Application
                     </span>
                     <div className='pt-8 text-center'>
                        <a href="">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                     </div>
                  </div>
               </div>
               <div style={{ backgroundImage: `url(${WorkImg})` }}
                  className='shadow-lg shadow-yellow-300 group container rounded-md flex justify-center items-center mx-auto content-div'>

                  {/* hover effect */}
                  <div className='opacity-0 group-hover:opacity-100 '>
                     <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js Application
                     </span>
                     <div className='pt-8 text-center'>
                        <a href="">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="">
                           <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Projects