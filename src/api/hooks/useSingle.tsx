import React from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { base } from "utils/airtable";

const useMultipleRecords = (baseName: string, id: string) => {
  return useQuery([baseName, id], () =>
    base(baseName)
      .select({
        filterByFormula:
          "OR(" +
          [id]
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
