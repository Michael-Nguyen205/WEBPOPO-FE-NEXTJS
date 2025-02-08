"use client";
import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const DropdownMegaMenuContainer = dynamic(
  () => import("@/app/[locale]/(publics)/container/header/DropdownMegaMenuContainer"),
  {
    ssr: false,
  }
);
import dynamic from "next/dynamic";

export default function NavResponsive() {
  return (
    <div
      className="fixed inset-0 top-20  space-y-5 p-5 px-3 bg-white z-50 flex flex-col  justify-between  text-5xl items-start
    animate__animated animate__slideInUp overflow-y-auto max-h-screen  text-black
    "
      style={{
        animationDuration: "0.3s",
        animationDelay: "0s",
        // visibility: isOpen ? "visible" : "hidden",
        // opacity: isOpen ? 1 : 0,
        // transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
      }}
    >
      <div className="space-y-7">
        <DropdownMegaMenuContainer />
        <Link href="#" className="  block  ">
          <div className="  ml-1  mr-5 ">About us</div>
          <div className="bg-black w-full h-1 rounded-xl"></div>
        </Link>
        <Link href="#" className="  block  ">
          <div className="  ml-1  mr-5 ">FQA</div>
          <div className="bg-black w-full h-1 rounded-xl"></div>
        </Link>
        <Link href="#" className="  block  ">
          <div className="  ml-1  mr-5 ">Contact</div>
          <div className="bg-black w-full h-1 rounded-xl"></div>
        </Link>

        <Link href="#" className="  block  ">
          <div className="  ml-1  mr-5 ">vietnam</div>
          <div className="bg-black w-full h-1 rounded-xl"></div>
        </Link>

        <div className=" text-3xl ml-2 ">
          <div>
            <FaShoppingCart />
          </div>
          <div>
            <div>login</div>
            <div>register</div>
          </div>
        </div>
      </div>

      <div
        className=" left-0 right-0  bottom-0

            text-3xl
            flex
            items-center
            justify-center
            p-3
            relative

            bg-black text-white w-full

            "
      >
        Start
      </div>
    </div>
  );
}
