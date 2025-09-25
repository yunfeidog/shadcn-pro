'use client'

import { ColumnDef } from '@tanstack/react-table'
import { DataTable } from '@/registry/yunfei/blocks/data-table'
import { Button } from '@/components/ui/button'
import { useRef } from 'react'
import type { DataTableRef } from '@/registry/yunfei/blocks/data-table'

// Mock data type
interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
  createdAt: string
}

// Mock data generator
const generateMockUsers = (count: number, offset: number = 0): User[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: offset + i + 1,
    name: `用户 ${offset + i + 1}`,
    email: `user${offset + i + 1}@example.com`,
    role: ['管理员', '编辑者', '查看者'][Math.floor(Math.random() * 3)],
    status: Math.random() > 0.3 ? 'active' : 'inactive' as const,
    createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString('zh-CN')
  }))
}

// Define columns
const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>
  },
  {
    accessorKey: 'name',
    header: '姓名',
    cell: ({ row }) => <div className="font-medium">{row.getValue('name')}</div>
  },
  {
    accessorKey: 'email',
    header: '邮箱',
    cell: ({ row }) => <div className="text-muted-foreground">{row.getValue('email')}</div>
  },
  {
    accessorKey: 'role',
    header: '角色',
    cell: ({ row }) => (
      <div className="flex w-[100px]">
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          {row.getValue('role')}
        </span>
      </div>
    )
  },
  {
    accessorKey: 'status',
    header: '状态',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      return (
        <div className="flex w-[100px]">
          <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
            status === 'active'
              ? 'bg-green-50 text-green-700 ring-green-600/20'
              : 'bg-red-50 text-red-700 ring-red-600/20'
          }`}>
            {status === 'active' ? '活跃' : '非活跃'}
          </span>
        </div>
      )
    }
  },
  {
    accessorKey: 'createdAt',
    header: '创建时间',
    cell: ({ row }) => <div className="text-muted-foreground">{row.getValue('createdAt')}</div>
  },
  {
    id: 'actions',
    header: '操作',
    cell: ({ row }) => {
      const user = row.original
      return (
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => alert(`编辑用户: ${user.name}`)}
          >
            编辑
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => alert(`删除用户: ${user.name}`)}
          >
            删除
          </Button>
        </div>
      )
    }
  }
]

// Mock request function
const fetchUsers = async ({ pageNumber, pageSize }: { pageNumber: number; pageSize: number }) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))

  const total = 247 // Mock total count
  const offset = (pageNumber - 1) * pageSize
  const records = generateMockUsers(Math.min(pageSize, total - offset), offset)

  return {
    total,
    records: records.slice(0, Math.min(pageSize, total - offset))
  }
}

export default function DataTableTestPage() {
  const tableRef = useRef<DataTableRef>(null)

  const handleRefresh = () => {
    tableRef.current?.refresh()
  }

  return (
    <div className="container mx-auto py-10">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">用户管理</h1>
            <p className="text-muted-foreground mt-2">
              这是一个使用 DataTable 组件的演示页面，展示了分页、搜索和操作功能。
            </p>
          </div>
          <Button onClick={handleRefresh}>
            刷新数据
          </Button>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border bg-card">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">数据表格演示</h2>
              <DataTable
                ref={tableRef}
                columns={columns}
                request={fetchUsers}
                defaultPageSize={10}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">功能特性</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 服务端分页支持</li>
                <li>• SWR 数据获取和缓存</li>
                <li>• 加载状态和空数据处理</li>
                <li>• 自定义列定义</li>
                <li>• 可调整页面大小</li>
                <li>• 手动刷新功能</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">使用方法</h3>
              <div className="text-sm text-muted-foreground">
                <pre className="bg-muted p-3 rounded-md overflow-x-auto text-xs">
{`import { DataTable } from '@/registry/yunfei/blocks/data-table'

<DataTable
  columns={columns}
  request={fetchData}
  defaultPageSize={10}
/>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}