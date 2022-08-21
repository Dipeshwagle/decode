import React, { FC } from "react";
import useMultiple from "api/hooks/useMultiple";
import WithExpandIcon from "components/ui/table/cell/WithExpandIcon";
import mappings from "mappings";
import Generic from "components/Expand/Generic";

type ComponentType<P = {}> =
  | React.ComponentClass<P, any>
  | React.FunctionComponent<P>;

interface DynamicListProps {
  baseName: string;
  ids: string[];
  itemKey: string;
  rightImageKey?: string;
  expandComponent?: React.ComponentType<any>;
  label?: string;
}

const EmptyComp = () => <div />;

const DynamicList: FC<DynamicListProps> = (props) => {
  const { baseName, ids, itemKey, expandComponent, label } = props;

  const baseNameDynamic = mappings[baseName]?.fields[itemKey] || itemKey;

  if (!baseNameDynamic) return null;

  console.log({ baseNameDynamic });

  const tilteKey = mappings[baseNameDynamic.value]?.titleKey || itemKey;

  const { data, isLoading } = useMultiple(baseNameDynamic.value, ids);


  console.log({baseNameDynamic , data});
  if (isLoading) return <div>loading</div>;

  const Comp = expandComponent || Generic;

  return (
    <div>
      <div className="text-2xl">{itemKey || baseName}</div>
      {data?.map((item) => {
        const title = tilteKey && (item.get(tilteKey) as string);

        return (
          <div className="flex">
            <WithExpandIcon label={title || "No title key"}>
              <Comp baseName={baseNameDynamic.value} id={item.getId()} />
            </WithExpandIcon>
            <div className="flex "></div>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicList;
