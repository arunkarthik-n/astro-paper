# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro blog theme built with TypeScript, TailwindCSS, and modern web standards. The project uses pnpm as package manager.

## Development Commands

```bash
# Start development server
pnpm run dev

# Build for production (includes type checking, build, and pagefind generation)
pnpm run build

# Preview production build
pnpm run preview

# Type checking and sync
pnpm run sync

# Linting and formatting
pnpm run lint
pnpm run format
pnpm run format:check
```

## Architecture Overview

### Core Configuration
- **Main config**: `src/config.ts` - Contains SITE object with all theme configuration
- **Content config**: `src/content.config.ts` - Defines blog collection schema with Astro Content Collections
- **Astro config**: `astro.config.ts` - Astro framework configuration with integrations

### Directory Structure
- **Content**: Blog posts are stored in `src/data/blog/` as Markdown files
- **Components**: Reusable Astro components in `src/components/`
- **Layouts**: Page layouts in `src/layouts/` (Layout.astro, PostDetails.astro, etc.)
- **Pages**: Route-based pages in `src/pages/`
- **Utils**: Helper functions in `src/utils/` including post filtering, sorting, and OG image generation
- **Styles**: Global CSS and typography in `src/styles/`

### Key Features
- **Content Collections**: Uses Astro's new Content Collections API with glob loader
- **Dynamic OG Images**: Generates Open Graph images using @resvg/resvg-js and Satori
- **Search**: Static search powered by Pagefind (generated during build)
- **Syntax Highlighting**: Shiki with custom transformers for code blocks
- **Responsive Images**: Built-in Astro image optimization
- **SEO**: Comprehensive meta tags, sitemap, RSS feed, and structured data

### Content Management
- Blog posts use frontmatter schema defined in `content.config.ts`
- Posts support drafts, featured status, custom OG images, and timezone handling
- Post filtering logic in `src/utils/postFilter.ts` handles draft and scheduled posts
- Sorting by publication/modification date in `src/utils/getSortedPosts.ts`
- **Archives**: Chronological view of ALL published posts at `/archives` route (controlled by `SITE.showArchives` in config.ts). To "archive" posts, set `draft: true` in frontmatter.

### Styling System
- **TailwindCSS**: Primary styling framework with custom configuration
- **Typography**: Tailwind Typography plugin for markdown content
- **Dark Mode**: Built-in light/dark theme switching
- **Icons**: Uses Tabler icons stored as SVG components

### Build Process
- TypeScript checking with `astro check`
- Astro build generates static site to `dist/`
- Pagefind generates search index post-build
- Build command copies pagefind assets to public directory

### Development Notes
- Uses TypeScript strict mode with path mapping (`@/*` -> `./src/*`)
- ESLint configuration with Astro-specific rules and no-console error
- Prettier for code formatting with Astro plugin
- Path aliases configured for clean imports
- Environment variable support for Google Site Verification

### Customization Points
- Site configuration in `src/config.ts`
- Color schemes and styling in TailwindCSS configuration
- Post schema can be extended in `src/content.config.ts`
- Custom transformers for syntax highlighting in `src/utils/transformers/`
- OG image templates in `src/utils/og-templates/`