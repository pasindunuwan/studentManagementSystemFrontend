"use client";
import React from "react";
import { useState } from "react";
import Navbar2 from "../component/navbar/navbar2";
import { useEffect } from "react";
export default function page() {
  const [studentData, setStudentData] = useState({
    indexNo: "",
    firstName: "",
    lastName: "",
    bod: "",
    address: "",
    degree: "",
    nic: "",
    gender: "",
    //default usestate object element
  });
  const [view, setView] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [saveForm, setSaveForm] = useState(false);
  const [searchData, setsearchData] = useState({ indexNo: "" });
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevCourseData) => ({
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
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/student/getStudentByIndexNo/${searchData.indexNo}`,
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
      setData([databyid]);
      console.log(databyid);
      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
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
        "http://localhost:8080/api/v1/student/getStudent"
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
  async function handleSubmit() {
    console.log("AWA");
    // e.preventDefault();

    //update api
    if (updateForm == true) {
      setView(false);
      console.log(studentData);
      console.log("update api");
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/student/updateStudent",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(studentData), // Send the email as an object
          }
        );

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
    if (saveForm == true) {
      console.log(studentData);
      setView(false);
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/student/saveStudent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(studentData), // Send the email as an object
          }
        );

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
    <div className="bg-[#EFF0F2] h-screen  overflow-hidden">
      <div className=" w-full">
        {" "}
        <Navbar2 />
      </div>
      <div className="flex  items-start">
        <div className=" w-1/6 h-screen bg-[#D9D9D9]  bg-opacity-56 ">
          <form
            method="post"
            onSubmit={handleSubmit}
            class=" relative  space-y-4  flex flex-col  mt-20 items-center "
          >
            <input
              placeholder="Index number"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-blue-500 focus:border-blue-500  w-11/12  py-2"
              name="indexNo"
              type="text"
              onChange={(e) => handleInputChange(e)}
              value={studentData.indexNo}
              required={true}
            />

            <input
              placeholder="First Name"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-blue-500 focus:border-blue-500  w-11/12  py-2"
              type="text"
              name="firstName"
              onChange={(e) => handleInputChange(e)}
              value={studentData.firstName}
              required={true}
            />

            <input
              type="text"
              placeholder="Last Name"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-blue-500 focus:border-blue-500  w-11/12  py-2"
              name="lastName"
              onChange={(e) => handleInputChange(e)}
              value={studentData.lastName}
              required={true}
            />
            <input
              type="text"
              placeholder="Date Of Brith"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-blue-500 focus:border-blue-500  w-11/12  py-2"
              name="bod"
              onChange={(e) => handleInputChange(e)}
              value={studentData.bod}
              required={true}
            />
            <input
              type="text"
              placeholder="Address"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-blue-500 focus:border-blue-500  w-11/12  py-2"
              name="address"
              onChange={(e) => handleInputChange(e)}
              value={studentData.address}
              required={true}
            />

            <select
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
              name="degree"
              onChange={(e) => handleInputChange(e)}
              value={studentData.degree}
              required={true}
            >
              <option selected> Degree</option>
              <option value="SE">SE</option>
              <option value="CS">CS</option>
              <option value="CE">CE</option>
            </select>
            <input
              type="text"
              name="nic"
              placeholder="nic"
              className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-blue-500 focus:border-blue-500  w-11/12  py-2"
              onChange={(e) => handleInputChange(e)}
              value={studentData.nic}
              required={true}
            />

            <select
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-11/12 overflow-y-auto max-h-40 py-2"
              name="gender"
              onChange={(e) => handleInputChange(e)}
              value={studentData.gender}
              required={true}
            >
              <option selected> gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </form>
          <div className="  space-x-2 absolute inset-x-0 bottom-0    flex  items-center ">
            <button
              onClick={() => {
                handleSubmit();
                setSaveForm(true);
              }}
              type="submit"
              className="text-white cursor-pointer  mt-12 bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 font-medium rounded-lg text-xl w-18 px-2 py-1 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2"
            >
              Add
            </button>
            <button
              onClick={() => {
                handleSubmit();
                setUpdateForm(true);
              }}
              type="submit"
              className="text-white cursor-pointer mt-12 bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 font-medium rounded-lg text-xl w-18  py-1 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2"
            >
              Update
            </button>
            <button
              // onClick={handleSubmit}
              type="submit"
              className="text-white cursor-pointer  mt-12 bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 font-medium rounded-lg text-xl  w-18 py-1 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="   relative  ">
          <div className="flex mt-4  justify-center space-x-4 ">
            {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}

            <input
              onChange={(e) => handleInputSearch(e)}
              value={searchData.indexNo}
              required={true}
              type="text"
              id="indexNo"
              class="block w-2/5 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search student"
            />
            {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}

            <button
              onClick={handleSearch}
              type="submit"
              // class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              className="text-white cursor-pointer   bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 font-medium rounded-lg text-xl  w-18 py-1 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2"
            >
              Search
            </button>
          </div>
          <div>
            <table class="  table-fixed border-separate border-spacing-x-4 ml-8 border-spacing-y-4  border ...">
              <thead className="">
                <tr>
                  <th class="border border-slate-600 w-32 bg-[#2F3D7A]">
                    Index No
                  </th>
                  <th class="border border-slate-600 w-32 bg-[#2F3D7A]">
                    First name
                  </th>
                  <th class="border border-slate-600 w-32 bg-[#2F3D7A]">
                    Last Name
                  </th>
                  <th class="border border-slate-600 w-32 bg-[#2F3D7A]">
                    Date Of Brith
                  </th>
                  <th class="border border-slate-600 w-32 bg-[#2F3D7A]">
                    Address
                  </th>
                  <th class="border border-slate-600 w-32 bg-[#2F3D7A]">
                    Degree
                  </th>
                  <th class="border border-slate-600 w-32 bg-[#2F3D7A]">NIC</th>
                  <th class="border border-slate-600 w-32 bg-[#2F3D7A]">
                    Gender
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {data &&
                  data.map((item) => (
                    <tr>
                      <td className=" text-black">{item.indexNo}</td>
                      <td className=" text-black">{item.firstName}</td>
                      <td className=" text-black">{item.lastName}</td>
                      <td className=" text-black">{item.bod}</td>
                      <td className=" text-black">{item.address}</td>
                      <td className=" text-black">{item.degree}</td>
                      <td className=" text-black">{item.nic}</td>
                      <td className=" text-black">{item.gender}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
