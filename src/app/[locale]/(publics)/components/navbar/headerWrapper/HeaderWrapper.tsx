
"use client"; 
import React from "react";
import { useToggleMenuContext } from "@/shared/context/toggleMenuProvider";

interface HeaderWrapperProps {
  children: (props: {
    isOpen: boolean;
    handleToggleMenu: () => void;
  }) => React.ReactNode; 
}

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => {
  const { isOpen, handleToggleMenu } = useToggleMenuContext();

  return (
    <>
      {children({ isOpen, handleToggleMenu })} 
    </>
  );
};

export default HeaderWrapper;
