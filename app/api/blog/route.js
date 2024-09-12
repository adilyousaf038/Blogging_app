import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModels";
const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
const fs = require("fs");

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blogData = await BlogModel.findById(blogId);
    return NextResponse.json(blogData);
  } else {
    const blogData = await BlogModel.find();
    return NextResponse.json({ blogData });
  }
}

export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    author: `${formData.get("author")}`,
    category: `${formData.get("category")}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get("authorImg")}`,
    date: `${timestamp}`,
  };
  await BlogModel.create(blogData);
  console.log("Blog Saved");
  return NextResponse.json({ success: true, msg: "Blog Added" });
}

export async function DELETE(request) {
  const blogId = await request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(blogId);
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(blogId);
  return NextResponse.json({ success: true, msg: "Blog Deleted" });
}
