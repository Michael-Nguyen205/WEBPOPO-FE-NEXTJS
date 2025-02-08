// src/containers/UserLinksContainer.tsx
"use client";

import React from "react";
// import { useLocale } from "@/shared/hooks/useLocale"; // Import useLocale hook
import { useAuth } from "@/shared/hooks/useAuth"; // Import useAuth hook
import { FaUser } from "react-icons/fa";
import ButtonLink from "@/shared/components/ui/button/ButtonLink"; // Import UI component
import {Link} from "@/i18n/routing";

const AuthOrUserContainer: React.FC = () => {
//   const currentLocale = useLocale(); // Sử dụng hook useLocale để lấy ngôn ngữ hiện tại
  const isAuth = useAuth(); // Lấy trạng thái đăng nhập từ hook useAuth

  return (
    <>
      {isAuth ? (
        <ButtonLink
          href={`/user`}
          icon={<FaUser />} // Truyền icon vào
          text="User"
          className="bg-primary  px-3 py-2 rounded-lg hover:bg-lime-500"
          />
      ) : (
        <div className="flex space-x-4">
          <ButtonLink
            href={`/login`}
            text="Login"
            className=" bg-black  px-3 py-2 rounded-lg hover:bg-lime-700"
          />
          <ButtonLink
            href={`/register`}
            icon={<FaUser />} // Truyền icon vào
            text="Register"
            className="bg-primary px-3 py-2 rounded-lg hover:bg-lime-500"
          />
        </div>
      )}
    </>
  );
};

export default AuthOrUserContainer;
