import React from "react";
import ButtonLink from "@/shared/components/ui/button/ButtonLink";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import { headers } from "next/headers";
import {getOnlyPathname} from '@/shared/utils/GetOnlyPathname';  // Import hàm getOnlyPathname từ file utils của bạn


const ListService: React.FC = () => {

  const header = headers();
  const t = useTranslations("WebsiteDesign"); // Fetch translations for the page content
  const locale = useLocale();
  const keys = ["buttonLinkWebByCode", "buttonLinkWebByWordPress"] as const;
  const path = getOnlyPathname(header) || "";

  
  return (
    <section>
      <b />
      
      {keys.map((key) => (
        <ButtonLink key={key} href={path + t(`Header.ListService.${key}.href`)} text={t(`Header.ListService.${key}.text`)} />
      ))}
    </section>
  );
};

export default ListService;
