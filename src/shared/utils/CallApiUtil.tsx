


import {getCookie} from "@/shared/helper/cokkie/cokkieHelper";


const API_DOMAIN = "http://localhost:8098/api/v1";

// Helper function để lấy token từ localStorage
const getToken = () => {
  return getCookie('token');
};

// Helper function để lấy ngôn ngữ từ localStorage
const getLanguage = () => {
  return getCookie('NEXT_LOCALE') || 'vi'; // Mặc định là 'vi'
};

// Hàm chung để thực hiện các yêu cầu HTTP
const fetchData = async (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  path: string,
  data?: any,
  revalidate: number | boolean = false,
  cacheType: 'force-cache' | 'no-store' | 'reload' | 'default' = 'force-cache'
) => {
  console.log("Request started:", method, path);

  const token = getToken(); // Lấy token từ localStorage
  const language = getLanguage(); // Lấy ngôn ngữ từ localStorage

  // Cấu hình headers
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept-Language': language,
  };

  // Nếu có token, thêm vào header Authorization
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Cấu hình fetch options
  const fetchOptions: RequestInit = {
    method,
    headers,
    cache: cacheType,
    next: typeof revalidate === 'number' ? { revalidate } : undefined,
  };

  // Nếu là POST hoặc PUT, thêm body vào request
  if (method === 'POST' || method === 'PUT') {
    fetchOptions.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(API_DOMAIN + path, fetchOptions);

    // Kiểm tra phản hồi từ server
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage =
        errorData.detail_message || errorData.message || "Unknown error occurred";
      throw new Error(errorMessage);
    }

    // Xử lý dữ liệu trả về
    const result = await response.json();
    return result;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`Error with ${method} request to ${path}:`, errorMessage);
    alert(`Lỗi server: ${errorMessage}`);
    throw error;
  }
};



// Hàm GET
export const get = async (path: string, revalidate: number | boolean = false, cacheType: 'force-cache' | 'no-store' | 'reload' | 'default' = 'force-cache') => {
  return fetchData('GET', path, null, revalidate, cacheType);
};

// Hàm POST
export const post = async (path: string, data: any, revalidate: number | boolean = false, cacheType: 'force-cache' | 'no-store' | 'reload' | 'default' = 'force-cache') => {
  return fetchData('POST', path, data, revalidate, cacheType);
};

// Hàm PUT
export const put = async (path: string, data: any, revalidate: number | boolean = false, cacheType: 'force-cache' | 'no-store' | 'reload' | 'default' = 'force-cache') => {
  return fetchData('PUT', path, data, revalidate, cacheType);
};

// Hàm DELETE
export const del = async (path: string, revalidate: number | boolean = false, cacheType: 'force-cache' | 'no-store' | 'reload' | 'default' = 'force-cache') => {
  return fetchData('DELETE', path, null, revalidate, cacheType);
};







 







