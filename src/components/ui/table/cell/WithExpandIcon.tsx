import React, { useState } from "react";
import { FC } from "react";
import { ArrowsExpandIcon } from "@heroicons/react/outline";
interface WithExpandIcon {
  label?: string;
  labelComponent?: JSX.Element;
  children: JSX.Element;
}

import NestedModal from "components/ui/modals/NestedModal";

const WithExpandIcon: FC<WithExpandIcon> = ({ label, children,labelComponent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-2 cursor-pointer group">
      <span className="text-blue-500 group-hover:text-blue-400">
        {" "}
        {labelComponent || label}
      </span>
      <ArrowsExpandIcon
        className="w-4 h-4 text-blue-400 transition-opacity opacity-0  top-1/2 right-5 group-hover:opacity-100"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <NestedModal onClose={() => setIsOpen(false)}>{children}</NestedModal>
      )}
    </div>
  );
};

export default WithExpandIcon;
