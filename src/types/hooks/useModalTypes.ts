export interface UseModal {
  modalIsOpen: boolean;
  openModal(): void;
  closeModal(): void;
};

/* Modal CSS styles. */
export const modalStyles: object = {
  overlay: {
    backgroundColor: "rgba(0 0 0 / 0.5)",
  },
  content: {
    width: "fit-content",
    padding: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: "1rem",
    border: "none",
  },
};

/* Time to close modal when its opened. */
export const TIMEOUT_TO_CLOSE_MODAL: number = 2500;
