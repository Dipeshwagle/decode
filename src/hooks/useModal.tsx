import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext({
  modalLevel: 0,
  increaseLevel: () => {},
  decreaseLevel: () => {},
});

const useModalProvider = () => {
  const [modalLevel, setModalLevel] = useState(0);

  const increaseLevel = () => {
    setModalLevel(modalLevel + 1);
  };

  const decreaseLevel = () => {
    setModalLevel(modalLevel - 1);
  };

  return { modalLevel, increaseLevel,decreaseLevel };
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useModalProvider();
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModalLevel = () => {
  return useContext(ModalContext);
};
