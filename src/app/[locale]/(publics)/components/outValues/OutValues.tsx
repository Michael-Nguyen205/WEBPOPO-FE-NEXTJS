import React from "react";
import Navbar from "@/app/[locale]/(publics)/components/navbar/Navbar";
import Spline from "@splinetool/react-spline/next";
import { FaCertificate } from "react-icons/fa";
import ButtonLink from "@/shared/components/ui/button/ButtonLink";
import Image from "next/image";
import ImageHeader from "../.././../../../../public/images/imageH.jpg";
const OutValues: React.FC = () => {
  return (
    <>
      <section className="  container-section     text-black bg-white">
        <div className="inner-wrap relative z-10    flex flex-col  md:flex-row   space-y-9 md:space-y-0  md:space-x-7">
          <div className=" px-3  inner-l basis-3/5 pt-14 md:pl-14  ">
            <h1 className="text-8xl font-extrabold leading-tight">
              <span>GIÁ TRỊ</span>
              <br />
              <span>CỐT LÕI</span>
            </h1>

            <span className="text-2xl">
              Chúng tôi cam kết xây dựng giải pháp công nghệ với sự tập trung
              vào sự sáng tạo, chất lượng và khả năng mang lại giá trị thực
              tiễn cho khách hàng.
            </span>
          </div>

          <div className="flex flex-col flex-1  pl-0">
            <div className=" p-14   border-y-4     md:border-y-0      md:border-x-4       border-neutral-950 basis-1/3  ">
              <div className=" text-4xl font-extrabold">SÁNG TẠO</div>
              <span className="text-xl">
                Không ngừng đổi mới và tạo ra các giải pháp công nghệ độc đáo,
                mang lại sự khác biệt và giá trị cao cho khách hàng.
              </span>
            </div>
            <div className=" p-14 bg-stone-900 basis-1/3 text-white  ">
              <div className=" text-4xl font-extrabold">CHẤT LƯỢNG</div>
              <span className="text-xl">
                Đặt chất lượng lên hàng đầu, đảm bảo mọi sản phẩm và dịch vụ
                đều vượt trên mong đợi của khách hàng.
              </span>
            </div>
            <div className=" p-14 bg-primary basis-1/3  text-white  ">
              <div className=" text-4xl font-extrabold">TINH THẦN HỢP TÁC</div>
              <span className="text-xl">
                Luôn đồng hành cùng khách hàng và đối tác, xây dựng mối quan hệ
                bền vững dựa trên sự tin tưởng và hỗ trợ lẫn nhau.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default OutValues;
