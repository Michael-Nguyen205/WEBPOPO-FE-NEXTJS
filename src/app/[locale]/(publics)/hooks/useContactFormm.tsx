"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { createContact } from "@/shared/services/contactService";

export interface ContactFormType {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const useContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormType>(); // Thêm reset
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    setLoading(true);
    try {
      await createContact(data);
      alert("Contact form submitted successfully!");
      reset(); // Xóa dữ liệu form sau khi gửi thành công
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Failed to submit contact form.");
    } finally {
      setLoading(false);
    }
  };

  return { register, handleSubmit, errors, onSubmit, loading };
};
