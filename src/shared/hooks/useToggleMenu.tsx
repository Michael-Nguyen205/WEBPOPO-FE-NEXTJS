// src/hooks/header/useToggleMenu.tsx
"use client";

import { useState } from "react";

export const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = (state: boolean) => {
    setIsOpen(state);
  };

  return { isOpen, handleToggleMenu };
};
