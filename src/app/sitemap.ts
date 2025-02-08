// import type { MetadataRoute } from 'next'
 
// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: 'https://acme.com',
//       lastModified: new Date(),
//       alternates: {
//         languages: {
//           es: 'https://acme.com/es',
//           de: 'https://acme.com/de',
//         },
//       },
//     },
//     {
//       url: 'https://acme.com/about',
//       lastModified: new Date(),
//     //   images: [
//     //     {
//     //       url: 'https://acme.com/about/image.jpg', // Đường dẫn tới ảnh trong trang About
//     //       alt: 'Description of the image', // Thêm thuộc tính alt nếu cần
//     //     },
//     //   ],

//       alternates: {
//         languages: {
//           es: 'https://acme.com/es/about',
//           de: 'https://acme.com/de/about',
//         },
//       },
//     },
//     {
//       url: 'https://acme.com/blog',
//       lastModified: new Date(),
//       alternates: {
//         languages: {
//           es: 'https://acme.com/es/blog',
//           de: 'https://acme.com/de/blog',
//         },
//       },
//     },
//   ]
// }
 
import {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';
import{getPathname}from '@/i18n/routing';
// Adapt this as necessary
const host = 'https://acme.com';
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Adapt this as necessary
  return [getEntry('/'), getEntry('/users')];
  // {
  //   "url": "https://acme.com/en/",
  //   "alternates": {
  //     "languages": {
  //       "en": "https://acme.com/en/",
  //       "vi": "https://acme.com/vi/",
  //       "es": "https://acme.com/es/",
  //       "fr": "https://acme.com/fr/"
  //     }
  //   }
  // },
  // {
  //   "url": "https://acme.com/en/users",
  //   "alternates": {
  //     "languages": {
  //       "en": "https://acme.com/en/users",
  //       "vi": "https://acme.com/vi/users",
  //       "es": "https://acme.com/es/users",
  //       "fr": "https://acme.com/fr/users"
  //     }
  //   }
  // }
}
 
type Href = Parameters<typeof getPathname>[0]['href'];
 
function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale), // Lấy URL cho ngôn ngữ mặc định
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)])
      )
    }
  };
}
 

// Hàm này tạo URL hoàn chỉnh cho từng ngôn ngữ
function getUrl(href: Href, locale: (typeof routing.locales)[number]) {
  const pathname = getPathname({ locale, href }); // Lấy đường dẫn đầy đủ cho ngôn ngữ
  return host + pathname; // Trả về URL hoàn chỉnh
}
// (/users , fr) -> https://acme.com/fr/users
