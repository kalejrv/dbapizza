export interface UseForm<T> {
  data: T;
  handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
  resetForm(): void;
};
