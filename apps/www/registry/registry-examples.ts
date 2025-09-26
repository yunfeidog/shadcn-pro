import { type Registry } from "shadcn/schema"

export const examples: Registry["items"] = [
  {
    name: "code-block-demo",
    description: "An example of the code-block",
    type: "registry:example",
    registryDependencies: ["@shadcn-pro/components/code-block"],
    dependencies: ["prism-react-renderer", "lucide-react"],
    files: [
      {
        path: "example/code-block-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "use-ai-hook-demo",
    description: "An hook for integrating AI capabilities into your app",
    type: "registry:example",
    registryDependencies: ["@shadcn-pro/hook/use-ai"],
    dependencies: ["microsoft/fetch-event-source"],
    files: [
      {
        path: "example/use-ai-hook-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "zoomable-image-demo",
    type: "registry:example",
    title: "Zoomable Image Demo",
    description: "Example showing an image that can be zoomed in and out.",
    registryDependencies: ["@magicui/zoomable-image"],
    files: [
      {
        path: "example/zoomable-image-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "modal-demo",
    type: "registry:example",
    title: "Modal Demo",
    description: "Example showing a modal.",
    registryDependencies: ["@shadcn-pro/components/modal"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "example/modal-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "pro-table-demo",
    type: "registry:example",
    title: "ProTable Demo",
    description: "Example showing a pro table.",
    registryDependencies: ["@shadcn-pro/components/pro-table"],
    dependencies: ["@tanstack/react-table"],
    files: [
      {
        path: "example/pro-table-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
