import { useState } from "react";
import Modal from "react-modal";
import { UseModal } from "../types";

Modal.setAppElement("#root");

export const useModal = (): UseModal => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false); 
  
  const openModal = (): void => setModalIsOpen(true);
  const closeModal = (): void => setModalIsOpen(false);
  
  return {
    modalIsOpen,
    openModal,
    closeModal,
  };
};
