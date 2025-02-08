"use client"; // Next.js Client Component
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { getAllPackage } from "@/shared/services/packagesService"; // Import hàm getAllPackage từ file services của bạn
import  Packages  from "@/app/[locale]/(publics)/website-design/development/components/Packages"; // Import kiểu dữ liệu Package từ file types của bạn
// Kiểu dữ liệu TypeScript cho các gói

import { Package } from "@/shared/types/PackagesTypes"; // Import kiểu dữ liệu Package từ file types của bạn



const PackagesContainer: React.FC = () => {
  const t = useTranslations("WebsiteDesignDevelopment"); // Đa ngôn ngữ
  const [packages, setPackages] = useState<Package[]>([]); // Lưu trữ dữ liệu gói
  const [loading, setLoading] = useState<boolean>(true); // Quản lý trạng thái tải dữ liệu

  // Fetch dữ liệu từ API khi component được mount
  useEffect(() => {
    const fetchData = async () => {

        const response = await getAllPackage(2);
      const data = response.result; // Lấy dữ liệu từ phản hồi
      setPackages(data); // Lưu dữ liệu vào state
      setLoading(false); // Cập nhật trạng thái tải
    };

    fetchData();
  }, []);
  
  
  console.log(packages);
  

  if (loading) {
    return <p>Loading...</p>; // Hiển thị trạng thái tải
  }

  if (!packages?.length) {
    return <p>No packages found</p>; // Thông báo nếu không có dữ liệu
  }

  return (
   <Packages packages={packages} />
  );
};

export default PackagesContainer;
