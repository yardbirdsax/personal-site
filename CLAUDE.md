# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website and blog built with Hugo (Go-based static site generator). The site is hosted on AWS S3 with static website hosting. Infrastructure is managed with Terraform.

**Note**: This site was migrated from Gatsby to Hugo in 2025. See `migration-plan.md` for details.

## Development Commands

### Core Commands
- **Development server**: `hugo server` - Starts dev server at http://localhost:1313 with live reload
- **Development server (with drafts)**: `hugo server -D` - Includes draft posts
- **Production build**: `hugo` - Builds static site to `public/` directory
- **Deploy to S3**: `hugo deploy` - Deploys to configured S3 bucket
- **Check version**: `hugo version` - Verify Hugo installation

### Testing
There is currently no test suite configured.

## Site Configuration

### hugo.toml
All site metadata, author info, social links, and tech tag definitions are centralized in `hugo.toml` at project root. This includes:
- Site URL, title, tagline, and description
- Author bio and social media contacts
- Tech tag definitions (Font Awesome icons, colors, names)
- RSS feed configuration
- Permalink structure (important for maintaining URL compatibility)
- Deployment configuration for S3
- Syntax highlighting settings (Chroma)

## Content Structure

### Blog Posts
Blog posts live in `content/blog/`. Each post can be:
- A standalone markdown file (e.g., `2024-06-01-Things-I-Think.md`)
- A folder with `index.md` (page bundle) for posts with embedded images

#### Frontmatter Requirements
```yaml
---
title: 'Post Title'
tags: ["azure", "python", "aws", "git"]
published: true
date: 'YYYY-MM-DD'
---
```

### Pages
Static pages (resume, about, services, etc.) are markdown files in `content/` at the root or in subdirectories.

### Tech Tags
Tech tags are defined in `hugo.toml` under `[params.techTags]`. Current tags: azure, git, python, aws. Each tag specifies a Font Awesome icon class, size, and color. Tags are used as taxonomies for organizing blog posts.

## Architecture

### Template Structure
Hugo uses Go templates (not React). Templates are in `layouts/`:

- **Base Layout**: `layouts/_default/baseof.html` - Main wrapper with HTML structure, defines blocks
- **Single Post**: `layouts/blog/single.html` - Individual blog post template
- **List Templates**: `layouts/blog/list.html` - Blog listing page with pagination
- **Tag Templates**: `layouts/taxonomy/tag.html` - Tag archive pages
- **Home Page**: `layouts/index.html` - Homepage template
- **Static Pages**: `layouts/_default/single.html` - Default template for static pages

### Partial Templates
Reusable components in `layouts/partials/`:
- `header.html` - Mobile navigation and bio
- `sidebar.html` - Desktop bio, social links, tech tags
- `bio.html` - Author bio component
- `social-links.html` - Social media icon links
- `tech-tags.html` - Tech tag display with Font Awesome icons
- `head.html` - HTML head with meta tags, CSS, fonts
- `footer.html` - Footer content

### Styling
- Bootstrap 4.6.2 CSS for grid and components
- Font Awesome 6 Free for icons
- Custom CSS in `static/css/` (served as-is) and `assets/css/` (can be processed)
- Google Fonts: Raleway and Source Sans Pro
- Chroma for syntax highlighting (configured in `hugo.toml`)

### Content Organization
Hugo automatically creates sections based on directory structure in `content/`:
- `content/blog/` → `/blog/` section
- Individual posts → `/blog/{slug}/` (permalink format defined in `hugo.toml`)
- Tags → `/tags/{tag}/` (taxonomy pages)

### Data Access
Hugo uses built-in variables instead of GraphQL:
- `.Site` - Global site configuration and data
- `.Page` - Current page data (title, content, params, etc.)
- `.Params` - Custom parameters from frontmatter
- `site.Taxonomies.tags` - Access to all tags and their posts
- `.Pages` - Collection of pages in current section

## Deployment

### Manual Deployment
Using Hugo's built-in deploy command:
```bash
hugo deploy
```

Configuration is in `hugo.toml` under `[deployment]`. This syncs the `public/` directory to S3 with caching headers and gzip compression.

### Infrastructure
Terraform configuration in `terraform/`:
- **main.tf**: Creates S3 bucket with public-read ACL and static website hosting
- **provider.tf**: AWS provider configuration
- **cicd.tf**: CI/CD pipeline configuration

Bucket name: `josh.feiermanfamily.com`

## Image Assets
Images are in `static/images/`. They are served directly from `/images/` path. Profile images and certification badges are referenced in partials and templates.

## Hugo-Specific Notes

### Go Template Syntax
- `{{ }}` - Template actions (output, variables, functions)
- `{{ range }}...{{ end }}` - Loop over collections
- `{{ if }}...{{ else }}...{{ end }}` - Conditionals
- `{{ with }}...{{ end }}` - Set context
- `{{ partial "name.html" . }}` - Include partial template

### Common Functions
- `{{ .Title }}` - Page title
- `{{ .Content }}` - Rendered markdown content
- `{{ .Date.Format "January 2, 2006" }}` - Format date
- `{{ range .Params.tags }}` - Loop over tags
- `{{ .TableOfContents }}` - Generate TOC from headings
- `{{ .Summary }}` - Auto-generated or manual summary

### Shortcodes
Hugo supports shortcodes for reusable content snippets. Custom shortcodes can be created in `layouts/shortcodes/`.

### Development Tips
- Hugo has extremely fast builds compared to Gatsby
- Live reload works out of the box with `hugo server`
- Use `hugo --gc --minify` for production builds with garbage collection and minification
- Check `hugo --help` for all available commands
- Hugo documentation: https://gohugo.io/documentation/

### Key Differences from Gatsby
- No GraphQL - use Hugo's built-in variables
- No React - use Go templates
- No npm packages - everything is native Hugo or vanilla JS/CSS
- No build plugins - Hugo has built-in features for most needs
- Static only - no client-side rendering or hydration
- Go templating instead of JSX
