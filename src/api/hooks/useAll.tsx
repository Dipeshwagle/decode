import { useQuery } from "@tanstack/react-query";
import { base } from "utils/airtable";

const useGetFundraisingData = ({ offset = 0 }: { offset?: number }) => {
  return useQuery(["FUNDRAISING", offset], () =>
    base("Fundraising Rounds - Companies").select({ maxRecords: 10 }).all()
  );
};

export default useGetFundraisingData;
