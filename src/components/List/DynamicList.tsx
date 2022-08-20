import React, { FC } from "react";
import useMultiple from "api/hooks/useMultiple";
import WithExpandIcon from "components/ui/table/cell/WithExpandIcon";

type ComponentType<P = {}> =
  | React.ComponentClass<P, any>
  | React.FunctionComponent<P>;

interface DynamicListProps {
  baseName: string;
  ids: string[];
  tilteKey: string;
  otherKeys?: string[];
  rightImageKey?: string;
  expandComponent: React.ComponentType<any>;
  label?: string;
}

const EmptyComp = () => <div />;

const DynamicList: FC<DynamicListProps> = (props) => {
  const { baseName, ids, tilteKey, expandComponent, label } = props;
  const { data, isLoading } = useMultiple(baseName, ids);

  if (isLoading) return <div>loading</div>;
  const Comp = expandComponent;
  return (
    <div>
      <div className="text-2xl">{label || baseName}</div>
      {data?.map((item) => {
        const title = tilteKey && (item.get(tilteKey) as string);

        console.log({ tilteKey });

        return (
          <div className="flex">
            <WithExpandIcon label={title || "No title key"}>
              <Comp baseName={baseName} id={item.getId()} />
            </WithExpandIcon>
            <div className="flex "></div>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicList;
