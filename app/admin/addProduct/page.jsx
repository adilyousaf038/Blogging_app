"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const[data,setData] = useState({
    title:'',
    description:'',
    author:'Alex Bennett',
    category:'Startup', 
    authorImg:'/author_img.png',   
  })

    
    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data,[name]:value}));
        console.log(data);
    }

     const onSubmitHandler = async (e) => {
        e.preventDefault();
        const forData = new FormData();
        forData.append("title",data.title);
        forData.append("description",data.description);
        forData.append("author",data.author);
        forData.append("category",data.category);
        forData.append("authorImg",data.authorImg);
        forData.append("image",image);
        const respone = await axios.post("/api/blog",forData);
        if(respone.data.success){
            toast.success(respone.data.msg);
            setImage(false);
            setData({
                title:'',
                description:'',
                author:'Alex Bennett',
                category:'Startup', 
                authorImg:'/author_img.png',   
              })
        }else{
            toast.error(respone.data.msg);
        }
    }


  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5  w-full sm:w-[500px]  pb-5 ">
        <p className="text-xl">Upload thumbnail</p>         
        <label htmlFor="image">
          <Image
            className="mt-4 "
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            width={150}
            height={70}
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full  mt-4 px-4 py-3 border"
          type="text"
          placeholder="Blog title"
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full mt-4 px-4 py-3 border"
          type="text"
          placeholder="Blog Description"
          rows={7}
          required
        />
        <p className="text-xl mt-4">Blog category</p>
        <select
          onChange={onChangeHandler}
          value={data.category}
          name="category"
          className="w-full  mt-4  px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button
          type="submit"
          className="mt-6 w-full  h-12 bg-black text-white"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default page;
