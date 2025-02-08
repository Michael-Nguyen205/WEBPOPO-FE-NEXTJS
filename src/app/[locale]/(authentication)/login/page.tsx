"use client"
import Image from "next/image";
import LoginComponent from "./components/Login";
import { useEffect } from "react";



export default function Login() {


  //  useEffect(() => {
  //     // Giả sử có lỗi trong việc fetch dữ liệu
  //     throw new Error('Failed to load data loginpage') // Ném lỗi giả
  //   }, [])
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    
<>
<LoginComponent />
</>
  );
}

