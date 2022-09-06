import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {

   const [menu, setMenu] = useState(true)
   const handleMenu = () => {
      setMenu(!menu)
   }

   return (
      <>
         <div className='bg-black w-full fixed px-5 py-2 min-h-fit flex justify-between text-white'>
            <div className='hover:cursor-pointer text-orange-500 text-xl font-bold'>Logo
            </div>
            <ul className='md:hidden flex hover:cursor-pointer pr-4'>
               <li className='px-4 hover:text-orange-500'>
                  <Link activeClass="active" to="Home" smooth={true} duration={500}>
                     Home
                  </Link>
               </li>
               <li className='px-4 hover:text-orange-500'>
                  <Link activeClass="active" to="About" smooth={true} duration={500}>
                     About
                  </Link>
               </li>
               <li className='px-4 hover:text-orange-500'>
                  <Link activeClass="active" to="Skills" smooth={true} duration={500}>
                     Skills
                  </Link>
               </li>
               <li className='px-4 hover:text-orange-500'>
                  <Link activeClass="active" to="Projects" smooth={true} duration={500}>
                     Projects
                  </Link>
               </li>
               <li className='px-4 hover:text-orange-500'>
                  <Link activeClass="active" to="Contact" smooth={true} duration={500}>
                     Contact
                  </Link>
               </li>
            </ul>
            <div className='hidden md:block z-10' onClick={handleMenu}>
               {menu ? <FaBars size='20px' /> : <FaTimes size='20px' />}
            </div>

            {/* mobile menu */}
            <ul className={menu ? 'hidden' : 'absolute top-0 left-0 w-screen h-screen md:flex flex-col justify-center items-center bg-black hover:cursor-pointer'}>
               <li className='py-9 font-bold hover:text-orange-500'>
                  <Link onClick={handleMenu} to="Home" smooth={true} duration={500}>
                     Home
                  </Link>
               </li>
               <li className='py-9 font-bold hover:text-orange-500'>
                  <Link onClick={handleMenu} to="About" smooth={true} duration={500}>
                     About
                  </Link>
               </li>
               <li className='py-9 font-bold hover:text-orange-500'>
                  <Link onClick={handleMenu} to="Skills" smooth={true} duration={500}>
                     Skills
                  </Link>
               </li>
               <li className='py-9 font-bold hover:text-orange-500'>
                  <Link onClick={handleMenu} to="Projects" smooth={true} duration={500}>
                     Projects
                  </Link>
               </li>
               <li className='py-9 font-bold hover:text-orange-500'>
                  <Link onClick={handleMenu} to="Contact" smooth={true} duration={500}>
                     Contact
                  </Link>
               </li>
            </ul>

            {/* social icons */}
            <div className='lg:hidden flex flex-col fixed  top-[35%] left-0'>
               <ul>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-blue-600'>
                     <a href=""
                        className='flex justify-between items-center w-full text-gray-300'>Linkedin <FaLinkedin size={30} /> </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-slate-700'>
                     <a href=""
                        className='flex justify-between items-center w-full text-gray-300'>Github <FaGithub size={30} /> </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-orange-700'>
                     <a href=""
                        className='flex justify-between items-center w-full text-gray-300'>Email <HiOutlineMail size={30} /> </a>
                  </li>
                  <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] bg-slate-500'>
                     <a href=""
                        className='flex justify-between items-center w-full text-gray-300'>Resume <BsFillPersonLinesFill size={30} /> </a>
                  </li>
               </ul>
            </div>
         </div>
      </>
   )
}

export default Navbar