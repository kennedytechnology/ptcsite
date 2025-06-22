# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern static site built with Eleventy 3.0+, Tailwind CSS, and modern web APIs. The setup emphasizes performance, developer experience, and cutting-edge web standards without complex build tooling.

## Core Technologies

- **Eleventy 3.1.1**: Static site generator with ES module imports and incremental builds
- **Tailwind CSS 3.4+**: Utility-first CSS with container queries and modern features  
- **Alpine.js 3.14**: Lightweight JavaScript framework for interactivity
- **PostCSS**: CSS processing with autoprefixer
- **Modern Web APIs**: View Transitions, Container Queries, Speculation Rules

## Development Commands

### Essential Commands
- `npm start` - Start development server with live reloading (runs Eleventy + Tailwind in parallel)
- `npm run build` - Build for production (builds Eleventy + minified CSS)
- `npm run clean` - Remove _site directory

### Individual Commands
- `npm run dev:eleventy` - Run Eleventy dev server with incremental builds
- `npm run dev:css` - Run Tailwind CSS in watch mode
- `npm run build:eleventy` - Build Eleventy only
- `npm run build:css` - Build and minify CSS only

## Architecture & Project Structure

```
src/
├── _data/              # Global data files
├── _includes/
│   ├── css/            # CSS source files
│   │   └── main.css    # Main Tailwind CSS file
│   ├── js/             # JavaScript utilities
│   └── layouts/        # Page layouts (Nunjucks)
│       └── base.njk    # Base HTML template
├── assets/             # Static assets (images, fonts)
├── pages/              # Additional pages
└── index.md            # Homepage
```

## Key Configuration Files

### Eleventy Configuration (`.eleventy.js`)
- **Async imports**: Uses dynamic imports for ES modules compatibility
- **Image optimization**: Configured for AVIF, WebP, JPEG with multiple sizes
- **Asset handling**: Passes through static assets and copies Alpine.js
- **Template formats**: Markdown, Nunjucks, HTML, Liquid
- **Development server**: Hot reloading with incremental builds

### Tailwind Configuration (`tailwind.config.js`)
- **Container queries**: Enabled via `@tailwindcss/container-queries`
- **Modern colors**: Uses OKLCH color space for primary colors
- **Custom containers**: Responsive container query breakpoints
- **Future features**: `hoverOnlyWhenSupported` enabled
- **Experimental**: `optimizeUniversalDefaults` for better performance

### CSS Architecture (`src/_includes/css/main.css`)
- **Layers**: Uses `@layer` for proper cascade management
- **Container queries**: Component-responsive design patterns
- **View transitions**: CSS setup for native page transitions
- **Dark mode**: Automatic support via `prefers-color-scheme`
- **Modern fonts**: Inter Variable with OpenType features

## Modern Web Features

### View Transitions API
- **Speculation Rules**: Configured for intelligent prefetching
- **Native transitions**: Smooth page navigation without JavaScript frameworks
- **Fallback**: Graceful degradation for unsupported browsers
- **CSS names**: Semantic view-transition-name assignments

### Container Queries
- **Component-responsive**: Components adapt to container size, not viewport
- **Utilities**: Custom container query helper classes
- **Breakpoints**: Predefined container sizes (2xs to 7xl)

### Performance Optimizations
- **Incremental builds**: Fast development with `--incremental` flag
- **Modern images**: Automatic AVIF/WebP generation with fallbacks
- **Critical CSS**: Inlined critical styles in base template
- **Asset optimization**: Minified CSS and optimized JavaScript

## Development Workflow

### Getting Started
1. `npm install` - Install dependencies
2. `npm start` - Start development server
3. Visit `http://localhost:8080`

### Adding Pages
- Create `.md` files in `src/` or `src/pages/`
- Use `layout: layouts/base.njk` in frontmatter
- Content is processed through Nunjucks template engine

### Adding Styles
- Edit `src/_includes/css/main.css`
- Use Tailwind classes in HTML/Markdown
- Custom CSS should use `@layer` directives
- Container queries can be applied with `@container` rules

### Adding Components
- Create reusable HTML snippets in `src/_includes/`
- Use Nunjucks macros for component-like functionality
- Include via `{% include "component-name.njk" %}`
- Pass data via include context or global data

## Image Handling

### Using Images
- Use the `image` shortcode: `{% image "path/to/image.jpg", "Alt text" %}`
- Automatic optimization to AVIF, WebP, JPEG
- Responsive sizes: 300px, 600px, 900px, 1200px
- Output: `_site/assets/images/`

### Modern Image Formats
- **AVIF**: Best compression, modern browsers
- **WebP**: Good compression, wide support  
- **JPEG**: Fallback for all browsers
- **Lazy loading**: Default loading="lazy" attribute

## Troubleshooting

### Build Issues
- **ES Module errors**: Ensure async imports in `.eleventy.js`
- **CSS errors**: Check `@apply` usage (not supported in `@container` rules)
- **Template errors**: Verify layout paths and Nunjucks syntax

### Development Issues
- **Styles not updating**: Check Tailwind watch process with `npm run dev:css`
- **Assets missing**: Verify passthrough copy configuration
- **Port conflicts**: Change port in `.eleventy.js` serverOptions

## Future Enhancements

### Ready to Enable
- **Additional plugins**: RSS, syntax highlighting, navigation (installed but basic setup)
- **Component system**: Nunjucks macros for reusable components
- **Data sources**: Connect to APIs or headless CMS

### Potential Additions
- **PWA features**: Service worker, manifest.json
- **CMS integration**: Headless CMS with custom data sources
- **Advanced images**: Blur-up placeholders, art direction
- **Performance monitoring**: Web Vitals tracking
- **Component library**: Consider WebC or other component systems if needed

## Notes for Claude Code

- **Simple architecture**: Standard HTML, CSS, JS - no proprietary abstractions
- **Modern CSS**: Prefer modern CSS features over JavaScript solutions
- **Performance first**: Always consider Core Web Vitals impact
- **Progressive enhancement**: Build features that work without JavaScript
- **Container queries**: Use for component-responsive design over media queries
- **Clean dependencies**: Minimal, focused toolchain for fast builds and easy maintenance