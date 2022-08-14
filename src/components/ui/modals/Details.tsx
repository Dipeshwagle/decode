import React, { useState } from "react";
import { useModalLevel } from "hooks/useModal";
import Modal from "components/ui/modal";

const Details = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { modalLevel, increaseLevel, decreaseLevel } = useModalLevel();

  const handleModalClose = () => {
    setIsOpen(false);
    decreaseLevel();
  };

  return (
    <Modal
      increaseLevel={increaseLevel}
      onClose={handleModalClose}
      isOpen={true}
      level={modalLevel}
    >
      <div className="flex flex-col">
        <div>Modal Level: {modalLevel}</div>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open Another Modal
        </button>
        <button onClick={handleModalClose}>Close </button>
        {isOpen && <Details />}
      </div>
    </Modal>
  );
};

export default Details;
