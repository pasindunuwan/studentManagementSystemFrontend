import React from "react";
import Sidebar from "../component/navbar/sidebar";
export default function page() {
  return (
    <div className=" h-screen  bg-[#EFF0F2]">
      <div className="relative  space-x-16 flex">
        <Sidebar className="" />

        <div>
          {" "}
          <h1 className=" text-black font-bold text-3xl ml-20 mt-10">
            History
          </h1>
          <input
            required={true}
            type="text"
            id="indexNo"
            class="block w-2/5 p-2 ps-10 ml-80 text-sm mt-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search history"
          />
          <div className="h-115 ml-20 w-110 relative top-10 bg-white items-start shadow-2xl rounded-lg	"></div>
        </div>
      </div>
    </div>
  );
}
