import React from 'react'
import Sidebar from '../component/navbar/sidebar'
import Image from 'next/image'
import Calendar1 from '../component/other/calendar'
export default function page() {
  return (

    <div>
      
    <div className=' h-screen  bg-[#EFF0F2] '>
       
      
   
     
      <div className='relative  space-x-32 flex'>
      <Sidebar className=""/>
      <div className='flex-col space-y-8'>
      <div className='flex  space-x-24'>
      <div className='h-24 pl-6 pt-1 mt-4 w-64 relative top-0  bg-white items-start shadow-2xl rounded-lg	'>
     <div className='flex space-x-10  items-start'>
     <Image
            src="/student.png "
            alt="logo"
            width="30"
            height="30"
            
            priority
          />
          <div className='flex-col space-y-3 items-start'>
            <h1  className='text-[#070F3F] font-medium text-xl'>Total students</h1>
          <h1 className='text-[#070F3F] text-3xl font-bold'>1234</h1>
          </div>
     </div>
    
        </div>
        <div className='h-24 pl-6 pt-1 mt-4 w-64 relative top-0  bg-white items-start shadow-2xl rounded-lg	'>
     <div className='flex space-x-10  items-start'>
     <Image
            src="/cap.png "
            alt="logo"
            width="40"
            height="40"
            
            priority
          />
          <div className='flex-col space-y-3 items-start'>
            <h1  className='text-[#070F3F] font-medium text-xl'>Total students</h1>
          <h1 className='text-[#070F3F] text-3xl font-bold'>1234</h1>
          </div>
     </div>
    
        </div>
        <div className='h-24 pl-6 pt-1 mt-4 w-64 relative top-0  bg-white items-start shadow-2xl rounded-lg	'>
     <div className='flex space-x-10  items-start'>
     <Image
            src="/paper.png "
            alt="logo"
            width="50"
            height="60"
            
            priority
          />
          <div className='flex-col space-y-3 items-start'>
            <h1  className='text-[#070F3F] font-medium text-xl'>Total students</h1>
          <h1 className='text-[#070F3F] text-3xl font-bold'>1234</h1>
          </div>
     </div>
    
        </div>
 
      </div>
      <div className=' bg-white shadow-2xl rounded-lg h-sm mb-4 w-10/13'><Calendar1/></div>

      </div>
     
      </div>
    
      </div>
      </div>
  )
}
