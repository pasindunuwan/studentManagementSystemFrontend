import React from 'react'
import Image from 'next/image'
export default function Navbar1() {
  return (
    <div>
      <header className='h-24 w-full relative bg-[#2F3D7A]'> 
      <Image
                src="/Kotelawala_Defence_University_crest-removebg-preview 1.png"
                alt="logo"
                width="100"
                height="100"
                className="cursor-pointer ustify-items-center ml-8 mt-2 absolute"
                priority
              />
              
              <p className='text-4xl pl-64 relative font-semibold pt-2'> Faculty of computing</p>
              <p className='text-lg pl-64 mt-4 absolute pb-2.5'>General Sir John Kotelawala Defence University</p>
      </header>
     
    </div>
  )
}
