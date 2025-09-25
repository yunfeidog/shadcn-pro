import { CodeBlock } from "@/registry/yunfei/blocks/code-block";

export default function CodeBlockDemo() {
  const jsCode = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 输出: 55`;

  const pythonCode = `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)`;

  const cssCode = `.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}`;

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">CodeBlock 组件演示</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">JavaScript 代码</h2>
          <CodeBlock language="javascript">{jsCode}</CodeBlock>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Python 代码</h2>
          <CodeBlock language="python">{pythonCode}</CodeBlock>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">CSS 代码</h2>
          <CodeBlock language="css">{cssCode}</CodeBlock>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">纯文本</h2>
          <CodeBlock>
            这是一段纯文本内容 可以是任何类型的文本 支持多行显示
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
