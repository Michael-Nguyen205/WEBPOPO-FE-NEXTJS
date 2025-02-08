import slugify from 'slugify';

 
export const convertSlugUrl = (str: string,locale:string): string => {
  if (!str) return ""; // Trả về chuỗi rỗng nếu không có đầu vào

  return slugify(str, {
    lower: true, // Chuyển tất cả về chữ thường
    locale: locale, // Xử lý ngôn ngữ tiếng Việt (hoặc tùy chỉnh nếu cần)
    remove: /[*+~.()'"!:@]/g, // Loại bỏ các ký tự đặc biệt không mong muốn
  });
};
