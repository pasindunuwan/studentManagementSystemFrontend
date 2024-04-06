import Image from "next/image";
import Navbar1 from "@/app/component/navbar/navbar1";
import Login from "@/app/component/user/login";

export default function Home() {
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
              src="/login 1.png"
              layout="fill"
              quality={100}
              priority
            />
            <div className="bg-[#9FAFE9] absolute bg-opacity-20 w-full overflow-hidden h-screen " />
            <div className="mt-40 flex items-center justify-center">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
