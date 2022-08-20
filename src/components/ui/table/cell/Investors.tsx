import React from "react";
import useMultiple from "api/hooks/useMultiple";

const Investors = ({ investors = [] }: { investors: string[] }) => {
  const { data } = useMultiple("Investors", investors);
  return (
    <>
      {data?.map((result,index) => {
        return <span key={index}>{result.get("Investor") as string}</span>;
      })}
    </>
  );
};

export default Investors;
