import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="py-8 px-3 md:px-12 lg:px-20 border">
      <div className="flex justify-between items-center">
        <Image src={assets.logo} alt="logo" width={130} />
        <Link href="/admin/blogList">
          <button className="flex items-ceter gap-2 font-medium py-3 px-3 sm:px-6 bg-black text-white hover:bg-blue-600  ">
            Admin Plane
          </button>
        </Link>
      </div>
      <div className=" my-8">
        <p className="md:text-8xl text-4xl font-light pt-5leading-tight">
          <b className="font-bold">Hey, we’re Blogy.</b> See our thoughts,
          stories and ideas.
        </p>
        <form
          className=" flex justify-between  max-w-[400px]   mt-10 "
          action=""
        >
          <input
            type="email"
            placeholder='Enter your Email"'
            className="p-4 outline-none rounded-l-full bg-gray-100 w-full"
          />
          <button className="bg-black text-white py-2 px-8 hover:bg-blue-600 rounded-r-full">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
