import React, { useState } from "react";
import { Fundraising } from "model/Fundrasing";
import WithExpandIcon from "components/ui/table/cell/WithExpandIcon";
import Title from "components/modalContent/Titlee";
import Investors from "components/modalContent/InvestorsList";

const Details = ({ data }: { data: Fundraising }) => {
  const [isOpen, setIsOpen] = useState(false);

  const keys = Object.keys(data) as (keyof Fundraising)[];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex-shrink-0 w-10 h-10">
          <img
            className="w-10 h-10 rounded-full"
            src={data.Logo[0]?.url}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl text-bold">Company</span>
          <span>{data["Company Name (from Project)"]}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl text-bold">Date</span>
          <span>{data.Date.toString()}</span>
        </div>
      </div>
      <div className="flex flex-col text-2xl">
        <WithExpandIcon
          label={"Investors"}
          children={
            <div className="flex flex-col gap-2 text-2xl">
              <Investors investors={data.Investors} />
            </div>
          }
        ></WithExpandIcon>
      </div>
    </div>
  );
};

export default Details;
