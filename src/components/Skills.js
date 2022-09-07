import React from 'react'
import Html from '../images/html.png'
import Css from '../images/css.png'
import JavaSc from '../images/javascript.png'
import ReactImg from '../images/react.png'
import Github from '../images/github.png'
import Tailwind from '../images/tailwind.png'
import Tech from './Tech'
import { Fade } from 'react-reveal'

const Skills = () => {
   return (
      <div name='Skills' className='w-full h-screen text-gray-300 bg-black'>

         {/* container */}
         <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <Fade right>
               <div>

                  <p className='text-4xl font-bold inline border-b-4 border-orange-600 '>Skills</p>
                  <p className='py-4'>These are the technologies I have worked with</p>
               </div>
            </Fade>

            <div className='w-full grid grid-cols-2 ml:grid-cols-4 gap-4 text-center py-8'>
               <Tech className='shadow-md shadow-orange-400 hover:scale-110 duration-500' src={Html} alt='HTML icon' text='HTML' />
               <Tech className='shadow-md shadow-blue-400 hover:scale-110 duration-500' src={Css} alt='HTML icon' text='CSS' />
               <Tech className='shadow-md shadow-yellow-400 hover:scale-110 duration-500' src={JavaSc}
                  alt='HTML icon' text='JavaScript' />
               <Tech className='shadow-md shadow-cyan-500 hover:scale-110 duration-500' src={Tailwind} alt='HTML icon' text='TAILWIND CSS' />
               <Tech className='shadow-md shadow-white hover:scale-110 duration-500' src={Github} alt='HTML icon' text='GITHUB' />
               <Tech className='shadow-md shadow-cyan-400 hover:scale-110 duration-500' src={ReactImg} alt='HTML icon' text='REACT JS' />

            </div>
         </div>
      </div>
   )
}

export default Skills