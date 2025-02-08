// hooks/useLocale.ts
import { useState, useEffect } from "react";
import { getCookie } from "@/shared/helper/cokkie/cokkieHelper";

export const useLocale = () => {
  const [currentLocale, setCurrentLocale] = useState<string>("en");

  useEffect(() => {
    const locale = getCookie("NEXT_LOCALE");
    if (locale) {
      setCurrentLocale(locale);
    }
  }, []);

  return currentLocale;
};
