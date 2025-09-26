import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "code-block",
    type: "registry:ui",
    title: "code block",
    description: "A component for code block with syntax highlighting.",
    dependencies: ["prism-react-renderer", "lucide-react"],
    files: [
      {
        path: "shadcn-pro/components/code-block.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "use-ai",
    type: "registry:ui",
    title: "use ai",
    description: "A hook for ai",
    dependencies: ["microsoft/fetch-event-source"],
    files: [
      {
        path: "shadcn-pro/hooks/use-ai.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "zoomable-image",
    type: "registry:ui",
    title: "zoomable image",
    description: "A component for zoomable image.",
    dependencies: ["react-medium-image-zoom"],
    files: [
      {
        path: "shadcn-pro/components/zoomable-image.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "modal",
    type: "registry:ui",
    title: "modal",
    description: "A component for modal.",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "shadcn-pro/components/modal.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "pro-table",
    type: "registry:ui",
    title: "pro-table",
    description: "A component for pro-table.",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "shadcn-pro/components/pro-table.tsx",
        type: "registry:ui",
      },
    ],
  },
]
