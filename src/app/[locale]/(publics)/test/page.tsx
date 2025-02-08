// app/[locale]/website-design/page.tsx
import React from "react";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const host = "https://example.com";
  const href = "/website";

  <>
    <link rel="canonical" href="https://example.com/en/website-design" />

    {routing.locales.map((loc) => (
      <link
        key={loc}
        rel="alternate"
        href={`${host}${getPathname({ locale: loc, href })}`}
        hrefLang={loc}
      />
    ))}
  </>;

  const pathname = getPathname({ locale, href });
  const t = await getTranslations({ locale, namespace: "Metadata" });
  console.log(t("title"));

  const alternates = routing.locales.map((loc) => ({
    href: `${host}/${loc}${href}`,
    hreflang: loc,
  }));

  console.log("getPathname", pathname);
  console.log("locale", locale);

  const canonicalUrl = getUrl(href, routing.defaultLocale);
  console.log("getPathname", pathname);
  return {
    title: t("title"),
    description: t("description"),

    // Thêm các thẻ link vào metadata

    openGraph: {
      type: "website",
      url: `${host}/${locale}/website-design`,
      title: t("title"),
      description: t("description"),
    },
    images: [
      {
        url: `url`,
        width: 1200,
        height: 630,
        alt: "OpenGraph Image Alt Text",
      },
      {
        url: `...}/images/og-image-secondary.jpg`,
        width: 800,
        height: 600,
        alt: "Secondary OpenGraph Image",
      },
    ],
    
    canonical: canonicalUrl, // Đảm bảo URL chuẩn
    alternates: {
      languages: Object.fromEntries(
        alternates.map((alternate) => [alternate.hreflang, alternate.href])
      ),
    },
    
  };
}

type Href = Parameters<typeof getPathname>[0]["href"];
// Hàm này tạo URL hoàn chỉnh cho từng ngôn ngữ
function getUrl(href: Href, locale: (typeof routing.locales)[number]) {
  const pathname = getPathname({ locale, href }); // Lấy đường dẫn đầy đủ cho ngôn ngữ
  return href + pathname; // Trả về URL hoàn chỉnh
}
// (/users , fr) -> https://acme.com/fr/users
const Test: React.FC = () => {
  const t = useTranslations("Website-design"); // Dịch từ file intl của bạn

  return (
    <>
      <header>{t("title")}</header>

      <main>
        <section>hi</section>
        <section>{/* Các phần khác */}</section>
      </main>
    </>
  );
};

export default Test;
