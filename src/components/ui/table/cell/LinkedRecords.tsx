import React from "react";
import useMultiple from "api/hooks/useMultiple";
import mapping from "mappings";
import classNames from "classnames";

const LinkedRecords = ({
  baseName,
  ids = [],
  className,
}: {
  baseName: string;
  ids: string[];
  className?: string;
}) => {
  const { data } = useMultiple(baseName, ids);
  return (
    <div className={classNames("text-red-200 ", className)}>
      {data?.map((result, index) => {
        const titleKey =
          mapping[baseName].titleKey || Object.keys(result.fields)[0];

        return <span key={index}>{result.get(titleKey) as string} </span>;
      })}
    </div>
  );
};

export default LinkedRecords;
