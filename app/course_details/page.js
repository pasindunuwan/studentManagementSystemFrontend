"use client";

import React from "react";
import Sidebar from "../component/navbar/sidebar";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function page() {
  const [data, setData] = useState([]);

  async function handleSearch() {
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
    // Perform data fetching or any other side effect here
    handleSearch();
  }, []);

  return (
    <div>
      <div className=" h-screen  bg-[#EFF0F2] ">
        <div className="relative  space-x-0 flex">
          <Sidebar className=" fixed" />
          <div className="flex flex-col">
            <div className="flex mt-4  justify-center space-x-2 ">
              {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}

              {/* <input
                onChange={(e) => handleInputSearch(e)}
                value={searchData.indexNo}
                required={true}
                type="text"
                id="indexNo"
                class="block w-2/5 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search student"
              /> */}
              {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}

              {/* <button
                onClick={handleSearch}
                type="submit"
                class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button> */}
              {/* <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button> */}
            </div>
            <div>
              <table class=" ml-14 table-fixed border-separate border-spacing-x-1 border-spacing-y-4  border ...">
                <thead className="">
                  <tr>
                    <th class="border border-slate-600 w-28 bg-[#2F3D7A]">
                      index No
                    </th>
                    <th class="border border-slate-600 w-28 bg-[#2F3D7A]">
                      Semester
                    </th>

                    <th class="border border-slate-600 w-28 bg-[#2F3D7A]">
                      Course 1
                    </th>
                    <th class="border border-slate-600 w-28 bg-[#2F3D7A]">
                      Course 2
                    </th>
                    <th class="border border-slate-600 w-28 bg-[#2F3D7A]">
                      Course 3
                    </th>
                    <th class="border border-slate-600 w-28 bg-[#2F3D7A]">
                      Course 4
                    </th>
                    <th class="border border-slate-600 w-28 bg-[#2F3D7A]">
                      Course 5
                    </th>
                    <th class="border border-slate-600 w-28 bg-[#2F3D7A]">
                      Course 6
                    </th>
                    <th class="borde border-slate-600 w-28 bg-[#2F3D7A]">
                      Course 7
                    </th>
                    <th class="borde border-slate-600 w-28 bg-[#2F3D7A]">
                      Course 8
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {data.map((item) => (
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
                  ))}
                </tbody>
              </table>
            </div>
            <Link
              href="/edit_course_detail"
              className="text-[#1565C0] fixed bottom-2 right-4 text-3xl transition duration-500 ease-in-out  hover:scale-110 "
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
