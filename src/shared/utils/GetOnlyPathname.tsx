// utils/getPathnameNoPrefix.ts
// import { headers } from 'next/headers';
import { routing } from '../../i18n/routing'; // Đường dẫn tùy chỉnh theo dự án

type Header = {
    get: (key: string) => string | null; // Định nghĩa kiểu get cho Header
  };
  

export function getOnlyPathname(header: Header): string | null {
    console.log("[getOnlyPathname] Bắt đầu xử lý...");

    const pathname = header.get("x-current-path"); // Lấy giá trị x-current-path từ headers
    console.log("[getOnlyPathname] x-current-path:", pathname);

    if (!pathname) {
        console.error("[getOnlyPathname] Không tìm thấy x-current-path trong headers.");
        return null; // Trả về null nếu không có pathname
    }

    const localeRegex = new RegExp(`^/(${routing.locales.join('|')})/`); // Tạo regex từ routing
    console.log("[getOnlyPathname] Regex locale:", localeRegex);

    const processedPathname = pathname.replace(localeRegex, '/'); // Loại bỏ tiền tố locale
    console.log("[getOnlyPathname] Processed pathname:", processedPathname);

    return processedPathname; // Trả về pathname đã xử lý
}
  