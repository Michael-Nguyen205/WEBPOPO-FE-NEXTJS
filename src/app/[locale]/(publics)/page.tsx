// import Image from "next/image";
// import Footer from "@/components/footer/page"

import { useTranslations } from "next-intl";
import OutValues from "@/app/[locale]/(publics)/components/outValues/OutValues";
import OutTechs from "@/app/[locale]/(publics)/components/outTechs/OutTechs";
import OutServices from"@/app/[locale]/(publics)/components/outServices/OutServices";
import StepBuild from "@/app/[locale]/(publics)/components/stepBuild/StepBuild"

import Contact from "@/app/[locale]/(publics)/components/contact/Contact";
import Welcome from "@/app/[locale]/(publics)/components/welcome/Welcome"
const Home: React.FC = () => {
  return (
    <main>
    
       <OutValues />

         <Welcome/>
        <OutTechs/>
      
        <OutServices/>
        <StepBuild/>
        
        <Contact/>
   
    </main>
  );
};

export default Home;





