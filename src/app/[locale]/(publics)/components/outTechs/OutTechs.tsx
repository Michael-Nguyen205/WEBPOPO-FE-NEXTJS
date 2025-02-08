import React from "react";

import Navbar from "@/app/[locale]/(publics)/components/navbar/Navbar";
import Spline from "@splinetool/react-spline/next";
import { FaCertificate } from "react-icons/fa";
import ButtonLink from "@/shared/components/ui/button/ButtonLink";
import Image from "next/image";
import ImageHeader from "../.././../../../../public/images/imageH.jpg";

import HtmlIcon from "../../../../../../public/images/tech/html-icon.webp";

import CssIcon from "../../../../../../public/images/tech/css-icon.webp";
import JsIcon from "../../../../../../public/images/tech/js-icon-transparent-background-free-png.webp";

import ReactjsIcon from "../../../../../../public/images/tech/React.webp";

import Nextjs from "../../../../../../public/images/tech/nextjs-icon.webp";

import JavaIcon from "../../../../../../public/images/tech/java-4-logo-png-transparent.png";

import SpringIcon from "../../../../../../public/images/tech/spring-icon.png";

import RedisIcon from "../../../../../../public/images/tech/Redis-Logo.wine.png";

import KafkaIcon from "../../../../../../public/images/tech/KafkaIcon.png";

import DockerIcon from "../../../../../../public/images/tech/Docker-Logo.png";

import MysqlIcon from "../../../../../../public/images/tech/Mysql_logo.png";

import MongoDbIcon from "../../../../../../public/images/tech/Mongodb.png";

import TailwinCssIcon from "../../../../../../public/images/tech/tailwind.png";


import NettyIcon from "../../../../../../public/images/tech/NettyIcon.png";

import AntdIcon from "../../../../../../public/images/tech/Antd.png";

import TsIcon from "../../../../../../public/images/tech/ts-logo.png";


import GitlabIcon from "../../../../../../public/images/tech/git-lab.webp";

import GithubIcon from "../../../../../../public/images/tech/Github.webp";

import GitIcon from "../../../../../../public/images/tech/git.png";


import "./style.css";

const OutTechs: React.FC = () => {
  return (
    <>
      <section className="bg-secondary text-white  overflow-hidden md:px-14 ">
        <h5 className="relative text-6xl font-bold  mb-4  pt-8 text-center ">Our Techs</h5>
        <div className="flex  relative w-full  h-44 space-x-9 infinite-scroll-tech-banner ">
          {/* Các mục công nghệ */}

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={HtmlIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={CssIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={JsIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={TsIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>



          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{
              height: "100%",
              aspectRatio: "5/5",
              clipPath: "circle(50% at center)",
            }}
          >
            <Image
              src={ReactjsIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{
              height: "100%",
              aspectRatio: "5/5",
              clipPath: "circle(50% at center)",
            }}
          >
            <Image
              src={Nextjs} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={SpringIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div> 

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={JavaIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "6/4" }}
          >
            <Image
              src={RedisIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={KafkaIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "6/4" }}
          >
            <Image
              src={NettyIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>


          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "6/4" }}
          >
            <Image
              src={GitIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          
          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={GitlabIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>


          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={GithubIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>



          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={DockerIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>



          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={MysqlIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "6/4" }}
          >
            <Image
              src={MongoDbIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "6/4" }}
          >
            <Image
              src={TailwinCssIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "6/4" }}
          >
            <Image
              src={AntdIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>





























          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={HtmlIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={CssIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={JsIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{
              height: "100%",
              aspectRatio: "5/5",
              clipPath: "circle(50% at center)",
            }}
          >
            <Image
              src={ReactjsIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{
              height: "100%",
              aspectRatio: "5/5",
              clipPath: "circle(50% at center)",
            }}
          >
            <Image
              src={Nextjs} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={SpringIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={JavaIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "6/4" }}
          >
            <Image
              src={RedisIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={KafkaIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "6/4" }}
          >
            <Image
              src={NettyIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={DockerIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "5/5" }}
          >
            <Image
              src={MysqlIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none  px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "6/4" }}
          >
            <Image
              src={MongoDbIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "6/4" }}
          >
            <Image
              src={TailwinCssIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>

          <div
            className="relative flex-none   px-6 py-3 rounded-lg shadow-lg"
            style={{ height: "100%", aspectRatio: "6/4" }}
          >
            <Image
              src={AntdIcon} // Đường dẫn đến ảnh
              alt="Description of image" // Mô tả ảnh
              fill // Để ảnh chiếm toàn bộ khung cha
              objectFit="contain" // Đảm bảo ảnh giữ đúng tỷ lệ
              className="object-cover w-ful h-full  "
            />
          </div>









        </div>
      </section>
    </>
  );
};

export default OutTechs;
