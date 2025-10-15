export interface UseForm<T> {
  formData: T;
  handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
  resetForm(): void;
};
