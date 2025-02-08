

// "use client";
// src/services/authService.ts
import { get } from "@/shared/utils/CallApiUtil";
import { useRouter } from 'next/navigation'
import { setCookie } from "@/shared/helper/cokkie/cokkieHelper";
// Hàm đăng ký người dùng
export const getAllPackage = async (
categoriesId : number
) => {
  try {
 
    const result = await get("/package?category_id="+categoriesId);
    return result;

  } catch (error) {
    console.error("Error during checking existence:", error);
    throw error; // Ném ra lỗi nếu có lỗi xảy ra
  }
};



















// const fetchPackages = async () => {
//     try {
//       const token = "eyJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6IiQyYSQxMCR1dE91bXhXdUtZblZoR2pWTkpXSkhPcWN6UnQzN1owU3RiYU5ZZ0lSbHhVT0cvS3lwcUlPUyIsInJvbGVzIjpbIlBFUk1JU1NJT05fQURNSU4iXSwidXNlcm5hbWUiOiJiaW5kdXlraGFuaGh2bkBnbWFpbC5jb20iLCJzdWIiOiJiaW5kdXlraGFuaGh2bkBnbWFpbC5jb20iLCJpYXQiOjE3MzQ4NjA0ODYsImV4cCI6MTczNzQ1MjQ4Nn0.CJ5Mqj3KxX-f5mXVK5inWWQEoKfcGs76XWEqRUucOBY"; // Thay bằng Bearer Token của bạn
//       const response = await fetch("http://localhost:8098/api/v1/package?category_id=2", {
//         method: "GET",
//         headers: {
//           "Accept-Language": "vi", // Ngôn ngữ mong muốn
//           "Authorization": `Bearer ${token}`, // Thêm Bearer Token
//           "Content-Type": "application/json", // Đảm bảo định dạng JSON
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch packages");
//       }

//       const data = await response.json();
//       setPackages(data.result); // Lưu dữ liệu vào state
//     } catch (error) {
//       console.error("Error fetching packages:", error);
//     } finally {
//       setLoading(false); // Kết thúc loading
//     }
//   };






