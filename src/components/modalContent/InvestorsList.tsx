import React from "react";
import useInvestors from "api/hooks/useInvestors";
import WithExpandIcon from "components/ui/table/cell/WithExpandIcon";
import Investor from "components/modalContent/Investor";

const Investors = ({ investors = [] }: { investors: string[] }) => {
  const { data } = useInvestors(investors);
  return (
    <>
      {data?.map((result) => {
        return (
          <WithExpandIcon
            label={result.get("Investor") as string}
            children={<Investor investorId={result.id} />}
          />
        );
      })}
    </>
  );
};

export default Investors;
