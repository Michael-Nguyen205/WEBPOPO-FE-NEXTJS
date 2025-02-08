import React from "react";
import Image from "next/image";
import fqaPic from "../../../../../public/images/FQA.webp";
import Link from "next/link";

export default function FQA() {
  return (
    <div>
      <div
        className="text-5xl font-bold bg-gradient-to-b from-cyan-400 to-violet-600 bg-clip-text text-transparent 
       animate__animated animate__fadeIn  "
        style={{
          animationDuration: "1.5s",
          animationDelay: "0.2s",
        }}
      >
        FQA
      </div>
      <div
        className="flex flex-1 flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 mt-4
                        animate__animated animate__fadeIn "
        style={{
          boxShadow: "0 30px 60px rgba(0, 0, 0, 0.7)",
          animationDuration: "0.5s",
          animationDelay: "0.4s",
        }}
      >
        <div className="w-full ">
          <div className="  w-full  "style={{ aspectRatio: "16/9" }} >
            {/* <Image
          className="w-full h-auto rounded-t-xl  "
          src={fqaPic}
          alt="Card Image"
          fill
          
          
        /> */}
          </div>
        </div>

        <div className="p-4 md:p-5">
          {/* <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Card title
          </h3> */}
          <p className="mt-1 text-gray-500 dark:text-neutral-400">
            Some quick example text to build on the card title and make up the
            bulk of the car content.
          </p>
          <Link href="#" className=" underline text-blue-600">
            Go somewhere
          </Link>
          
        </div>
      </div>
    </div>
  );
}
