// app/[locale]/website-design/page.tsx
import React from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { headers } from "next/headers";
import { useLocale } from "next-intl";
import ButtonLink from "@/shared/components/ui/button/ButtonLink";
import Header from "@/app/[locale]/(publics)/website-design/components/header/Header";
import CategoryForm from "@/app/[locale]/(publics)/website-design/components/form/form";




// app/[locale]/website-design/page.tsx

interface WebsiteDesignProps {
  params: { locale: string };
}


const WebsiteDesign: React.FC<WebsiteDesignProps> =  ({ params }) => {
//   Use headers() to get request headers in a server-side context
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const pathname = headersList.get("x-current-path");

  const locale = useLocale();
  
  
  // Fetch translations using next-intl
  // const t = useTranslations("WebsiteDesign");

  return (
    <>
      <div>
        <p>Locale: {locale}</p>
        <p>LocaleParam: {params.locale}</p>
        <p>Domain: {domain}</p>
        <p>Pathname: {pathname}</p>
        <p>Full URL: {fullUrl}</p>
      </div>

      <Header />


      {/* <CategoryForm /> */}
      <main>
        <section>
          {/* You can add additional content here */}
        </section>
      </main>
    </>
  );
};

export default WebsiteDesign;












// app/[locale]/website-design/page.tsx

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const header = headers();

  const host = header.get("host") || "";
  const href = header.get("x-current-path")?.toString() || "";

  // Generate the current pathname
  const pathname = getPathname({ locale, href });

  // Fetch translations for metadata
  const t = await getTranslations({ locale, namespace: "Metadata" });

  // Canonical URL (default locale)
  const canonicalUrl = `${host}${getPathname({
    locale: routing.defaultLocale,
    href,
  })}`;

  // Generate alternate links for all supported locales
  const alternates = routing.locales.map((loc) => ({
    hreflang: loc,
    href: `${host}${getPathname({ locale: loc, href })}`,
  }));

  return {
    title: t("title"), // Translated title
    description: t("description"), // Translated description

    alternates: {
      canonical: canonicalUrl, // Canonical URL
      languages: Object.fromEntries(
        alternates.map(({ hreflang, href }) => [hreflang, href])
      ),
    },

    openGraph: {
      type: "website",
      url: `${host}${pathname}`,
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: `${host}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "OpenGraph Image Alt Text",
        },
        {
          url: `${host}/images/og-image-secondary.jpg`,
          width: 800,
          height: 600,
          alt: "Secondary OpenGraph Image",
        },
      ],
    },
  };
}

type Href = Parameters<typeof getPathname>[0]["href"];

// Helper function to generate complete URLs for a specific locale
function getUrl(href: Href, locale: (typeof routing.locales)[number]): string {
  const pathname = getPathname({ locale, href });
  return `${pathname}`;
}