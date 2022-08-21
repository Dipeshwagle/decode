import React from "react";
import classNames from "classnames";
import { Fundraising } from "model/Fundrasing";
import DynamicList from "components/List/DynamicList";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import WithExpandIcon from "components/ui/table/cell/WithExpandIcon";
import LinkedRecord from "components/ui/table/cell/LinkedRecords";
import Investors from "components/ui/table/cell/Investors";
import Generic from "components/Expand/Generic";

const Table = ({ data = [] }: { data?: Fundraising[] }) => {
  const columnHelper = createColumnHelper<Fundraising>();

  const columns = [
    columnHelper.accessor("Logo (from Project)", {
      header: "Logo",
      cell: (info) => {
        return (
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-10 h-10 rounded-full"
              src={info.getValue()[0]?.url}
              alt=""
            />
          </div>
        );
      },
    }),

    columnHelper.accessor("Company Name (from Project)", {
      cell: (info) => {
        const rowValue = info.row.original;

        return (
          <WithExpandIcon
            label={info.getValue().toString()}
            children={
              <Generic
                baseName="Fundraising Rounds - Companies"
                id={rowValue.id}
              />
            }
          />
        );
      },
      header: "Company Name",
    }),
    columnHelper.accessor("Stages", {
      cell: (info) => {
        return (
          <WithExpandIcon
            labelComponent={
              <LinkedRecord
                baseName="Fundraising Rounds - Stages"
                ids={info.getValue()}
              />
            }
            children={
              <DynamicList
                ids={info.getValue()}
                baseName={"Fundraising Rounds - Companies"}
                itemKey={"Stages"}
              />
            }
          />
        );
      },
      header: "Stage",
    }),
    columnHelper.accessor("Date", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Amount", {
      cell: (info) => (
        <WithExpandIcon
          label={info.getValue()?.toString()}
          children={<div />}
        />
      ),
    }),
    columnHelper.accessor("Investors", {
      cell: (info) => (
        <WithExpandIcon
          labelComponent={
            <LinkedRecord
              className="max-w-[200px] max-h-10 overflow-x-auto overflow-y-hidden flex gap-2 flex-nowrap"
              baseName="Investors"
              ids={info.getValue()}
            />
          }
          children={
            <DynamicList
              ids={info.getValue()}
              baseName={"Fundraising Rounds - Companies"}
              itemKey={"Investors"}
            />
          }
        />
      ),
    }),
    columnHelper.accessor("Website", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Founder", {
      cell: (info) => (
        <WithExpandIcon
          labelComponent={
            <LinkedRecord
            className="max-w-[200px] max-h-10 overflow-x-auto overflow-y-hidden flex gap-2 flex-nowrap"
              baseName="Crypto Companies - Founders"
              ids={info.getValue()}
            />
          }
          children={
            <DynamicList
              ids={info.getValue()}
              baseName={"Fundraising Rounds - Companies"}
              itemKey={"Founder"}
            />
          }
        />
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const total = table.getRowModel().rows.length;

  return (
    <div className="flex flex-col py-10 mx-10" id="table">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 ">
            <table className="min-w-full pb-10 overflow-x-auto divide-y divide-gray-300 ">
              <thead className="border border-white">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white uppercase"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={classNames(
                      "mt-2",
                      index !== total - 1 && " border-b border-white"
                    )}
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        key={cell.id}
                        className={classNames(
                          "py-3 text-white px-4",
                          index === 0 ? "pl-6" : "border-r border-white"
                        )}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
