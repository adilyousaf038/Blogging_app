import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around py-5  flex-col gap-2 sm:gap-0 sm:flex-row border-t-2  items-center">
      <Image src={assets.logo} alt="logo" width={130} />
      <p className="text-sm ">© 2024. All rights reserved</p>
      <div className="flex">
        <Image
          src={assets.facebook_icon}
          alt=""
          width={40}
          className="border rounded-full bg-black flex justify-center cursor-pointer"
        />
        <Image
          src={assets.twitter_icon}
          alt=""
          width={40}
          className="border rounded-full bg-black flex justify-center cursor-pointer"
        />
        <Image
          src={assets.googleplus_icon}
          alt=""
          width={40}
          className="border rounded-full bg-black flex justify-center cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
