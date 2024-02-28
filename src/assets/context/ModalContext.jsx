import { createContext, useState } from "react";

export const ModalContext = createContext({
  isModalOpen: false,
  isAddMealOpen: false,
  closeModal: () => {},
  openModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddMealOpen, setIsAddMealOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const addMealOpenHandler = () => {
    setIsAddMealOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIsAddMealOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        isAddMealOpen,
        addMealOpenHandler,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
