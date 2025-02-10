
"use client";

import React from "react";
import Image from "next/image";
import { useContactForm } from "@/app/[locale]/(publics)/hooks/useContactFormm";
import imageContact from "../../../../../../public/images/logoService1.png";
import { useForm, SubmitHandler } from 'react-hook-form';

const Contact: React.FC = () => {



  const { register, handleSubmit, errors, onSubmit, loading } = useContactForm();




  return (
    <section className="flex w-full">
      <div className="inner-wrap bg-secondary flex flex-col lg:flex-row justify-between items-center w-full px-3 md:px-14 py-14 space-x-9 space-y-9 ">
        {/* Left Section */}

        <div className=" text-white w-full lg:w-1/2 ">
        {/* onSubmit={handleSubmit} */}

          <h1 className="text-4xl font-bold mb-8">LET S CONNECT</h1>
          <form className="space-y-4 text-black" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 text-black rounded-md focus:outline-none"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            
            <input
              type="email"
              placeholder="Email"
              {...register("email",)}
              className="w-full p-3 text-black rounded-md focus:outline-none"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}


            <input
              type="text"
              placeholder="Phone Number"
              {...register("phoneNumber", )}
              className="w-full p-3 text-black rounded-md focus:outline-none"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}

            
            <textarea
              placeholder="Message"
              {...register("message", { required: "Message cannot be empty" })}
              className="w-full p-3 text-black rounded-md focus:outline-none h-32"
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}

            <button
              type="submit"
              className="text-white px-6 py-3 rounded-md bg-primary hover:bg-indigo-700 w-full font-semibold"
            >
              {loading ? "Submitting..." : "START NOW"}
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-2/3  text-white flex flex-col justify-between  h-full">
          <div className="relative z-10 ">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Liên hệ với chúng tôi ngay hôm nay!
            </h2>
          </div>

          {/* Phần giữa (thông tin liên lạc) */}

          <div className="flex justify-between">
            <div className="relative z-10  space-y-4 text-2xl">
              <p>
                <strong>Phone</strong>
                <br />
                +91 (123) 456-7890
              </p>
              <p>
                <strong>Email</strong>
                <br />
                hello@reallygreatsite.com
              </p>

              <div>
                <div>Social</div>
                <div className="flex  pt-1  space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
                  >
                    F
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
                  >
                    I
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
                  >
                    T
                  </a>
                </div>
              </div>
            </div>

            {/* Phần cuối (logo) */}
            <div
              className="relative hidden md:block flex-none   px-6 py-3 rounded-lg shadow-lg w-56 h-56 mr-7"
              style={{ aspectRatio: "5/5" }}
            >
              <Image
                src={imageContact} // Đường dẫn đến ảnh
                alt="Description of image" // Mô tả ảnh
                fill // Để ảnh chiếm toàn bộ khung cha
                objectFit="cover" // Đảm bảo ảnh giữ đúng tỷ lệ
                className="object-cover w-ful h-full  "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
