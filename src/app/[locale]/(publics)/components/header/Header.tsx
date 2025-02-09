import React from "react";
import Navbar from "@/app/[locale]/(publics)/components/navbar/Navbar";
import Spline from "@splinetool/react-spline/next";
import { FaCertificate } from "react-icons/fa";
import ButtonLink from "@/shared/components/ui/button/ButtonLink";
import Image from "next/image";
import ImageHeader from "../.././../../../../public/images/imageH.jpg";
import ScrollingTextBanner from "@/app/[locale]/(publics)/components/header/scrollingTextBanner/ScrollingTextBanner";
const Header: React.FC = () => {
  return (
    <header className="  px-3 md:px-10 py-0 lg:px-14  sm:px-4 text-black bg-secondary">
      {/* Navbar */}
      <Navbar />
      {/* Phần nền và nội dung chính */}
      <div className="  container-header relative flex   backdrop-blur-md  min-h-screen  items-center  text-white">
        <div
          className="background absolute w-5/6 h-screen  flex flex-col -z-8"
          style={{ left: "-55px" }}
        >
          {/* Phần tử đầu tiên */}
          {/* Phần tử đầu tiên */}
          <div className="bg-primary w-96 h-80 border-4 border-black"></div>

          {/* Phần tử thứ hai */}
          <div className="   hidden  md:flex w-full h-1/3">
            {/* Khối bên trái */}
            <div className="min-w-96  h-full  border-black"></div>

            {/* Khối bên phải */}
            <div className="bg-primary min-w-40 h-40 border-4 border-black"></div>
          </div>


        </div>
        {/* Phần vòng tròn hoạt họa */}
        {/* <div
          className="background absolute bg-indigo-500 top-0 rounded-full w-56 h-56 flex items-center justify-center"
          style={{ left: "-90px" }}
        >
          <div className="bg-indigo-700 rounded-full w-44 h-44"></div>
        </div> */}

       

        <div className="inner-wrap  w-full h-3/4  mb-5  flex flex-col md:flex-row  items-center  justify-between mt-12   space-x-6 z-10 lg:space-x-16">
          {/* Phần bên trái */}
          <div className="inner-l  lg:w-1/2 space-y-9">
            {/* Title 1 */}
            <span className="title-1 px-5 py-4 bg-white rounded-full inline-flex  space-x-2 ">
              <div className="icon text-black flex items-center justify-center w-10 h-10">
                <FaCertificate className="w-full h-full" />
              </div>
              <h4 className="text-3xl   md:text-5xl text-black font-bold">WEBPOPO STUDIO</h4>
            </span>

            <div className="title-2  text-7xl  md:text-8xl leading-tight mr-5 ">
              HIỆN THỰC HOÁ Ý TƯỞNG SỐ
            </div>

            {/* Button */}
            <div className="button">
              <ButtonLink
                href={`/hello`}
                text="Learn More "
                className="inline-flex p-3 px-5 border-2  border-zinc-950  bg-primary text-white rounded-full"
              />
            </div>

            {/* Description */}
            <div className="dsc text-2xl">
              Chúng tôi cung cấp giải pháp ứng dụng và website chuyên nghiệp,
              giúp doanh nghiệp tối ưu hóa hiệu quả và định định thương hiệu.{" "}
            </div>
          </div>

          {/* Phần bên phải */}
          {/* Phần bên phải */}
          <div
            className="inner-r z-10  p-2   hidden    lg:flex lg:flex-col  "
            style={{ width: "550px", height: "100%", aspectRatio: "5/5" }}
          >
            <div
              className=" relative  w-full h-96  "
              style={{ height: "100%" }}
            >
              <Image
                src={ImageHeader} // Đường dẫn đến ảnh
                alt="Description of image" // Mô tả ảnh
                fill // Để ảnh chiếm toàn bộ khung cha
                objectFit="cover" // Đảm bảo ảnh giữ đúng tỷ lệ
                className="object-cover w-ful h-full  "
              />
            </div>

            {/* <div className="mt-auto bg-white border-8 border-zinc-950 justify-center items-center p-2 flex">
              <h4 className="text-3xl text-black">WEBPOPO STUDIO</h4>
            </div> */}
          </div>

          
        </div>
        <div className="absolute -bottom-0 left-[-13px] md:left-[-71px]">
  <ScrollingTextBanner />
</div>

      </div>
    </header>
  );
};

export default Header;

// <div className="absolute title-1 mt-10">
// <h1 className="text-8xl font-bold">CHUYỂN ĐỔI SỐ DỄ</h1>
// <h1 className="text-8xl font-bold">DÀNG,CÙNG BẠN</h1>
// </div> */}
