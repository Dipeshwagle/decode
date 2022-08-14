import { useQuery } from "@tanstack/react-query";
import { base } from "utils/airtable";

const useInvestorDetail = (investorId: string) => {
  return useQuery(["INVESTOR", investorId], () =>
    base("Investors")
      .select({
        filterByFormula:
          "OR(" +
          [investorId]
            .map((id) => {
              return `RECORD_ID()='${id}'`;
            })
            .join(",") +
          ")",
      })
      .all()
  );
};

export default useInvestorDetail;
