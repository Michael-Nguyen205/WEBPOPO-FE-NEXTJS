// "use client";
// src/services/authService.ts
import { post } from "@/shared/utils/CallApiUtil";



// Hàm đăng ký người dùng
export const createContact = async (
  data: any,
) => {
  try {
    console.log("data", data);
    const newContactData = {
       full_name : data.name,
        email: data.email,
        phone_number: data.phoneNumber,
        message: data.message,
    };

    // Gọi API để gửi dữ liệu đăng ký
    const result = await post("/contact", newContactData);
    alert("Registration successful!");
    return result;

  } catch (error) {
    console.error("Error during checking existence:", error);
    throw error; // Ném ra lỗi nếu có lỗi xảy ra
  }
};









