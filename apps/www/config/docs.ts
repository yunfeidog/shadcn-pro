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
      title: "components",
      items: [
        {
          title: "Code Block",
          href: `/docs/components/code-block`,
          items: [],
        },
        {
          title: "Zoomable Image",
          href: `/docs/components/zoomable-image`,
          items: [],
        },
        {
          title: "Modal",
          href: `/docs/components/modal`,
          items: [],
        },
        {
          title: "ProTable",
          href: `/docs/components/pro-table`,
          items: [],
        },
      ],
    },
    {
      title: "hooks",
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
