import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Import useTranslations

import icon1 from "../../../../../../public/images/hands/one-finger.png";
import icon2 from "../../../../../../public/images/hands/victory.png";
import icon3 from "../../../../../../public/images/hands/three-fingers.png";
import icon4 from "../../../../../../public/images/hands/four-fingers.png";
import icon5 from "../../../../../../public/images/hands/hand.png";

const StepBuild: React.FC = () => {
  const t = useTranslations(); // Sử dụng hook để lấy các từ ngữ dịch

  return (
    <section className="px-3 md:px-14 py-8">
      <div className="title flex flex-col ">
        <span className="text-9xl font-extrabold leading-tight md:w-[800px] py-6 mb-8">
          {t("HomePage.StepToBuild.stepTitle")} 
        </span>

        <div className="py-3 text-stone-600">
          {[
            { step: 1, title: t("HomePage.StepToBuild.step1.title"), description: t("HomePage.StepToBuild.step1.description"), icon: icon1 },
            { step: 2, title: t("HomePage.StepToBuild.step2.title"), description: t("HomePage.StepToBuild.step2.description"), icon: icon2 },
            { step: 3, title: t("HomePage.StepToBuild.step3.title"), description: t("HomePage.StepToBuild.step3.description"), icon: icon3 },
            { step: 4, title: t("HomePage.StepToBuild.step4.title"), description: t("HomePage.StepToBuild.step4.description"), icon: icon4 },
            { step: 5, title: t("HomePage.StepToBuild.step5.title"), description: t("HomePage.StepToBuild.step5.description"), icon: icon5 },
          ].map(({ step, title, description, icon }) => (
            <div key={step} className="border-t-2 border-black px-6 py-9 flex justify-between items-center transition duration-300 ease-in-out hover:bg-primary hover:text-white">
              <div className="inner-l flex">
                <div className="step text-7xl flex-1">Step {step} </div>
                <div className="text ml-5 w-4/5">
                  <h2 className="text-7xl font-bold">{title}</h2>
                  <p className="text-2xl">{description}</p>
                </div>
              </div>
              <div className="inner-r relative h-20 w-20 inline-block transition duration-300 ease-in-out hover:scale-110  hidden md:inline-block">
                <Image src={icon} alt={`Icon ${step}`} fill objectFit="contain" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepBuild;
