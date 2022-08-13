import React, { useState } from "react";
import { FC } from "react";
import { ArrowsExpandIcon } from "@heroicons/react/outline";
interface WithExpandIcon {
  label: string;
}

import NestedModal from "components/modals/NestedModal";

const WithExpandIcon: FC<WithExpandIcon> = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-2 cursor-pointer group">
      <span className="group-hover:text-blue-400"> {label}</span>
      <ArrowsExpandIcon
        className="w-4 h-4 text-blue-400 transition-opacity opacity-0 group-hover:opacity-100 "
        onClick={() => setIsOpen(true)}
      />
      {isOpen && <NestedModal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default WithExpandIcon;
