# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a custom component registry template for shadcn, built with Next.js. It allows you to distribute custom components, hooks, pages, and other files to any React project using the shadcn CLI.

Key features:
- Uses Tailwind v4
- Components are defined in `registry.json`
- Components are served as static files under `public/r/[name].json`
- Compatible with the `shadcn` CLI
- Includes v0 integration using the "Open in v0" API

## Common Development Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Build the Next.js application
- `pnpm lint` - Run ESLint
- `pnpm registry:build` - Build the registry using shadcn build command

## Code Architecture and Structure

### Main Directories

1. `app/` - Next.js app router pages and layout files
2. `components/` - Shared components used across the application
3. `registry/` - Contains all registry items organized by style (new-york) and type (blocks, ui)
4. `public/` - Static assets

### Registry Structure

The registry is defined in `registry.json` which contains:
- Component definitions with names, descriptions, and file paths
- Dependencies and registry dependencies
- Different types of registry items (components, hooks, libs, pages)

Registry items are stored in:
- `registry/new-york/blocks/` - Complete component examples
- `registry/new-york/ui/` - Individual UI components

### Component Organization

Components follow this structure:
- Each component has its own directory
- Complex components may include multiple files (components, hooks, libs)
- Components use TypeScript with React
- Styling is done with Tailwind CSS classes

### Important Configuration Files

- `components.json` - shadcn configuration with aliases and Tailwind settings
- `registry.json` - Defines all registry items and their structure
- `tsconfig.json` - TypeScript configuration with path aliases
- `package.json` - Dependencies and scripts

## Working with the Registry

To add new components:
1. Create the component files in the appropriate registry directory
2. Update `registry.json` with the new component definition
3. Run `pnpm registry:build` to build the registry
4. Test the component by importing it in `app/page.tsx`

Path aliases are configured in `tsconfig.json` and `components.json`:
- `@/*` maps to the root directory
- `@/components` maps to the components directory
- `@/registry` maps to the registry directory