// src/components/ButtonLink.tsx
import React from "react";
// import Link from "next/link";
import {Link} from "@/i18n/routing";


type ButtonLinkOnClickFuntionType = 
  | ((event: React.MouseEvent<HTMLAnchorElement>) => void)  // Hàm nhận sự kiện chuột
  | (() => void)  // Hàm không nhận tham số
  | (<T>(param: T) => void);  // Hàm nhận tham số tùy chỉnh

interface ButtonLinkProps {
  key?: string | number;
  href: string;
  className?: string;
  icon?: React.ReactNode;
  text: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  eventFuntion?: ButtonLinkOnClickFuntionType; 
  linkRef?: React.RefObject<HTMLAnchorElement>;
  // onClick có thể nhận một trong ba dạng hàm trên
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  key,
  href,
  className = "p-3 bg-black text-white rounded-lg",
  icon,
  text,
  target = "_self",
  eventFuntion,
  linkRef
}) => {
    
  const defaultClass = "flex items-center justify-center space-x-4 mb-1 mt-1";

  return (
    <Link
      key={key}
      href={href}
      target={target}
      className={`${defaultClass} ${className}`}
      onClick={eventFuntion} 
      ref={linkRef}
    >
      {icon && <span className="text-lg">{icon}</span>} {/* Hiển thị icon nếu có */}
      <span>{text}</span>
    </Link>
  );
};

export default ButtonLink;
