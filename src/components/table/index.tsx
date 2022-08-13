import React from "react";
import classNames from "classnames";
import { Fundraising } from "model/Fundrasing";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import WithExpandIcon from "components/table/cell/WithExpandIcon";
import Details from "components/modals/Details";

const Table = ({ data }: { data: Fundraising[] }) => {
  const columnHelper = createColumnHelper<Fundraising>();

  const columns = [
    columnHelper.accessor("Logo", {
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
      header: () => <span>Last Name</span>,
    }),
    columnHelper.accessor("Fundraising Round", {
      cell: (info) => (
        <WithExpandIcon label={info.getValue()} />
      ),
    }),
    columnHelper.accessor("Date", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Amount", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Investors", {
      cell: (info) => info.getValue()?.slice(0, 1),
    }),
    columnHelper.accessor("Website", {
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("Founder", {
      cell: (info) => info.getValue()?.slice(0, 1),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col mx-10 my-10">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full overflow-x-auto divide-y divide-gray-300">
              <thead className="bg-gray-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 "
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
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        key={cell.id}
                        className={classNames("py-2", index === 0 && "pl-6")}
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
