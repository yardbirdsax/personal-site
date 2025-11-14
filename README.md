# josh.feiermanfamily.com

Personal website and blog built with Hugo. Hosted on AWS S3 with static website hosting.

## Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (required for SCSS/Sass processing)
- AWS CLI (for deployment)

## Getting Started

### Install Hugo

On macOS using Homebrew:
```bash
brew install hugo
```

For other platforms, see the [Hugo installation guide](https://gohugo.io/installation/).

Verify installation:
```bash
hugo version
```

### Development Server

Start the development server:
```bash
hugo server
```

The site will be available at [http://localhost:1313](http://localhost:1313). Hugo will automatically rebuild and reload when you make changes.

### Production Build

Build the site for production:
```bash
hugo
```

This generates the static site in the `public/` directory.

## Site Configuration

Site metadata, author information, and settings are configured in `hugo.toml` at the project root. This includes:
- Site URL, title, and tagline
- Author bio and social media links
- Tech tag definitions (icons, colors, names)
- RSS feed configuration
- Permalink structure
- Deployment settings

## Content Structure

### Blog Posts

Blog posts are located in `content/blog/`. Each post is a markdown file with frontmatter:

```yaml
---
title: 'Post Title'
tags: ["azure", "python", "aws", "git"]
published: true
date: 'YYYY-MM-DD'
---
```

Posts can be:
- Standalone markdown files (e.g., `2024-06-01-Things-I-Think.md`)
- Folders with `index.md` for posts with embedded images (page bundles)

### Static Pages

Static pages (about, resume, services, etc.) are in `content/` at the root level or in appropriate subdirectories.

### Tech Tags

Tech tags are defined in `hugo.toml` under `[params.techTags]`. Current tags include: azure, git, python, aws. Each tag specifies a Font Awesome icon, size, and color.

## Template Structure

Hugo uses Go templates instead of React components:

- **Base Layout**: `layouts/_default/baseof.html` - Main layout wrapper
- **Single Post**: `layouts/blog/single.html` - Individual blog post template
- **List Templates**: `layouts/blog/list.html` - Blog listing page
- **Tag Templates**: `layouts/taxonomy/tag.html` - Tag pages
- **Home Page**: `layouts/index.html` - Homepage template
- **Partials**: `layouts/partials/` - Reusable template components
  - `sidebar.html` - Desktop bio, social links, tech tags
  - `header.html` - Mobile navigation and bio
  - `bio.html` - Author bio
  - `social-links.html` - Social media links
  - `tech-tags.html` - Tech tag display with icons

## Styling

- Bootstrap 4 CSS for grid and components
- Font Awesome 6 for icons
- Custom CSS in `static/css/` and `assets/css/`
- Google Fonts: Raleway and Source Sans Pro

## Deployment

The site is deployed to AWS S3 with static website hosting enabled.

### Manual Deployment

Using Hugo's built-in deploy command:
```bash
hugo deploy
```

The deployment configuration is in `hugo.toml` under `[deployment]`.

### Terraform Infrastructure

Infrastructure is managed with Terraform in the `terraform/` directory:
- **main.tf**: Creates S3 bucket with public-read ACL and static website hosting
- **provider.tf**: AWS provider configuration

Bucket name: `josh.feiermanfamily.com`

## Image Assets

Images are stored in `static/images/`. Profile images, certification badges, and other assets can be referenced directly in templates or content using `/images/filename.jpg`.

## Development Tips

- Use `hugo server -D` to include draft posts in development
- Use `hugo server --disableFastRender` if hot reload isn't working properly
- Check `hugo --help` for available commands and options
- Hugo's [documentation](https://gohugo.io/documentation/) is comprehensive and searchable

## License

Personal website - all rights reserved.
