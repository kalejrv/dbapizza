import { useState } from "react";
import { UseForm } from "../types";

export const useForm = <T>(initialValue: T): UseForm<T> => {
  const [formData, setFormData] = useState<typeof initialValue>(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = (): void => {
    setFormData(initialValue);
  };
  
  return {
    formData,
    handleInputChange,
    resetForm,
  };
};
