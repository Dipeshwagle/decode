import React from "react";
import useSingle from "api/hooks/useSingle";
import DynamicList from "components/List/DynamicList";
import ExpandGeneric from "components/Expand/Generic";

const Investor = ({ baseName, id }: { baseName: string; id: string }) => {

  const { data } = useSingle(baseName, id);
  const record = data && data[0];
  console.log({baseName, id,data})

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
          <div>
            <DynamicList
              baseName="Crypto Companies"
              tilteKey="Company"
              ids={record.get("Portfolio Companies") as string[]}
              expandComponent={ExpandGeneric}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Investor;
