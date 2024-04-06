"use client";
import React from 'react'
import Navbar2 from '../component/navbar/navbar2'
import  { useState } from "react";
import {  useEffect } from "react";

export default function page() {

  const [updateForm,setUpdateForm] = useState(false)
  const [saveForm,setSaveForm] = useState(false)
  //data variable for form
  const [searchData, setsearchData] = useState({ indexNo:""})
  const [data, setData] = useState([])
  const [view, setView] = useState(false)
  const [courseData, setCourseData] = useState({

    indexNo: "",
    semester: "",
    course1: "",
    course2: "",
    course3: "",
    course4: "",
    course5: "",
    course6: "",
    course7: "",
    course8: "",
    //default usestate object element
  });

   //deleteBYidapi
  // async function handleSearch() {
  //   console.log("searchdata", searchData);
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/api/v1/student/updateStudent",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(studentData), // Send the email as an object
  //       }
  //     );

  //     if (response.ok) {
  //       console.log("Course details update successfull");
  //       setUpdateForm(false);
  //     } else {
  //       console.log("Course details update fail");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // }


  //Refresh
  // async function handleRefresh() {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/api/v1/student/updateStudent",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(studentData), // Send the email as an object
  //       }
  //     );

  //     if (response.ok) {
  //       console.log("Course details update successfull");
  //       setUpdateForm(false);
  //     } else {
  //       console.log("Course details update fail");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // }

  async function handleDisplay() {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/course/getCourses"
      ); // Using the Next.js API route
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const databyid = await response.json();
      setData(databyid);
      console.log(databyid);
      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  useEffect(() => {
    if (view) {
      handleDisplay(); // Perform your side effect when view is true
  }
  
  }, [view]);


  //get user input value
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevCourseData) => ({
      ...prevCourseData, //get user data without doesn't not  effecting other user data
      [name]: value,
    }));
  };
  const handleInputSearch = (e) => {
    const { id, value } = e.target;
    setsearchData((prevCourseData) => ({
      ...prevCourseData, //get user data without doesn't not  effecting other user data
      [id]: value,
    }));
  };
  //search api
  async function handleSearch() {
    console.log("searchdata", searchData);
    console.log("searchdata", searchData.indexNo);
    try {
      const response = await fetch(`http://localhost:8080/api/v1/course/getCourseByIndexNo/${searchData.indexNo}`,
      {
        method:'GET',
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers if needed
  }}
  ); // Using the Next.js API route
      
  if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const databyid = await response.json();
      setData([databyid  ]);
   
      console.log(databyid);

      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  



//form submission function
  async function handleSubmit() {
console.log("AWA")
    // e.preventDefault();
   
      //update api
      if(updateForm == true){
        setView(false);
        console.log(courseData);
        try {
          const response = await fetch("http://localhost:8080/api/v1/course/updateCourse", {
         
          method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(courseData), // Send the email as an object
          });
    
          if (response.ok) {
          
            console.log("Course details update successfull");
            setUpdateForm(false);
            setView(true);
        
          } else {
            console.log("Course details update fail");
            
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }

      //save api
      if(saveForm == true){
        console.log(courseData);
         setView(false);
        try {
          const response = await fetch("http://localhost:8080/api/v1/course/saveCourse", {
        
          method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(courseData), // Send the email as an object
          });
    
          if (response.ok) {
          
            console.log("Course details save successfull");
            setSaveForm(false);
            setView(true);
           
        
          } else {
            console.log("Course details update fail");
            
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      
      }
      }
     
  return (
    <div className='bg-[#EFF0F2] h-screen  overflow-hidden' >
      
     
       <div className=' w-full'>   <Navbar2 /></div>
       <div className='flex  items-start'>
       <div className=' w-1/6 h-screen bg-[#D9D9D9]  bg-opacity-56 '>
        
        
        <form method="post"  onSubmit={handleSubmit} class=" relative  space-y-1  flex flex-col  mt-10 items-center ">
        <input 
        placeholder='Index number' 
        className={`bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-blue-500 focus:border-blue-500  w-11/12  py-2 ${
          courseData.name === ""
            ? "border-red-500"
            : "border-white"
        }`}
         name="indexNo"
         type="text"
         onChange={(e) => handleInputChange(e)}
         value={courseData.indexNo}
         required={true}

         />
       
   
          <select
          className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2
          ${
            courseData.name === ""
              ? "border-red-500"
              : "border-white"
          }`}
          name="semester" 
          onChange={(e) => handleInputChange(e)}
          value={courseData.semester}
          required={true}
          >
          <option selected>Choose semester</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
         
          <select 
         
          className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2
          ${
            courseData.name === ""
              ? "border-red-500"
              : "border-white"
          }`}
          name="course1" 
          onChange={(e) => handleInputChange(e)}
          value={courseData.course1}
          required={true}>
          <option selected>Choose course1</option>
          <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
          </select>


          <select     className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2
          ${
            courseData.name === ""
              ? "border-red-500"
              : "border-white"
          }`}
          name="course2" 
          onChange={(e) => handleInputChange(e)}
          value={courseData.course2}
          required={true}> 
          <option selected>Choose course2</option>
          <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
          </select> 
          

           <select   className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2
          ${
            courseData.name === ""
              ? "border-red-500"
              : "border-white"
          }`}
          name="course3" 
          onChange={(e) => handleInputChange(e)}
          value={courseData.course3}
          required={true}>
          <option selected>Choose course3</option>
          <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
          </select> 
          
          
           <select 
          className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2
          ${
            courseData.name === ""
              ? "border-red-500"
              : "border-white"
          }`}
          name="course4" 
          onChange={(e) => handleInputChange(e)}
          value={courseData.course4}
          required={true}
        >
          <option selected>Choose course4</option>
          <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
          </select>
          
          
            <select    className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2
          ${
            courseData.name === ""
              ? "border-red-500"
              : "border-white"
          }`}
          name="course5" 
          onChange={(e) => handleInputChange(e)}
          value={courseData.course5}
          required={true}>
          <option selected>Choose course5</option>
          <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
          </select> 
          
          
           <select  className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2
          ${
            courseData.name === ""
              ? "border-red-500"
              : "border-white"
          }`}
          name="course6" 
          onChange={(e) => handleInputChange(e)}
          value={courseData.course6}
          required={true}>
          <option selected>Choose course6</option>
          <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
          </select> 
          
          
          
           <select   className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2
          ${
            courseData.name === ""
              ? "border-red-500"
              : "border-white"
          }`}
          name="course7" 
          onChange={(e) => handleInputChange(e)}
          value={courseData.course7}
          required={true}>
          <option selected>Choose course7</option>
          <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
          </select>
         

          <select   className={`bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2
          ${
            courseData.name === ""
              ? "border-red-500"
              : "border-white"
          }`}
          name="course8" 
          onChange={(e) => handleInputChange(e)}
          value={courseData.course8}
          required={true}>
          <option selected>Choose course8</option>
            <option value="SM">SM</option>
            <option value="RM">RM</option>
            <option value="UIUXE">UIUXE</option>
            <option value="MC">MC</option>
            <option value="IPVC">IPVC</option>
            <option value="EFS">EFS</option>
            <option value="SDI">SDI</option>
            <option value="ADBDA">ADBD</option>
            <option value="PM">PM</option>
            <option value="OOP">OOP</option>
           
          </select>
    
         
        </form>
        
              </div>
                 
         <div className='  space-x-2 absolute inset-x-0 bottom-2 flex  items-center '> 
        <button onClick= {() => { handleSubmit(); setSaveForm(true); }  }type="submit"  className="text-white cursor-pointer  mt-12 bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 font-medium rounded-lg text-xl w-18 px-2 py-1 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2">Add</button>
         <button onClick={() => { handleSubmit(); setUpdateForm(true); }} type="submit" className="text-white cursor-pointer mt-12 bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 font-medium rounded-lg text-xl w-18  py-1 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2">Update</button>
        <button className="text-white cursor-pointer  mt-12 bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 font-medium rounded-lg text-xl  w-18 py-1 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2">Delete</button> 
       
         </div>
         
              <div className='   relative  '>
    
          
       
<div className='flex mt-4  justify-center space-x-4 '>

 
    {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
   
       
        <input 
        
         onChange={(e) => handleInputSearch(e)}
         value={searchData.indexNo}
         required={true} type="text" id="indexNo" className="block w-2/5 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search student"/>
        {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
 
    <button type="submit"    onClick={handleSearch}  className="text-white cursor-pointer   bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 font-medium rounded-lg text-xl  w-18 py-1 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2">Search</button>
  {/* <button type="submit" onClick={hadleRefresh} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Refresh</button> */}
</div>
<div>
<table className="  table-fixed border-separate border-spacing-x-2  border-spacing-y-4 ">
  <thead className=''>
    <tr>
      <th className="border border-slate-600 w-32 bg-[#2F3D7A]">indexNO</th>
      <th className="border border-slate-600 w-32 bg-[#2F3D7A]">Semester</th>
      <th className="border border-slate-600 w-32 bg-[#2F3D7A]">Course 1</th>
      <th className="border border-slate-600 w-32 bg-[#2F3D7A]">Course 2</th>
      <th className="border border-slate-600 w-32 bg-[#2F3D7A]">Course 3</th>
      <th className="border border-slate-600 w-32 bg-[#2F3D7A]">Course 4</th>
      <th className="border border-slate-600 w-32 bg-[#2F3D7A]">Course 5</th>  
      <th className="border border-slate-600 w-32 bg-[#2F3D7A]">Course 6</th>
       <th className="borde border-slate-600 w-32 bg-[#2F3D7A]">Course 7</th>
       <th className="borde border-slate-600 w-32 bg-[#2F3D7A]">Course 8</th>
    </tr>
  </thead>
  <tbody className=''>
  
{console.log("near the map",data)}
{ 
data.map((item, index)=>(
   
  <tr>
<td className=" text-black">{item.indexNo}</td>
<td className=" text-black">{item.semester}</td>
<td className=" text-black">{item.course1}</td>
<td className=" text-black">{item.course2}</td>
<td className=" text-black">{item.course3}</td>
<td className=" text-black">{item.course4}</td>
<td className=" text-black">{item.course5}</td>
<td className=" text-black">{item.course6}</td>
<td className=" text-black">{item.course7}</td>
<td className=" text-black">{item.course8}</td>
  </tr>
  
  ))

                }
  </tbody>
</table>
</div>

</div>

</div>
     
        </div>
      
    
 
  )
}
