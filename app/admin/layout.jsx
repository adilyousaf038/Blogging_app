import { assets } from "@/Assets/assets";
import Sidbar from "@/Components/AdminComponents/Sidbar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function layout({ children }) {
  return (
    <>
      <div className="flex flex-col">
        <ToastContainer theme="dark" />
        <Sidbar />
        <div className="flex flex-col w-full items-center ">         
          {children}
        </div>
      </div>
    </>
  );
}
