import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidbar = () => {
  return (
    <div className="flex border w-full justify-between p-5 bg-gray-200" >

      <div className="">
        <Image src={assets.logo} alt="logo" width={120} />
      </div>
      <div className="flex items-center font-medium">
        <div className=" flex gap-4">
          <Link
            href={"/admin/addProduct"}
            className="flex items-center   "
          >
           
            <p>Add blogs</p>
          </Link>
          <Link
            href={"/admin/blogList"}
            className="flex items-center "
          >
            
            <p>Blog lists</p>
          </Link>
        
        </div>
      </div>

    </div>
  );
};

export default Sidbar;
