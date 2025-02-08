import React from "react";
import Navbar from "@/app/[locale]/(publics)/components/navbar/Navbar";
import Spline from "@splinetool/react-spline/next";
import { FaCertificate } from "react-icons/fa";
import ButtonLink from "@/shared/components/ui/button/ButtonLink";
import Image from "next/image";
import ImageHeader from "../.././../../../../public/images/imageH.jpg";
import "./style.css";
import OutServiceImage from "../.././../../../../public/images/OutService.png";

import icon1 from "../.././../../../../public/images/iconService3.png";
import icon2 from "../.././../../../../public/images/logoService1.png";
import icon3 from "../.././../../../../public/images/serviceIcon2.png";

const OutValues: React.FC = () => {
  return (
    <section className="relative px-3 md:px-10 py-10 lg:px-14 sm:px-4 text-black bg-secondary container-section z-50">
      <div className="inner-wrap grid grid-cols-1 lg:grid-cols-2 gap-5 p-2  md:p-5 rounded-lg ">
        {/* Phần tử bên trái */}
        <div className="inner-l flex flex-col  bg-white rounded-lg p-10">
          <h1 className="   text-7xl md:text-9xl font-extrabold keyboard leading-tight">
            {"DỊCH VỤ CHÚNG TÔI".split(" ").map((word, wordIndex) => (
              <div key={wordIndex} className="word">
                {word.split("").map((char, charIndex) => (
                  <span key={charIndex} className="key">
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </h1>

          <span className="text-2xl mt-10">
            Chúng tôi cung cấp dịch vụ ứng dụng web, mobile, UI/UX với chất lượng hàng đầu, giúp bạn hiện thực hóa ý tưởng và phát triển sản phẩm mạnh mẽ.
          </span>
        </div>

        {/* Phần tử bên phải */}
        <div className="inner-r grid grid-rows-3 gap-5">
          {/* Card 1 */}
          <div className="p-12 bg-white rounded-lg flex items-center space-x-4">


            <div className="flex gap-6" >
            <div
              className="images relative flex-none bg-blue-600 px-6 py-3 rounded-lg shadow-lg mt-1"
              style={{ height: "80px", aspectRatio: "5/5" }}
            >
              <Image
                src={icon1}
                alt="UI/UX Icon"
                fill
                objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="title">
              <div className="text-4xl font-extrabold">Design</div>
              <p className="text-xl">
              Thiết kế thương hiệu,Thiết Kế Logo,Thiết kế banner & poster,Thiết kế giao diện website & ứng dụng UI/UX              </p>
            </div>
            </div>
           
          </div>

          {/* Card 2 */}
          <div className="p-12 bg-primary text-white rounded-lg flex items-center  space-x-4">
          <div className="flex gap-6" >
            <div
              className="images relative flex-none bg-blue-600 px-6 py-3  rounded-lg shadow-lg mt-1"
              style={{ height: "80px", aspectRatio: "5/5" }}
            >
              <Image
                src={icon2}
                alt="Web Development Icon"
                fill
                objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="title">
              <div className="text-4xl font-extrabold">Web Development</div>
              <p className="text-xl">
              Website doanh nghiệp,E-commerce,Landing Pages với chức năng đặc thù hỗ trợ giới thiệu thương hiệu, sản phẩm và dịch vụ với thiết kế chuyên nghiệp và tối ưu SEO.              </p>
            </div>
            </div>
          </div>




          {/* Card 3 */}
          <div className="p-12 bg-white rounded-lg flex items-center space-x-4">


          <div className="flex gap-6" >
            <div
              className="images relative flex-none bg-blue-600 px-6 py-3 rounded-lg shadow-lg mt-1"
              style={{ height: "80px", aspectRatio: "5/5" }}
            >
              <Image
                src={icon3}
                alt="App Development Icon"
                fill
                objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="title">
              <div className="text-4xl font-extrabold">App Development</div>
              <p className="text-xl">
             Xây dựng ứng dụng CRM, ERP, HRM, POS, quản lý công việc, kho, kế toán... giúp doanh nghiệp thoát khỏi quản lý rời rạc, tự động hóa quy trình và tối ưu vận hành.     </p>
            </div>
          </div>
            </div>
         
        </div>
      </div>
    </section>
  );
};

export default OutValues;



































