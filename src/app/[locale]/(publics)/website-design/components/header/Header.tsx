import React from "react";
import { useTranslations } from "next-intl";
import ListService from "@/app/[locale]/(publics)/website-design/components/header/listService/ListService";
const Header: React.FC = () => {
  const t = useTranslations("WebsiteDesign"); // Fetch translations for the page content

  return (
    <header>
       <h1>{t("Header.title")}</h1> 
      <div>dddddd</div>
      {/* {d("title")} */}
      <ListService />
    </header>
  );
};

export default Header;
