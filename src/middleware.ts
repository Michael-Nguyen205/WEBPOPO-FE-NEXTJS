// import createMiddleware from 'next-intl/middleware';
// import {routing} from './i18n/routing';
 
// export default createMiddleware(routing);
 
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(vi|en)/:path*']
// };







// import { NextRequest, NextResponse } from 'next/server';  // Import NextRequest và NextResponse từ next/server
// import createMiddleware from 'next-intl/middleware';  // Import createMiddleware từ next-intl
// import { routing } from './i18n/routing';  // Import routing của bạn

// // Tạo middleware từ next-intl với cấu hình của bạn
// const i18nMiddleware = createMiddleware(routing);

// // Middleware chính của bạn
// export function middleware(req: NextRequest): NextResponse {
//   const pathname = req.nextUrl.pathname;  // Lấy pathname từ req.nextUrl

//   // Kiểm tra nếu pathname không phải các trang bạn muốn xử lý riêng
//   if (!pathname.includes('/website-design')) {
//     console.log('Đang xử lý middleware của intl:', pathname);

//     // Nếu không phải trang bạn muốn xử lý riêng, sử dụng next-intl middleware
//     return i18nMiddleware(req);  // Gọi middleware từ next-intl
//   }

//   // Nếu là các trang cụ thể, thực hiện logic riêng
//   console.log('Đang xử lý middleware riêng cho:', pathname);
  
//   // Sử dụng đúng tên biến 'req' thay vì 'request'
//   const requestHeaders = new Headers(req.headers);
//   requestHeaders.set('x-url', req.url);

//   const headers = new Headers(req.headers);
//   headers.set("x-current-path", req.nextUrl.pathname);

//   return NextResponse.next({ headers });

// }

// // Định nghĩa matcher cho các trang sẽ áp dụng middleware riêng
// export const config = {
//   matcher: [
//     // Match tất cả các route ngoại trừ static files và APIs
//     "/((?!api|_next/static|_next/image|favicon.ico).*)",
//     "/",
//     "/(vi|en)/:path*",  // Duy trì các routes ngôn ngữ
//   ],
// };






import { NextRequest, NextResponse } from 'next/server';  // Import NextRequest và NextResponse từ next/server
import createMiddleware from 'next-intl/middleware';  // Import createMiddleware từ next-intl
import { routing } from './i18n/routing';  // Import routing của bạn
import {getOnlyPathname} from './shared/utils/GetOnlyPathname';  // Import hàm getOnlyPathname từ file utils của bạn
// Tạo middleware từ next-intl với cấu hình của bạn
const i18nMiddleware = createMiddleware(routing);

// Đối tượng chứa logic cho từng trang cụ thể
const customPageLogic: { [key: string]: (req: NextRequest) => NextResponse } = {
  '/website-design': (req: NextRequest) => {
    console.log('Đang xử lý middleware riêng cho ',req.nextUrl.pathname);
    // Logic riêng cho /website-design
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-url', req.url);
  
    const headers = new Headers(req.headers);
    headers.set("x-current-path", req.nextUrl.pathname);
    // headers.set('x-locale', currentLocale);

    return NextResponse.next({ headers });
  },



  '/another-page': (req: NextRequest) => {
    console.log('Đang xử lý middleware riêng cho /another-page');
    // Logic riêng cho /another-page
    const headers = new Headers(req.headers);
    headers.set("x-custom-header", "another-page");
    return NextResponse.next({ headers });
  },
  // Thêm các trang khác vào đây khi cần
};










// Middleware chính của bạn
export function middleware(req: NextRequest): NextResponse {

  const pathname = req.nextUrl.pathname;
  const localeRegex = new RegExp(`^/(${routing.locales.join('|')})/`);
  const pathnameNoPrefixLocale = pathname.replace(localeRegex, '/');


  // Kiểm tra nếu pathname là trang có logic riêng
  if (pathnameNoPrefixLocale && customPageLogic[pathnameNoPrefixLocale]) {
    return customPageLogic[pathnameNoPrefixLocale](req);  // Gọi hàm xử lý riêng cho trang
  }

  // Nếu không phải trang có logic riêng, sử dụng next-intl middleware
  console.log('Đang xử lý middleware của intl:', pathname);
  return i18nMiddleware(req);  // Gọi middleware của next-intl
}

// Định nghĩa matcher cho các trang sẽ áp dụng middleware riêng
export const config = {
  matcher: [
    // Match tất cả các route ngoại trừ static files và APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/",
    "/(vi|en)/:path*",  // Duy trì các routes ngôn ngữ
  ],
};
