import { useState } from "react";
import { UseForm } from "../types";

export const useForm = <T>(initialState: T): UseForm<T> => {
  const [formData, setFormData] = useState<typeof initialState>(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = (): void => {
    setFormData(initialState);
  };
  
  return {
    formData,
    handleInputChange,
    resetForm,
  };
};
