import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect( 
  "mongodb+srv://adilyousaf038:adilyousaf038@cluster0.m8yvo.mongodb.net/blog_app" 
  );
  console.log("DB Connected");
};
