// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// interface ToggleMenuContextType {
//     isOpen: boolean;
//     handleToggleMenu: (newState?: boolean) => void;  // Thay đổi ở đây
//     setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   }

// const ToggleMenuContext = createContext<ToggleMenuContextType | undefined>(undefined);
// interface ToggleMenuProviderProps {
//     children: ReactNode;
// }

// export const ToggleMenuProvider = ({ children }: ToggleMenuProviderProps) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleToggleMenu = (newState?: boolean) => {
//       console.log("đã vào handleToggleMenu");
//         if (typeof newState === "boolean") {
//           setIsOpen(newState);
//         } else {
//           console.log("hoán đổi trạng thai isOpenContext");
//           // Nếu không có tham số, toggle trạng thái isOpen
//           setIsOpen((prev) => !prev);
//         }
//         console.log("isOpenContext", isOpen);
//       };

//     return (
//         <ToggleMenuContext.Provider value={{ isOpen, handleToggleMenu ,setIsOpen }}>
//             {children}
//         </ToggleMenuContext.Provider>
//     );
// };

// export const useToggleMenuContext = () => {
//     const context = useContext(ToggleMenuContext);
//     if (!context) {
//         throw new Error("useToggleMenu must be used within a ToggleMenuProvider");
//     }
//     return context;
// };

"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
  useCallback,
} from "react";

interface ToggleMenuContextType {
  isOpen: boolean;
  handleToggleMenu: (newState?: boolean) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  divRef: React.RefObject<HTMLDivElement>;
  buttonRefWebSite1: React.RefObject<HTMLButtonElement>;
  buttonRefWebSite2: React.RefObject<HTMLButtonElement>;
  linkRef: React.RefObject<HTMLAnchorElement>;
}

const ToggleMenuContext = createContext<ToggleMenuContextType | undefined>(
  undefined
);

interface ToggleMenuProviderProps {
  children: ReactNode;
}

export const ToggleMenuProvider = ({ children }: ToggleMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const buttonRefWebSite1 = useRef<HTMLButtonElement | null>(null);
  const buttonRefWebSite2 = useRef<HTMLButtonElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const handleToggleMenu = (newState?: boolean) => {
    if (typeof newState === "boolean") {
      setIsOpen(newState);
    } else {
      setIsOpen((prev) => !prev);
    }
  };
  // const handleToggleMenu = (newState?: boolean) => {
  // console.log("đã vào handleToggleMenu");
  //   if (typeof newState === "boolean") {
  //     setIsOpen(newState);
  //   } else {
  //     console.log("hoán đổi trạng thai isOpenContext");
  //     // Nếu không có tham số, toggle trạng thái isOpen
  //     setIsOpen((prev) => !prev);
  //   }
  //   console.log("isOpenContext", isOpen);
  // };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        linkRef.current?.contains(event.target as Node) ||
        buttonRefWebSite1.current?.contains(event.target as Node) ||
        buttonRefWebSite2.current?.contains(event.target as Node) ||
        divRef.current?.contains(event.target as Node)
      ) {
        console.log(" ref này là 1 Node hoac Link Hoac phan tu");
        return;
      } else {
        console.log(" chuot click ra ngoai");
        handleToggleMenu(false);
      }
    },
    [handleToggleMenu, setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <ToggleMenuContext.Provider
      value={{
        isOpen,
        handleToggleMenu,
        setIsOpen,
        divRef,
        buttonRefWebSite1,
        buttonRefWebSite2,
        linkRef,
      }}
    >
      {children}
    </ToggleMenuContext.Provider>
  );
};

export const useToggleMenuContext = () => {
  const context = useContext(ToggleMenuContext);
  if (!context) {
    throw new Error("useToggleMenu must be used within a ToggleMenuProvider");
  }
  return context;
};
