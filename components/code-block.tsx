"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  children: string;
  language?: string;
  className?: string;
}

export function CodeBlock({
  children,
  language = "text",
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  return (
    <div
      className={cn(
        "relative rounded-lg border bg-background shadow-sm",
        className
      )}
    >
      {/* macOS风格顶部栏 */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
        <div className="flex items-center gap-2">
          {/* macOS红黄绿按钮 */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {/* 语言标识 */}
          <span className="ml-2 text-sm text-muted-foreground font-medium">
            {language}
          </span>
        </div>

        {/* 复制按钮 */}
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors rounded hover:bg-muted/50"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              已复制
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              复制
            </>
          )}
        </button>
      </div>

      {/* 代码内容区域 */}
      <div className="p-4">
        <pre className="text-sm font-mono leading-relaxed text-foreground whitespace-pre-wrap break-words">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}
