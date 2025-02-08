import React from "react";
import { GrTechnology } from "react-icons/gr";
import Link from "next/link";
export default function OutService() {
  return (
    <div>
      <div
        className="text-5xl font-bold bg-gradient-to-b from-sky-600 to-lime-600 bg-clip-text text-transparent
     animate__animated animate__fadeIn "
        style={{
          animationDuration: "1.5s",
          animationDelay: "0s",
        }}
      >
        Out service
      </div>

      <div className="flex flex-col space-y-3 mt-4">
        <Link
          href={"#"}
          className="flex bg-zinc-900 text-white rounded-2xl  cursor-pointer w-full transform transition-transform duration-300 hover:scale-105  relative p-3
      animate__animated animate__fadeInLeftBig
      "
          style={{
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
            animationDuration: "0.6s",
            animationDelay: "0s",
          }}
        >
          <div className="text-6xl pt-2 text-green-300">
            <GrTechnology />
          </div>
          <div className="break-words   px-2 w-full">
            <div className="text-3xl">Quảng cáo</div>
            <div className="opacity-65">
              chúng tôi sẽ quảng cáo cho doanh n
            </div>
          </div>
        </Link>


      </div>
    </div>
  );
}
