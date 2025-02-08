import React from "react";
import { useTranslations } from "next-intl";
// import Header from "@/app/[locale]/(publics)/website-design/development/components/";
import PackagesContainer from "@/app/[locale]/(publics)/website-design/development/container/pakagesContainer";

const WebsiteDevelopment: React.FC = () => {
    const t = useTranslations("WebsiteDesign"); 
  return (
    <div className="items-center justify-items-center">
  
      {/* <Header /> */}
      <main>
        <section>
        <PackagesContainer />
        </section>
      </main>
    </div>
  );
}

export default WebsiteDevelopment;



