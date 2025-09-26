import { CodeBlock } from "@/registry/shadcn-pro/components/code-block"

export default function CodeBlockDemo() {
  const pythonCode = `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)`
  return (
    <>
      <div className="space-y-8">
        <CodeBlock language="python">{pythonCode}</CodeBlock>
      </div>
    </>
  )
}
