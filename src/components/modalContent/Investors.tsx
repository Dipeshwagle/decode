import React from "react";
import useInvestors from "api/hooks/useInvestors";

const Investors = ({ investors = [] }: { investors: string[] }) => {
  const { data } = useInvestors(investors);
  return (
    <div className=" max-w-[200px] max-h-10 overflow-x-auto">
      {data?.map((result) => {
        return <span>{result.get("Investor") as string}</span>;
      })}
    </div>
  );
};

export default Investors;
