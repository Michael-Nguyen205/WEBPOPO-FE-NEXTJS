"use client";

import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { deleteAllCookies } from "@/shared/helper/cokkie/cokkieHelper";

import { useAuth } from "@/shared/hooks/useAuth"; // Import useAuth hookimport { deleteAllCookies, deleteCookie } from "@/helpers/cokkie"; // Điều chỉnh path cho helpers

const Logout: React.FC = () => {
  const router = useRouter(); // Sử dụng useRouter từ Next.js

//   const isAuth = useAuth(); // Lấy trạng thái đăng nhập từ hook useAuth


  useEffect(() => {
    // Xóa tất cả cookies
    deleteAllCookies();
    alert("Đã đăng xuất");
    // Chuyển hướng về trang chủ sau 200ms
    setTimeout(() => {
      router.push("/"); // Thay navigate("/") bằng router.push("/")
    }, 200);
  }, [router]);

  return (
    <div className="">
      Đang logout...
    </div>
  );
};

export default Logout;
