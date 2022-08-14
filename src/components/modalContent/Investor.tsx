import React from "react";
import useInvestorDetail from "api/hooks/useInvestorDetail";

const Investor = ({ investorId }: { investorId: string }) => {
  const { data } = useInvestorDetail(investorId);
  const record = data && data[0];
  return (
    <div>
      {record && (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="text-2xl ">Investor</span>
            <span>{record.get("Investor") as string}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl ">Type</span>
            <span>{record.get("Type") as string}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl ">Actively Investing</span>
            <span>{record.get("Actively Investing") as string}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl ">Year Founded</span>
            <span>{record.get("Year Founded") as string}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Investor;
