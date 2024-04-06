"use client"
// import { useRouter } from 'next/router'
import React, { useState } from 'react'


export default function Login() {
  // const router = useRouter()
  const[data,setData] =useState({username:"",password:""});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevCourseData) => ({
      ...prevCourseData, //get user data without doesn't not  effecting other user data
      [name]: value,
    }));
  };


  async function handleSubmit( ){
console.log(data)
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/student/saveStudent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data), // Send the email as an object
        }
      );

      if (response.ok) {
        console.log("Course details save successfull");

        // router.push('/dashbord')
      } else {
        console.log("Course details update fail");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

  }
  return (
    <div className=' '>
        < div className=' relative w-96  h-96  bg-white bg-opacity-60 flex flex-col justify-center items-center rounded-2xl  '>

        <div>
        <h1 className=' text-[#070F3F] mb-12 font-bold text-5xl font-serif'>Login</h1>
        </div>
      
      <form method="post"  onSubmit={handleSubmit} className='flex flex-col space-y-6 justify-center'>
       
      <div class="flex justify-center relative w-64  h-10">
      <input
    class="peer w-full h-full bg-white text-black font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
    placeholder=" "
    name= "username"
    onChange={(e) => handleInputChange(e)}
              value={data.username}
              required={true} />
<label
    class="flex w-full h-full select-none pointer-events-none absolute left-0  !overflow-visible truncate peer-placeholder-shown:text-[#B6B5B5] font-semibold  leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all top-0 -mt-2 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Username
</label>



</div>
<div class="relative w-64  h-10">
<input
    class="peer w-full h-full bg-white text-black font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
    placeholder=" " 
    name= "password"
    onChange={(e) => handleInputChange(e)}
              value={data.password}
              required={true} />
<label
    class="flex w-full h-full select-none pointer-events-none absolute left-0  !overflow-visible truncate peer-placeholder-shown:text-[#B6B5B5] font-semibold  leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all top-0 -mt-2 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">Password
</label>


</div>
      </form>

      <button type="button" onClick ={handleSubmit} className="text-white cursor-pointer mb-4 mt-12 bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 font-medium rounded-lg text-xl px-4 py-2 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2">Confirm</button>
  
    
  </div></div>
  )
}