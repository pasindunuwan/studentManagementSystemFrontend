import React from "react";
import Navbar2 from "../component/navbar/navbar2";
export default function page() {
  return (
    <div>
      <div className="bg-[#EFF0F2] h-screen">
        <div className=" w-full">
          {" "}
          <Navbar2 />
        </div>
        <div className="flex  items-start">
          <div className="fixed w-1/5  bg-[#D9D9D9]  bg-opacity-56  h-screen ">
            <form class=" relative  space-y-4 mt-20 flex flex-col  items-center ">
              <input
                type="text"
                placeholder="Index number"
                className="bg-white border placeholder:text-gray-900 placeholder:pl-1 text-gray-900 text-sm rounded-lg focus:border-2  outline outline-0 focus:outline-0  focus:ring-blue-500 focus:border-blue-500  w-68  py-2"
              ></input>
              <select
                id="semnum"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2 w-68 overflow-y-auto max-h-40 py-2"
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
                id="countries"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  focus:border-2   w-68  py-2"
              >
                <option selected>Choose a course</option>
                {/* {countries.map(country => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))} */}
              </select>
            </form>
            <div className="h-screen space-x-2 relative justify-center bottom-8 flex  items-center ">
              <button
                type="button"
                className="text-white cursor-pointer mb-4 mt-12 bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-0 hover:scale-101 font-medium rounded-lg text-xl w-24 px-2 py-1 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2"
              >
                Add
              </button>
              <button
                type="button"
                className="text-white cursor-pointer mb-4 mt-12 bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-0 hover:scale-101 font-medium rounded-lg text-xl w-24  py-1 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2"
              >
                Update
              </button>
              <button
                type="button"
                className="text-white cursor-pointer mb-4 mt-12 bg-gradient-to-br from-[#2B6CB0] to-[#2C5282] transition duration-500 ease-in-out transform hover:-translate-y-0 hover:scale-101 font-medium rounded-lg text-xl  w-24 py-1 text-center  focus:mb-3 focus:border-solid focus:border-[#070F3F] focus:border-2"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="   relative  ">
            <h1>hi</h1>

            {/* <form class="">    */}
            {/* <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
            {/* <div class="relative">
       
        <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form> */}
          </div>
        </div>
      </div>
    </div>
  );
}
