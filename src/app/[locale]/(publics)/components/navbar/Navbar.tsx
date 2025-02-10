"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import NavBlurEffect from "@/app/[locale]/(publics)/components/navbar/navBlurEffect/NavBlurEffect";
import LanguageSelector from "@/app/[locale]/(publics)/components/navbar/languageSelector/LanguageSelector";
import Image from "next/image";
import AuthOrUserContainer from "@/app/[locale]/(publics)/container/header/AuthOrUserContainer";
// import { useAuth } from "@/hooks/"; // Import useAuth hook
// import { useLocale } from "@/hooks/useLocale"; // Import useLocale hook
import logo from "../../../../../../public/images/Logo.png";
import { getCookie } from "@/shared/helper/cokkie/cokkieHelper";
import useIsMobile from "@/shared/hooks/useIsMobile";

// Dynamic imports for responsiveness
const MenuResponSiveButton = dynamic(
  () =>
    import(
      "@/app/[locale]/(publics)/components/navbar/navbarResponsiveButton/NavbarResponsiveButton"
    ),
  { ssr: false }
);

const DropdownMegaMenuContainer = dynamic(
  () =>
    import(
      "@/app/[locale]/(publics)/container/header/DropdownMegaMenuContainer"
    ),
  { ssr: false }
);

const Navbar: React.FC = () => {
  const isMobile = useIsMobile(768);

  return (
    <>
      <NavBlurEffect />

      <nav className="flex justify-center h-16 bg-white rounded-3xl box-border fixed z-50 inset-0 mt-2 mx-2 px-2 lg:mt-3 lg:mx-16">
        <div className="h-full w-full flex items-center justify-between">
          <div className="flex flex-1 items-center h-full space-x-7">
            <Image
              src={logo}
              className="ml-3"
              priority
              quality={20}
              style={{
                objectFit: "cover",
                width: "auto",
                height: "70%",
              }}
              alt="Logo"
            />

            <div className="flex h-16 items-center text-black space-x-4 lg:space-x-7 max-md:hidden">
              {/* <DropdownMegaMenuContainer /> */}
              {/* <DropdownMegaMenuContainer /> */}

              {/* <Link href="/website-design/development" className="hover:bg-lime-600 whitespace-nowrap bg-primary text-white px-3 py-2 rounded-lg">
                Websiteeeeee
              </Link>
              <Link href="#" className="hover:text-zinc-500 whitespace-nowrap">
                About us
              </Link>
              <Link href="#" className="hover:text-zinc-500">
                FAQ
              </Link>
              <Link href="#" className="hover:text-zinc-500">
                Contact
              </Link> */}
              <LanguageSelector />
            </div>
          </div>

          <div className="text-black flex-1 justify-end space-x-6 items-center md:flex hidden">
            {/* <Link href="#" className="text-4xl pt-1">
              <FaCartArrowDown />
            </Link> */}

            {/* <div className="pr-3 text-white">
              <AuthOrUserContainer />
            </div> */}
          </div>

          {/* <div className="block md:hidden">
            <MenuResponSiveButton />
          </div> */}

          {isMobile && <MenuResponSiveButton />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
