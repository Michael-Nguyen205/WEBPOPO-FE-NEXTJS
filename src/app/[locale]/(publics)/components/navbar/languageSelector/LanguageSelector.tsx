"use client";
import { GrLanguage } from "react-icons/gr";

import { useState, useEffect, useRef, FC } from "react";

const LanguageSelector: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current?.contains(event.target as Node) ||
      menuRef.current?.contains(event.target as Node)
    ) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left pr-3">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex justify-center gap-x-1.5 rounded-md bg-black  text-sm font-semibold text-white shadow-sm hover:bg-blue-600 p-2 items-center"
        // aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
      <GrLanguage />
       VietNamnn
      </button>

      <div
        ref={menuRef}
        className={`absolute top-8 rounded-md right-2 z-10 mt-2 bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-300 
         ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        style={{ display: "inline-block", width: "auto" }} // Điều chỉnh phần tử cha dựa trên phần tử con
        role="menu"
      >
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  whitespace-nowrap"
            role="menuitem"
          >
            Viet Namn
          </a>
        </div>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  whitespace-nowrap"
            role="menuitem"
          >
            Settings
          </a>
        </div>
        <div className="py-1">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100  whitespace-nowrap"
            role="menuitem"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
