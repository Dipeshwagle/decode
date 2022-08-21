import React from "react";
import DynamicList from "components/List/DynamicList";
import useSingle from "api/hooks/useSingle";
import Generic from "components/Expand/Generic";

import mappings from "../../mappings";

const Details = ({ baseName, id }: { baseName: string; id: string }) => {
  const { data } = useSingle(baseName, id);

  const record = data && data[0];

  if (!record) return null;

  return (
    <div className="flex flex-col gap-4">
      {Object.keys(record.fields || {}).map((key) => {
        const value = record.get(key);

        if (!value) return null;

        let finalValue = value as string;

        if (Array.isArray(value)) {
          if (value.length <= 0) return null;
          const baseNameDynamic = mappings[baseName]?.fields[key] || key;

          if (!baseNameDynamic) return null;

          if (baseNameDynamic.type === "link") {
            return (
              <DynamicList
                baseName={baseName}
                itemKey={key}
                ids={value}
                expandComponent={Generic}
              />
            );
          }

          finalValue = value.join(",");
        }

        if (typeof value === "object") {
          const valueNew = value as any[];
          if (valueNew[0]?.url) {
            return (
              <img
                className="w-10 h-10 rounded-full"
                src={valueNew[0]?.url}
                alt=""
              />
            );
          } else {
            finalValue = JSON.stringify(value);
          }
        }

        return (
          <div className="flex flex-col">
            <span className="text-2xl ">{key}</span>
            <span>{finalValue}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
