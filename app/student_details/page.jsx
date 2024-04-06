"use client";
import React from 'react'
import Sidebar from '../component/navbar/sidebar'
import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function page() {
  const [data, setData] = useState([])
  async function SearchAllStudent() {

      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/student/getStudent",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Add any other headers if needed
            },
          }
        ); // Using the Next.js API route
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const databyid = await response.json();
        setData(databyid);
        console.log("all student",databyid);
        console.log(data);
      } catch (error) {
        console.error("An error occurred:", error);
      
    }
  }
  


  useEffect(() => {
    // Perform data fetching or any other side effect here
    SearchAllStudent()
  }, []);
  return (
    <div>
        <div className=' h-screen  bg-[#EFF0F2] '>
        <div className='relative  space-x-2 flex'>
      <Sidebar className=" fixed"/> 
      <div>
      <table class="  table-fixed border-separate border-spacing-x-6  border-spacing-y-4  ">
  <thead className=''>
    <tr>
      <th class="border border-slate-600 w-34 bg-[#2F3D7A]">Index No</th>
      <th class="border border-slate-600 w-34 bg-[#2F3D7A]">First name</th>
      <th class="border border-slate-600 w-34 bg-[#2F3D7A]">Last Name</th>
      <th class="border border-slate-600 w-34 bg-[#2F3D7A]">Date Of Brith</th>
      <th class="border border-slate-600 w-34 bg-[#2F3D7A]">Address</th>
      <th class="border border-slate-600 w-34 bg-[#2F3D7A]">Degree</th>  
      <th class="border border-slate-600 w-34 bg-[#2F3D7A]">NIC</th>
       <th class="border border-slate-600 w-34 bg-[#2F3D7A]">Gender</th>
     
    </tr>
  </thead>
  <tbody className=''>
  {data.map((item, index)=>(
  <tr>
<td className=" text-black">{item.indexNo}</td>
<td className=" text-black" >{item.firstName}</td>
<td className=" text-black">{item.lastName}</td>
<td className=" text-black">{item.bod}</td>
<td className=" text-black">{item.address}</td>
<td className=" text-black">{item.degree}</td>
<td className=" text-black">{item.nic}</td>
<td className=" text-black">{item.gender}</td>

  </tr>
  
  ))

                }
  </tbody>
</table>
      </div>
      <Link href='/edit_student_details' className='text-[#1565C0] fixed bottom-2 right-4 text-3xl transition duration-500 ease-in-out  hover:scale-110 '>Edit</Link>
        </div>
        </div>
    </div>
  )
}
