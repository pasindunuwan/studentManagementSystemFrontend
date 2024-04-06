import React from "react";
import Image from "next/image";
import Signup from "../component/user/signup";
import Navbar1 from "../component/navbar/navbar1";
export default function page() {
  return (
    <div>
      <div className="overflow-hidden h-screen">
        <Navbar1 />
        <div className="overflow-hidden h-screen ">
          {" "}
          {/* Apply overflow-hidden and h-screen to this div */}
          <div className="fixed object-none bg-center h-full w-full">
            <Image
              className="absolute "
              alt="Mountains"
              src="/signup2 1.png"
              layout="fill"
              quality={100}
              priority
            />
            <div className="bg-[#9FAFE9] absolute bg-opacity-20 w-full overflow-hidden h-screen " />
            <div className="my-20 flex items-center justify-center">
              <Signup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
