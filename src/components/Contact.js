import React from 'react'

const Contact = () => {
   return (
      <div name='Contact' className="w-full h-screen bg-black flex justify-center items-center p-4 text-gray-300">
         <form method="POST" action="https://getform.io/f/7d447897-7f8d-4e09-a351-8bf8c7a1fe14" className='flex flex-col w-full h-full max-w-[600px]'>
            <div className='p-8'>
               <p className='text-4xl inline font-bold border-b-4 border-orange-600'>Contact</p>
               <p className='py-4'>// Submit the form below or shoot me an email - omolewayeolagd1997@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='bg-[#ccd6f6] my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 text-black' name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:border-orange-600 hover:bg-orange-600 px-4 py-3 mx-auto my-8 '>Let's Collaboratre</button>
         </form>
      </div>
   )
}

export default Contact