import React from 'react';
import { useState } from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getSortedRowModel,
    getFilteredRowModel,
  } from "@tanstack/react-table";

import data from "../MOCK_DATA.json"


export const SimpleTable = () => {

    const columns = [
        {
            header: "Rol",
            accessorKey: 'id'
        },
        {
            header: "DV",
            accessorKey: 'dv'
        },
        {
            header: "Nombre",
            accessorKey: 'first_name'
        },
        {
            header: "Apellido",
            accessorKey: 'last_name'
        },
        {
            header: "Ramo",
            accessorKey: 'ramo'
        },
        {
            header: "Semestre",
            accessorKey: 'semestre'
        },
    ]

    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState("")
    

    const table = useReactTable({
        data,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering,
    })
    
    return (
    <div>
        <div className="input-container">
            <input
                type="text"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
                placeholder="Filtrar información 🔎 "
            />
        </div>
        <table>
            <thead>
                {
                    table.getHeaderGroups().map(headerGroup => (
                        <tr key ={headerGroup.id}>
                            {
                                headerGroup.headers.map(header => (
                                    <th key ={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                    >
                                        { flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    {
                                        {'asc': "🔼" , 'desc' : "🔽"}[header.column.getIsSorted() ?? null]
                                    }
                                    </th>
                                ))
                            }
                        </tr>
                        
                    ))
                }
            </thead>
            <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        </table>

    </div>

  );
}   
  export default SimpleTable
  