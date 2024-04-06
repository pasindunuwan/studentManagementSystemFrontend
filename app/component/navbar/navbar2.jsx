import React from 'react'
import Image from 'next/image'
export default function Navbar2() {
  return (
    <div className=' '>
      <header className='h-28 w-full   relative bg-[#2F3D7A]'> 
      <div className='flex items-center space-x-10'>
        <div className='flex-col flex  items-center ml-4  '>
          <Image
                src="/Kotelawala_Defence_University_crest-removebg-preview 1.png"
                alt="logo"
                width="100"
                height="100"
                className="cursor-pointer justify-items-center  mt-1 absolute"
                priority
              />
               

                <h1 className='relative text-base font-medium font-serif mt-20'>
              Student Management System
              </h1>
               
                </div>


              <div className=' pl-60  flex space-x-32 items-center h-28'>
              <a href='/dashbord' className='text-xl relative font-semi-bold  transition duration-500 ease-in-out hover:font-semi-bold    hover:text-[#070F3F]  focus:scale-110 focus:text-[#070F3F] '> Dash Board</a>
              <a href='/student_details' className='text-xl relative font-semi-bold  transition duration-500 ease-in-out hover:font-semi-bold  hover:text-[#070F3F]  focus:scale-110 focus:text-[#070F3F] '> Student</a>
              <a href='/course_details' className='text-xl relative font-semi-bold  transition duration-500 ease-in-out  hover:font-semi-bold  hover:text-[#070F3F]  focus:scale-110 focus:text-[#070F3F] '>Course</a>
              <a href='/history' className='text-xl relative font-semi-bold  transition duration-500 ease-in-out  hover:font-semi-bold  hover:text-[#070F3F]  focus:scale-110 focus:text-[#070F3F] '> History</a>
              </div>
              </div>
    
             
      </header>
     
    </div>
  )
}
