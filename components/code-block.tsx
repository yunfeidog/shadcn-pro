"use client";

import {cn} from "@/lib/utils";
import {Check, Copy} from "lucide-react";
import {useState} from "react";
import {Highlight, themes} from "prism-react-renderer";


interface CodeBlockProps {
    children: string;
    language?: string;
    className?: string;
}

export function CodeBlock({
                              children,
                              language = "javascript",
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
        <div className={cn("relative rounded-lg border bg-background shadow-sm", className)}>
            {/* 顶部栏 */}
            <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground font-medium">{language}</span>
                </div>
                <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-1.5 px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors rounded hover:bg-muted/50"
                >
                    {copied ? (
                        <>
                            <Check className="w-4 h-4"/>
                            已复制
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4"/>
                            复制
                        </>
                    )}
                </button>
            </div>

            {/* 代码高亮 */}
            <Highlight code={children.trim()} language={language} theme={themes.github}>
                {({className: preClass, style, tokens, getLineProps, getTokenProps}) => (
                    <pre className={`${preClass} p-4 text-sm font-mono leading-relaxed overflow-x-auto`} style={style}>
            {tokens.map((line, i) => (
                <div key={i} {...getLineProps({line})}>
                    {line.map((token, key) => (
                        <span key={key} {...getTokenProps({token})} />
                    ))}
                </div>
            ))}
          </pre>
                )}
            </Highlight>
        </div>
    );
}
