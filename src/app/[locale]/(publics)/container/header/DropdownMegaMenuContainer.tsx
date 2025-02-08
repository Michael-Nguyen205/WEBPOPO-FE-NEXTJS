"use client"
import { useState, useRef, useEffect, useCallback } from "react";
import DropdownMegaMenu from "../../components/navbar/dropdownMegaMenu/DropdownMegaMenu"; // Component render button dropdown
import MegaMenuContent from "../../components/navbar/dropdownMegaMenu/megaMenuContent/MegaMenuContent"; // Component render menu nội dung
import { useToggleMenuContext } from "@/shared/context/toggleMenuProvider";

const DropdownMegaMenuContainer: React.FC = () => {
  const { handleToggleMenu, isOpen, setIsOpen, divRef, buttonRefWebSite1 ,buttonRefWebSite2 } = useToggleMenuContext();

  return (
    <div>
      <DropdownMegaMenu
        handleToggleMenu={handleToggleMenu}
        isOpen={isOpen}
        buttonRefWebSite1={buttonRefWebSite1}
        buttonRefWebSite2={buttonRefWebSite2}
      />

      {isOpen && (
        <div
          ref={divRef}
          className="md:absolute bg-white shadow-lg md:rounded-3xl z-50 h-900 mx:auto mt-5 md:top-12 md:left-0 md:p-1 max-md:top-20 w-full max-md:border-l-4 max-md:border-black block animate__animated animate__fadeInDownBig"
          role="menu"
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
            animationDuration: "0.8s",
            animationDelay: "0s",
          }}
        >
          <MegaMenuContent />
        </div>
      )}
    </div>
  );
};

export default DropdownMegaMenuContainer;