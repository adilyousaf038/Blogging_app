"use client";
import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from "@/Components/Footer";
import Link from "next/link";
import axios from "axios";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className=" bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image src={assets.logo} alt="logo" width={130} />
          </Link>
          <button className="flex items-ceter gap-2 font-medium py-3 px-3 sm:px-6 bg-black text-white hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto ">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt="author"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto ">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 ">
        <Image src={data.image} alt="image" width={12800} height={720} />
        <h1 className="my-8 text-[26px] font-semibold ">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo blanditiis ad libero cupiditate distinctio sit pariatur
          nostrum modi! Ratione sint harum aperiam nisi modi assumenda pariatur!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo blanditiis ad libero cupiditate distinctio sit pariatur
          nostrum modi! Ratione sint harum aperiam nisi modi assumenda pariatur!
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo blanditiis ad libero cupiditate distinctio sit pariatur
          nostrum modi! Ratione sint harum aperiam nisi modi assumenda pariatur!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo blanditiis ad libero cupiditate distinctio sit pariatur
          nostrum modi! Ratione sint harum aperiam nisi modi assumenda pariatur!
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo blanditiis ad libero cupiditate distinctio sit pariatur
          nostrum modi! Ratione sint harum aperiam nisi modi assumenda pariatur!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo blanditiis ad libero cupiditate distinctio sit pariatur
          nostrum modi! Ratione sint harum aperiam nisi modi assumenda pariatur!
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Conclustion:</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          explicabo blanditiis ad libero cupiditate distinctio sit pariatur
          nostrum modi! Ratione sint harum aperiam nisi modi assumenda pariatur!
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media:
          </p>
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
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
