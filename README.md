# shadcn-pro

🚀 A collection of production-ready, enhanced components built on top of shadcn/ui. shadcn-pro extends the original library with enterprise-level features, prebuilt patterns, and ready-to-use UI solutions — install with a single command.

> [!IMPORTANT]  
> This template uses Tailwind v4. For Tailwind v3, see [registry-template-v3](https://github.com/shadcn-ui/registry-template-v3).

## Getting Started

shadcn-pro is a collection of enhanced components built on top of shadcn/ui, providing enterprise-level features and ready-to-use UI solutions.

- The registry uses a `registry.json` file to define components and their files.
- The `shadcn build` command is used to build the registry.
- Registry items are served as static files under `public/r/[name].json`.
- All registry items are compatible with the `shadcn` CLI.
- Includes v0 integration using the `Open in v0` API.

## Documentation

Visit the [shadcn documentation](https://ui.shadcn.com/docs/registry) to view the full documentation.

### Online Preview

You can preview components online directly in your browser. Our documentation provides live examples of all components, making it easy to see how they work before installing them in your project.

### Installation

Components can be installed in two ways:

1. **Using npx command**: Run `npx shadcn-pro@latest add component-name` to install individual components
2. **Copy and paste**: Copy component code directly from our documentation and paste it into your project

### Building the Registry

To build the component registry, run the following command:

```bash
npm run registry:build
```

This command generates static JSON files for each component in the `public/r/` directory.

### Accessing Component JSON

After building the registry, you can access the modal component JSON at:
[http://localhost:3000/r/modal.json](http://localhost:3000/r/modal.json)

Each component in the registry is served as a static JSON file that contains all the necessary information for the shadcn CLI to install the component.

### Installing with npx

To install the modal component using npx, run:

```bash
npx shadcn-pro@latest add modal
```

This will download and install the modal component and its dependencies into your project.

## Future Plans

Here are the components and features we plan to implement:

- [ ] **ProTable**: Encapsulate request, pagination, custom columns, and other functions
- [x] **Command Modal**: Dynamic invocation without JSX wrapper
- [ ] **Image Component**: Support preview functionality
- [ ] **Markdown Component**: Support rendering Markdown content
- [ ] **AI Hook**: For example `const { text } = useAI()`
- [ ] **CodeBlock Component**: Support syntax highlighting and copy functionality
- [ ] **Documentation Introduction**: Online preview of component content, supporting npx or copy installation
