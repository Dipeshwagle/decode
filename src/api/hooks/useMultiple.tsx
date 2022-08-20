import React from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { base } from "utils/airtable";

const useMultipleRecords = (baseName: string, ids: string[]) => {
  return useQuery([baseName, ids], () =>
    base(baseName)
      .select({
        filterByFormula:
          "OR(" +
          ids
            .map((id) => {
              return `RECORD_ID()='${id}'`;
            })
            .join(",") +
          ")",
      })
      .all()
  );
};

export default useMultipleRecords;
