// src/components/Login.tsx
"use client"
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginUser } from '@/shared/services/authService';  // Giả sử bạn đã có hàm loginUser tương tự như registerUser
import { useRouter } from 'next/navigation'
import { LoginInputType } from '@/app/[locale]/(authentication)/login/types/LoginInputType';
import { useLogin } from '@/shared/hooks/useLogin';


const Login: React.FC = () => {
  const { register, handleSubmit, errors, onSubmit } = useLogin();
  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
