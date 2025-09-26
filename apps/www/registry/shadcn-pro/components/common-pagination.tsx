"use client"

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CommonPaginationProps {
  currentPage: number
  total: number // 总记录数
  pageSize: number // 每页记录数
  onPageChange: (page: number) => void
  onPageSizeChange?: (pageSize: number) => void
  className?: string
  pageSizeOptions?: number[] // 可选的页面大小选项
  showPageSizeSelector?: boolean // 是否显示页面大小选择器
}

export default function CommonPagination({
  currentPage,
  total,
  pageSize,
  onPageChange,
  onPageSizeChange,
  className = "",
  pageSizeOptions = [5, 10, 20, 30, 40, 50],
  showPageSizeSelector = false,
}: CommonPaginationProps) {
  // 计算总页数
  const totalPages = Math.max(Math.ceil(total / pageSize), 1)

  // 如果没有数据，不显示分页
  if (total <= 0) {
    return null
  }

  return (
    <div className={`flex items-center justify-between px-2 py-4 ${className}`}>
      {/* 左侧：每页显示条数选择器 */}
      {showPageSizeSelector && pageSize && onPageSizeChange ? (
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">每页显示</p>
          <Select
            value={pageSize.toString()}
            onValueChange={(value) => onPageSizeChange(Number(value))}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm font-medium">条记录</p>
        </div>
      ) : (
        <div></div>
      )}

      {/* 右侧：分页控制 */}
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium whitespace-nowrap">
          第 {currentPage} 页，共 {totalPages} 页
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            <span className="sr-only">跳转到第一页</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="sr-only">跳转到上一页</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">跳转到下一页</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">跳转到最后一页</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
