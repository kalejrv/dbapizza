import { useState } from "react";
import { UseForm } from "../types";

export const useForm = <T>(initialValue: T): UseForm<T> => {
  const [data, setData] = useState<typeof initialValue>(initialValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    
    setData({
      ...data,
      [name]: value,
    });
  };

  const resetForm = (): void => {
    setData(initialValue);
  };
  
  return {
    data,
    handleInputChange,
    resetForm,
  };
};
