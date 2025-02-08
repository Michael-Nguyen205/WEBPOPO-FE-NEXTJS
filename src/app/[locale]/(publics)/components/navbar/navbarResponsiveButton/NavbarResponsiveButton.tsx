"use client";
import { useState, FC } from "react";
import dynamic from "next/dynamic";
import ButtonHamburgerMenu from "@/shared/components/ui/button/buttonHamburgerMenu/ButtonHamburgerMenu";

// Lazy load MenuResponsive
const MenuResponsive = dynamic(
  () => import("@/app/[locale]/(publics)/components/navbar/navbarResponsiveButton/navResponsive/NavResponsive"),
  { loading: () => <p>Loading...</p> } // Có thể để một thông báo tải khi chờ
);

const NavbarResponsiveButton: FC = () => {
  const [isOpenNavResponsive, setIsOpenNavResponsive] = useState(false);

  return (
    <div className="inline-block">
      <ButtonHamburgerMenu toggleDropdown={() => setIsOpenNavResponsive((prev) => !prev)} />
      {isOpenNavResponsive && <MenuResponsive />}
    </div>
  );
};

export default NavbarResponsiveButton;
