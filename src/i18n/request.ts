// "use client";


import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Log toàn bộ headers của request để kiểm tra thông tin
  // const pathname = new URL(request.url).pathname;
  // const localeFromPath = pathname.split('/')[1]; // Tách từ URL /vi -> 'vi'

  // console.log('Locale from path:', localeFromPath);
  // Log giá trị ban đầu của requestLocale
  console.log('Initial requestLocale:', requestLocale);

  // Lấy giá trị của requestLocale
  let locale = await requestLocale;

  // Log giá trị đã được giải quyết (resolved) của requestLocale
  console.log('Resolved locale from requestLocale:', locale);

  // Nếu không tìm thấy locale hợp lệ, sử dụng defaultLocale
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
    console.log('Fallback to default locale:', locale);
  }

  // Log locale cuối cùng được sử dụng
  console.log('Final locale:', locale);

  // Trả về cấu hình với messages của locale tương ứng


  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
