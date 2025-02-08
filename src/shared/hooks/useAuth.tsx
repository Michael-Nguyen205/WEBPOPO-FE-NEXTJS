// hooks/useAuth.ts
import { useState, useEffect } from "react";
import { getCookie } from "@/shared/helper/cokkie/cokkieHelper";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState<string | null>(null);

  useEffect(() => {
    const isLogin = getCookie("is_login");
    setIsLogin(isLogin);
  }, []);

  return isLogin;
};



