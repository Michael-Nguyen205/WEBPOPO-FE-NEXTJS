"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { createContact } from "@/shared/services/contactService";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setLoading(true);
    try {
      await createContact(data);
      alert("Contact form submitted successfully!");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Failed to submit contact form.");
    } finally {
      setLoading(false);
    }
  };

  return { register, handleSubmit, errors, onSubmit, loading };
};
