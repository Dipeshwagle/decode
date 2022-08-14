import { useEffect, useState, FC } from "react";
import { Dialog } from "@headlessui/react";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  level: number;
  increaseLevel: () => void;
  children: JSX.Element;
}

const Modal: FC<ModalProps> = ({
  onClose,
  level = 0,
  increaseLevel,
  isOpen,
  children,
}) => {
  useEffect(() => {
    increaseLevel();
  }, []);

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-25" />
        <div
          className="fixed z-10 p-4 bg-white left-12 top-24 w-96"
          style={{
            transform: `translate(calc(5px * ${level}), calc(5px * ${level}))`,
          }}
        >
          {children}
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
