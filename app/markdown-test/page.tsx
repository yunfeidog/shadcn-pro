import { Markdown } from '@/registry/yunfei/blocks/markdown'
import { promises as fs } from 'fs'
import path from 'path'

const markdownContent = `# Markdown Component Demo

This is a **comprehensive demo** of the Markdown component that supports both *markdown* and **MDX** content.

## Features

- ✅ Standard markdown elements
- ✅ MDX support with React components
- ✅ Customizable styling with Tailwind CSS
- ✅ Syntax highlighting for code blocks
- ✅ Tables, lists, and more

### Typography Examples

Here's a paragraph with some \`inline code\` and [a link](https://example.com) to demonstrate basic formatting.

> This is a blockquote that demonstrates how quoted text appears.
> It can span multiple lines and looks great!

### Code Blocks

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome to the Markdown component demo!\`;
}

greet('World');
\`\`\`

\`\`\`bash
# Install the component
npx shadcn@latest add https://your-registry.com/r/markdown.json
\`\`\`

### Lists

**Unordered List:**
- First item
- Second item with **bold text**
- Third item with *italic text*
- Fourth item with \`inline code\`

**Ordered List:**
1. Step one: Setup your project
2. Step two: Install dependencies
3. Step three: Import the component
4. Step four: Use it in your JSX

### Tables

| Feature | Supported | Notes |
|---------|-----------|-------|
| Basic Markdown | ✅ | Full support |
| MDX Components | ✅ | React components work |
| Syntax Highlighting | ✅ | Via Prism |
| Custom Styling | ✅ | Tailwind classes |
| Tables | ✅ | Responsive design |

### Images

![Demo Image](https://picsum.photos/600/300)

### Horizontal Rule

---

### More Examples

This component handles various markdown elements seamlessly:

- **Bold text**
- *Italic text*
- ~~Strikethrough text~~ (if supported)
- \`inline code snippets\`
- [External links](https://github.com)

The component is built with TypeScript and uses \`next-mdx-remote/rsc\` for rendering MDX content with React Server Components.`

async function getMdxContent() {
  const filePath = path.join(process.cwd(), 'content', 'demo.mdx')
  const fileContent = await fs.readFile(filePath, 'utf8')
  return fileContent
}

export default async function MarkdownTestPage() {
  const mdxContent = await getMdxContent()

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <div className=" p-6 bg-white">
        <Markdown
            content={markdownContent}
            type="markdown"
            className="max-w-none"
        />
      </div>


      <section className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-gray-700 mb-4">Usage Examples</h3>

        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Reading from File:</h4>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto">
{`// Server Component
import { promises as fs } from 'fs'
import path from 'path'

async function getMdxContent() {
  const filePath = path.join(process.cwd(), 'content', 'demo.mdx')
  return await fs.readFile(filePath, 'utf8')
}

export default async function Page() {
  const content = await getMdxContent()
  return <Markdown content={content} type="mdx" />
}`}
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Basic Usage:</h4>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto">
{`import { Markdown } from '@/registry/yunfei/blocks/markdown'

<Markdown content={markdownString} />
<Markdown content={mdxString} type="mdx" />`}
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">With Custom Components:</h4>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded overflow-x-auto">
{`<Markdown
  content={mdxContent}
  type="mdx"
  components={{
    Button: MyCustomButton,
    Alert: MyCustomAlert
  }}
/>`}
            </pre>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Full markdown syntax support</li>
              <li>MDX support with React components</li>
              <li>Read from external MDX files</li>
              <li>Customizable component mapping</li>
              <li>Tailwind CSS styling</li>
              <li>TypeScript support</li>
              <li>Server-side rendering compatible</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}