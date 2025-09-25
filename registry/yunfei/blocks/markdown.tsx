
import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { cn } from '@/lib/utils'

interface MarkdownProps {
  content: string
  className?: string
  type?: 'markdown' | 'mdx'
  components?: Record<string, React.ComponentType<any>>
}

// Default components for MDX
const defaultComponents = {
  h1: ({ children, ...props }: any) => (
    <h1 className="text-4xl font-bold mb-4 text-gray-900" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 className="text-3xl font-semibold mb-3 text-gray-900" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 className="text-2xl font-semibold mb-2 text-gray-900" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4 className="text-xl font-semibold mb-2 text-gray-900" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: any) => (
    <h5 className="text-lg font-semibold mb-1 text-gray-900" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: any) => (
    <h6 className="text-base font-semibold mb-1 text-gray-900" {...props}>
      {children}
    </h6>
  ),
  p: ({ children, ...props }: any) => (
    <p className="mb-4 text-gray-700 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="text-gray-700" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-600 bg-gray-50 py-2"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: any) => (
    <code
      className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-red-600"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: any) => (
    <pre
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),
  a: ({ children, href, ...props }: any) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
  img: ({ src, alt, ...props }: any) => (
    <img
      src={src}
      alt={alt}
      className="max-w-full h-auto rounded-lg shadow-sm my-4"
      {...props}
    />
  ),
  table: ({ children, ...props }: any) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border-collapse border border-gray-300" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: any) => (
    <th className="border border-gray-300 bg-gray-50 px-4 py-2 text-left font-semibold" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td className="border border-gray-300 px-4 py-2" {...props}>
      {children}
    </td>
  ),
  hr: (props: any) => (
    <hr className="my-8 border-t border-gray-300" {...props} />
  ),
}

export const Markdown = ({
  content,
  className,
  type = 'mdx',
  components = {}
}: MarkdownProps) => {
  const mergedComponents = { ...defaultComponents, ...components }

  if (type === 'mdx') {
    return (
      <div className={cn('prose prose-gray max-w-none', className)}>
        <MDXRemote source={content} components={mergedComponents} />
      </div>
    )
  }

  // For plain markdown, we'll still use MDXRemote as it can handle markdown
  return (
    <div className={cn('prose prose-gray max-w-none', className)}>
      <MDXRemote source={content} components={mergedComponents} />
    </div>
  )
}