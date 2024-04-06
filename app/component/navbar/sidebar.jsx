"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Sidebar() {
  return (
   
    <div className=' w-1/6 bg-[#2F3D7A]  h-screen flex-col  '>
<div className='relative pt-4 flex flex-col  items-center space-y-6'>
          
 <div className=" ">
 <Image
                src="/Kotelawala_Defence_University_crest-removebg-preview 1.png "
                alt="logo"
                width="100"
                height="100"
                
                priority
              />
 </div>
            <div>
                <h1 className='text-lg'>
                Student Management System  
                </h1>
                </div>
  <div className='w-11/12 bg-white mt-6 h-1'></div> 
    </div>    
   
    <div className=' mt-20  flex  flex-col items-start  ml-4 space-y-12'>
    <Link href='/dashbord' className='relative flex  space-x-10  items-center text-lg font-medium text-white py-2 pl-2 w-11/12 hover:bg-[#1976D2] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out'>

<Image
            src="/home.png "
            alt="logo"
            width="20"
            height="20"
            
            priority
          />
         
<h1>Dash Board</h1>

    </Link>  
    <Link href='/student_details' className='relative flex  space-x-10  items-center text-lg font-medium text-white py-2 pl-2 w-11/12 hover:bg-[#1976D2] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out'>

<Image
            src="/studentsidebar.png "
            alt="logo"
            width="20"
            height="20"
            
            priority
          />
         
<h1>Student</h1>

    </Link>  
    <Link href='/course_details' className='relative flex  space-x-10  items-center text-lg font-medium text-white py-2 pl-2 w-11/12 hover:bg-[#1976D2] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out'>

<Image
            src="/clipbord.png "
            alt="logo"
            width="20"
            height="20"
            
            priority
          />
         
<h1>Course</h1>

    </Link>     <Link href='/history' className='relative flex  space-x-10  items-center text-lg font-medium text-white py-2 pl-2 w-11/12 hover:bg-[#1976D2] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out'>

<Image
            src="/history.png "
            alt="logo"
            width="20"
            height="20"
            
            priority
          />
         
<h1>History</h1>

    </Link> 
    </div>
    <div className='h-10 w-1/6   bg-[#070F3F] flex justify-center  bg-opacity-50 absolute inset-x-0 bottom-2 '>
        <Link href='/' className=' flex space-x-4 justify-center items-center'>  <Image
            src="/signout.png "
            alt="logo"
            width="20"
            height="20"
            
            priority
          />
          <h1>LOGOUT</h1></Link>
    
    </div>
    </div>
   
  )
}

