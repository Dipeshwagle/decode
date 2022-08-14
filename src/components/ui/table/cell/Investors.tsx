import React from "react";
import useInvestors from "api/hooks/useInvestors";

const Investors = ({ investors = [] }: { investors: string[] }) => {
  const { data } = useInvestors(investors);
  return (
    <>
      {data?.map((result) => {
        return <span>{result.get("Investor") as string}</span>;
      })}
    </>
  );
};

export default Investors;
