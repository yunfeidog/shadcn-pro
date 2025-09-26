"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/registry/shadcn-pro/components/pro-table"

interface DemoUser {
  id: number
  name: string
  email: string
  role: string
  status: "active" | "inactive"
}

const generateMockUsers = (count: number, offset: number = 0): DemoUser[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: offset + i + 1,
    name: `User ${offset + i + 1}`,
    email: `user${offset + i + 1}@example.com`,
    role: ["Admin", "Editor", "Viewer"][Math.floor(Math.random() * 3)],
    status: Math.random() > 0.3 ? "active" : ("inactive" as const),
  }))
}

const columns: ColumnDef<DemoUser>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <div className="w-[60px] font-mono text-sm">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="text-muted-foreground text-sm">
        {row.getValue("email")}
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role") as string
      return (
        <Badge variant={role === "Admin" ? "default" : "secondary"}>
          {role}
        </Badge>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Badge variant={status === "active" ? "default" : "destructive"}>
          {status}
        </Badge>
      )
    },
  },
]

// Mock async data fetcher
const fetchUsers = async (params: {
  page: number
  size: number
  search?: string
}): Promise<{ data: DemoUser[]; total: number }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const allUsers = generateMockUsers(100)
  let filteredUsers = allUsers

  // Simple search filter
  if (params.search) {
    filteredUsers = allUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(params.search!.toLowerCase()) ||
        user.email.toLowerCase().includes(params.search!.toLowerCase())
    )
  }

  const startIndex = (params.page - 1) * params.size
  const endIndex = startIndex + params.size
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex)
  console.log("paginatedUsers", paginatedUsers)

  return {
    data: paginatedUsers,
    total: filteredUsers.length,
  }
}

export default function ProTableDemo() {
  const actionColumns: ColumnDef<DemoUser>[] = [
    ...columns.slice(0, 3), // id, name, email
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-1">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button variant="destructive" size="sm">
            Delete
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full max-w-3xl">
      <DataTable
        columns={actionColumns}
        request={fetchUsers}
        defaultPageSize={3}
        className="rounded-lg border"
      />
    </div>
  )
}
