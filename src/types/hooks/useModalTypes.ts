export interface UseModal {
  modalIsOpen: boolean;
  openModal(): void;
  closeModal(): void;
  modalOpenCounter: number;
  incrementModalOpenCounter(): void;
};
