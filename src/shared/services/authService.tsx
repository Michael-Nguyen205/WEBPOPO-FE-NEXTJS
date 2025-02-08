// "use client";
// src/services/authService.ts
import { post } from "@/shared/utils/CallApiUtil";
import { useRouter } from 'next/navigation'
import { setCookie } from "@/shared/helper/cokkie/cokkieHelper";






export const loginUser = async (data: any) => {
  try {
    console.log("Login data:", data);

    const newLoginData = {
      email: data.email,
      password: data.password,
    };

    const responseData = await post("/users/login", newLoginData);

    console.log("Response from API:", responseData);
    alert(responseData.detail_message);

    setCookie("token", responseData.token, 1);
    setCookie("permission_list", JSON.stringify(responseData.permission_list), 1);
    setCookie("user_id", responseData.user.id, 1);
    setCookie("user_email", responseData.user.email, 1);
    setCookie("user_name", responseData.user.name, 1);
    setCookie("is_login", "true", 1);

    alert("Login successful!");
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    alert(`Đăng nhập thất bại: ${errorMessage}`);
    console.error("Error during login:", errorMessage);
  }
};












// Hàm đăng ký người dùng
export const registerUser = async (
  data: any,
  password: string,
  retypePassword: string
) => {
  try {
    console.log("data", data);
    if (password !== retypePassword) {
      alert("Passwords do not match");
      return;
    }

    const newUserData = {
      name: data.name,
      phone_number: data.phone_number,
      email: data.email,
      password: data.password,
      retype_password: data.retype_password,
    };

    // Gọi API để gửi dữ liệu đăng ký

   
    const result = await post("/users/register", newUserData);
    alert("Registration successful!");
    return result;

  } catch (error) {
    console.error("Error during checking existence:", error);
    throw error; // Ném ra lỗi nếu có lỗi xảy ra
  }
};









