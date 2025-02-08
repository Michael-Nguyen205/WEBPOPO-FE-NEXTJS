// src/components/Register.tsx
"use client"
import React from 'react';
import { RegisterInputType } from '@/app/[locale]/(authentication)/register/types/RegisterInputType';
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerUser } from '@/shared/services/authService';

const Register: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterInputType>();
//   const onSubmit: SubmitHandler<RegisterInputType> = data => console.log(data);
  const password = watch('password');
  const retypePassword = watch('retype_password');
  return (
    <form onSubmit={handleSubmit((data) => registerUser(data, password, retypePassword))}>
      <div>
        <label>Full Name</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label>Phone Number</label>
        <input {...register('phone_number', { required: false })} />
        {errors.phone_number && <span>This field is required</span>}
      </div>
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
      <div>
        <label>Retype Password</label>
        <input type="password" {...register('retype_password', { required: true })} />
        {errors.retype_password && <span>This field is required</span>}
      </div>
   
   
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
