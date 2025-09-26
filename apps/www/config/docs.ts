import { NavItem, NavItemWithChildren } from "@/types"

interface DocsConfig {
  mainNav: NavItem[]
  sidebarNav: NavItemWithChildren[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "MCP",
          href: "/docs/mcp",
          items: [],
          label: "",
        },
        {
          title: "Components",
          href: "/docs/components",
          items: [],
        },
      ],
    },
    {
      title: "component",
      items: [
        {
          title: "Code Block",
          href: `/docs/component/code-block`,
          items: [],
        },
        {
          title: "Zoomable Image",
          href: `/docs/component/zoomable-image`,
          items: [],
        },
        {
          title: "Modal",
          href: `/docs/component/modal`,
          items: [],
        },
        {
          title: "ProTable",
          href: `/docs/component/pro-table`,
          items: [],
        },
      ],
    },
    {
      title: "Hooks",
      items: [
        {
          title: "use ai",
          href: `/docs/hooks/use-ai`,
          items: [],
          label: "New",
        },
      ],
    },
  ],
}
