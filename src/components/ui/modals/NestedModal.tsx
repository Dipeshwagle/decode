import { useState, useEffect, FC } from "react";
import { Dialog } from "@headlessui/react";
import { useModalLevel } from "hooks/useModal";
import { ExclamationIcon,XIcon } from '@heroicons/react/outline'

interface NestedProps {
  onClose: () => void;
  level?: number;
  children: JSX.Element;
}

export const NestedModal: FC<NestedProps> = ({ onClose, children }) => {

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
          <Dialog.Panel className="w-full max-w-4xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
              <button
                type="button"
                className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <XIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            {children}
          </Dialog.Panel>
        </div>
      
      </Dialog>
    </>
  );
};

export default NestedModal;
