'use client'

import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { forwardRef, useImperativeHandle, useMemo, useState } from 'react'
import useSWR, { mutate } from 'swr'

import CommonPagination from './common-pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export type DataTableRequest<TData> = (args: { pageNumber: number; pageSize: number }) => Promise<{ total: number; records: TData[] }>

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    request: DataTableRequest<TData>
    defaultPageSize?: number
}

export interface DataTableRef {
    refresh: () => void
}

export const DataTable = forwardRef<DataTableRef, DataTableProps<any, any>>(({ columns, request, defaultPageSize = 10 }, ref) => {
    const [PageNumber, setPageNumber] = useState(1)
    const [pageSize, setPageSize] = useState(defaultPageSize)

    const swrKey = useMemo(() => ['datatable', request, PageNumber, pageSize], [request, PageNumber, pageSize])
    const { data, isLoading } = useSWR(swrKey, () => request({ pageNumber: PageNumber, pageSize }), {
        keepPreviousData: false,
        revalidateOnFocus: false,
        dedupingInterval: 0,
    })

    useImperativeHandle(ref, () => ({
        refresh: () => {
            mutate(swrKey)
        },
    }))

    const records = data?.records ?? []
    const total = data?.total ?? 0
    const pageCount = Math.max(Math.ceil(total / pageSize), 1)

    const table = useReactTable({
        data: records,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: { pagination: { pageIndex: PageNumber - 1, pageSize } },
        onPaginationChange: (updater) => {
            const current = { pageIndex: PageNumber - 1, pageSize }
            const next = typeof updater === 'function' ? updater(current) : updater
            if (next.pageIndex !== current.pageIndex) setPageNumber(next.pageIndex + 1)
            if (next.pageSize !== current.pageSize) {
                setPageSize(next.pageSize)
                setPageNumber(1)
            }
        },
        pageCount,
        manualPagination: true,
    })

    return (
        <div className="overflow-hidden rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return <TableHead key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                加载中...
                            </TableCell>
                        </TableRow>
                    ) : records.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                暂无数据
                            </TableCell>
                        </TableRow>
                    ) : (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                ))}
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
            <CommonPagination currentPage={PageNumber} total={total} pageSize={pageSize} onPageChange={setPageNumber} onPageSizeChange={setPageSize} showPageSizeSelector={true} />
        </div>
    )
})

DataTable.displayName = 'DataTable'