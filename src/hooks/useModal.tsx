import { useState } from "react";
import Modal from "react-modal";
import { UseModal } from "../types";

Modal.setAppElement("#root");

export const useModal = (): UseModal => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false); 
  const [modalOpenCounter, setModalOpenCounter] = useState<number>(0);

  const openModal = (): void => setModalIsOpen(true);
  const closeModal = (): void => setModalIsOpen(false);
  const incrementModalOpenCounter = (): void => setModalOpenCounter((prev): number => prev + 1);
  
  return {
    modalIsOpen,
    openModal,
    closeModal,
    modalOpenCounter,
    incrementModalOpenCounter,
  };
};
