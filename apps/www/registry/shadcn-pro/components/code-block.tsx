"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Highlight, themes } from "prism-react-renderer"

import { cn } from "@/lib/utils"

interface CodeBlockProps {
  children: string
  language?: string
  className?: string
}

export function CodeBlock({
  children,
  language = "javascript",
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("复制失败:", err)
    }
  }

  return (
    <div
      className={cn(
        "bg-background relative rounded-lg border shadow-sm",
        className
      )}
    >
      {/* 顶部栏 */}
      <div className="bg-muted/30 flex items-center justify-between border-b px-4 py-1">
        <div className="flex items-center gap-1">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-muted-foreground ml-2 text-sm font-medium">
            {language}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-1.5 rounded px-2 py-1 text-sm transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              已复制
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              复制
            </>
          )}
        </button>
      </div>

      {/* 代码高亮 */}
      <Highlight
        code={children.trim()}
        language={language}
        theme={themes.github}
      >
        {({
          className: preClass,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre
            className={`${preClass} overflow-x-auto p-4 font-mono text-sm leading-relaxed`}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
