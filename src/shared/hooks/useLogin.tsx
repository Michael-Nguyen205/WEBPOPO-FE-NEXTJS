"use client"
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginUser } from '@/shared/services/authService'; // Hàm gọi API đăng nhập
import { useRouter } from 'next/navigation';
import { LoginInputType } from '@/app/[locale]/(authentication)/login/types/LoginInputType';

export const useLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputType>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginInputType> = async (data) => {
    try {
      await loginUser(data); // Gọi API đăng nhập
      router.push("/"); // Điều hướng về trang chủ nếu đăng nhập thành công
    } catch (error) {
        router.push("/");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
