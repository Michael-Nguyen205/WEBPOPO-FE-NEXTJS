import React from "react";
import Link from "next/link";
// import ButtonGradient from "@/components/button/buttonGradient/page";
import Image from "next/image";
// import webPic from "../../../../../../../../public/images/webpic.gif";
import webPic2 from "../../../../../../../../../public/images/webpic.gif";
import ButtonLink from "../../../../../../../../shared/components/ui/button/ButtonLink";
import { useLocale } from "@/shared/hooks/useLocale"; // Import useLocale hook
import { useToggleMenuContext } from "@/shared/context/toggleMenuProvider";

export default function Website() {
  const { handleToggleMenu, linkRef } = useToggleMenuContext();
  const currentLocale = useLocale();

  return (
    <div>
      <div
        className="text-5xl font-bold bg-gradient-to-b from-orange-500 to-pink-500 bg-clip-text text-transparent 
           animate__animated animate__fadeIn "
        style={{
          animationDuration: "1.5s",
          animationDelay: "0.1s",
        }}
      >
        Make your website
      </div>

      <div className="flex flex-col  space-y-2 mt-4 ">
        <div
          className=" flex h-40 md:h-52 items-center flex-row   rounded-xl border-black-1px shadow  bg-zinc-900  box-border animate__animated animate__fadeIn   "
          style={{
            animationDuration: "0.8s",
            animationDelay: "0.3s",
          }}
        >
          <div className="h-full relative " style={{ aspectRatio: "5/5" }}>
            <Image
              className="object-cover w-ful h-full rounded-l-xl "
              src={webPic2}
              fill
              quality={10}
              alt=""
            />
          </div>

          <div className="flex  flex-col h-full w-full p-4 ">
            <h6 className=" basis-1/3  text-lg  md:text-2xl font-bold  text-gray-900 dark:text-white">
              Notewbubuu dcsc cswcdwsdws đư
            </h6>

            <p
              className=" basis-2/3   font-normal text-gray-700 dark:text-gray-400 "
              style={{
                overflowY: "auto",
                scrollbarWidth: "thin", // Thu gọn scrollbar (đối với Firefox)
                scrollbarColor: "white transparent",
              }}
              // Áp dụng scroll cho dropdown
            >
              Here are the biggest enterprise technology acquisitions of Here
            </p>


            <ButtonLink
              // onClick={handleToggleMenu}
              href={`/website-design`}
              // target="_blank"
              text="Start Now"
              className="bg-lime-400 text-black px-3 py-2 rounded-lg hover:bg-lime-500 "
              linkRef={linkRef}
              eventFuntion={handleToggleMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
