"use client";

import { ArrowUpDown } from "lucide-react"
import { ColumnDef } from "@tanstack/react-table"

import { Button } from "@/components/ui/button";

import { Task } from "../types";

export const columns: ColumnDef<Task>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Task Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
    },
];