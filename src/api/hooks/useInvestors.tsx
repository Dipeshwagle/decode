import React from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { base } from "utils/airtable";

const useInvestors = (investors: string[]) => {
  return useQuery(["INVESTOR", investors], () =>
    base("Investors").select({
      filterByFormula:
        "OR(" +
        investors
          .map((id) => {
            return `RECORD_ID()='${id}'`;
          })
          .join(",") +
        ")",
    }).all()
  );
};

export default useInvestors;
