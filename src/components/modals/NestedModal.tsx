import { useState, useEffect, FC } from "react";
import { Dialog } from "@headlessui/react";
import { useModalLevel } from "hooks/useModal";

interface NestedProps {
  onClose: () => void;
  level?: number;
}

export const NestedModal: FC<NestedProps> = ({ onClose, level = 0 }) => {
  let [showChild, setShowChild] = useState(false);

  const { modalLevel, increaseLevel, decreaseLevel } = useModalLevel();
  const [initialLevel] = useState(modalLevel);

  useEffect(() => {
    increaseLevel();
  }, []);

  return (
    <>
      <Dialog open={true} onClose={onClose} className="fixed inset-0 z-10">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-25" />
        <div
          className="flex items-center justify-center min-h-full p-4 text-center"
          style={{
            transform: `translate(calc(5px * ${initialLevel}), calc(5px * ${initialLevel}))`,
          }}
        >
          <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <p>Level: {initialLevel}</p>
            <div className="space-x-4">
              <button
                className="px-2 py-1 bg-gray-200 rounded"
                onClick={() => setShowChild(true)}
              >
                Open Next
              </button>
            </div>
          </Dialog.Panel>
        </div>
        {showChild && (
          <NestedModal
            onClose={() => {
              setShowChild(false);
              decreaseLevel();
            }}
          />
        )}
      </Dialog>
    </>
  );
};

export default NestedModal;
