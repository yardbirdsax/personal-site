# Gatsby to Hugo Migration Plan

## Overview

This document outlines the plan to migrate josh.feiermanfamily.com from Gatsby (React-based static site generator) to Hugo (Go-based static site generator). The goal is a word-for-word, exact migration with no functional changes or theme modifications.

## Git Workflow Strategy

This migration will use **git worktrees** to keep the current working directory clean and maintain the Gatsby site intact on `main` while building the Hugo site on a separate branch.

### Worktree Structure
- **Main worktree** (current directory): Remains on `main` branch with Gatsby site
- **Migration worktree** (parallel directory): Works on `hugo-migration` branch for Hugo development
- Both worktrees share the same git repository

### Benefits
- main branch remains deployable throughout migration
- Can easily compare Gatsby and Hugo sites side-by-side
- Can test Hugo site without affecting production code
- Clean separation of concerns
- Easy rollback if needed

### Commands Overview
```bash
# Create migration branch and worktree
git worktree add ../josh.feiermanfamily.com-hugo hugo-migration

# Work in Hugo worktree
cd ../josh.feiermanfamily.com-hugo

# When ready to merge
cd /Users/joshuafeierman/repos/josh.feiermanfamily.com
git merge hugo-migration

# Clean up worktree after merge
git worktree remove ../josh.feiermanfamily.com-hugo
```

## References

- [Hugo Quick Start](https://gohugo.io/getting-started/quick-start/)
- [Hugo Content Organization](https://gohugo.io/content-management/organization/)
- [Hugo Templates Introduction](https://gohugo.io/templates/introduction/)
- [Hugo Taxonomies](https://gohugo.io/content-management/taxonomies/)
- [Hugo Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting/)
- [Hugo Image Processing](https://gohugo.io/content-management/image-processing/)
- [Hugo RSS Feeds](https://gohugo.io/templates/rss/)
- [Hugo Deploy to S3](https://gohugo.io/hosting-and-deployment/hugo-deploy/)
- [Git Worktree Documentation](https://git-scm.com/docs/git-worktree)

## High-Level Plan

0. **Setup Git Worktree** - Create separate branch and worktree for Hugo migration work
1. **Setup Hugo Project Structure** - Initialize Hugo project in migration worktree
2. **Migrate Configuration** - Convert Gatsby configuration to Hugo configuration format
3. **Migrate Content** - Move blog posts and markdown pages to Hugo content structure
4. **Migrate Templates** - Convert React components and templates to Hugo templates
5. **Migrate Styling** - Port CSS and styling to Hugo theme structure
6. **Migrate Static Assets** - Move images and other static files to Hugo static directory
7. **Configure Build Pipeline** - Update Azure Pipeline to build with Hugo instead of Gatsby
8. **Test and Validate** - Verify all pages render identically to current site
9. **Merge to main** - Merge hugo-migration branch to main when ready

## Known Breaking Changes

### React Components to Go Templates
- **Custom React Components**: All React components (Bio, Sidebar, Header, TechTag, etc.) must be rewritten as Hugo templates using Go templating syntax
- **No React State/Hooks**: Hugo is static-only; any client-side interactivity will need vanilla JavaScript
- **Component Logic**: Logic in React components (like filtering, mapping, conditionals) must be reimplemented using Go template functions

### GraphQL to Hugo Data
- **No GraphQL**: Hugo doesn't use GraphQL; all data access is through Hugo's built-in variables (`.Site`, `.Page`, `.Params`, etc.)
- **Query Migration**: All GraphQL queries in pages and templates need to be replaced with Hugo variable access

### JavaScript/Node.js Dependencies
- **No npm packages**: Hugo doesn't use npm; all functionality must be native Hugo or vanilla JS/CSS
- **react-icons**: The icon library used for tech tags needs alternative (Font Awesome, inline SVG, or similar)
- **Bootstrap**: Bootstrap CSS can remain, but react-bootstrap components need to be replaced with standard HTML/CSS

### Routing and URLs
- **Slug Generation**: Hugo's URL generation differs from Gatsby's; need to ensure URLs match exactly to avoid broken links
- **Pagination**: Gatsby's pagination logic needs to be reimplemented with Hugo's pagination

### Plugins
- **gatsby-remark-table-of-contents**: Need to use Hugo's built-in TOC or implement custom shortcode
- **gatsby-remark-prismjs**: Hugo has built-in syntax highlighting with Chroma
- **gatsby-remark-images**: Hugo has image processing but syntax/behavior differs
- **gatsby-plugin-feed**: Hugo has built-in RSS but configuration differs

### Build Output
- Gatsby outputs to `public/` (Hugo does too, so this is compatible)
- Build process is completely different (Node.js vs Go binary)

## Detailed Task List

### Phase 0: Git Worktree Setup

#### Task 0.1: Create Migration Branch and Worktree
- From main worktree, create new branch: `git checkout -b hugo-migration`
- Push branch to remote (optional, for backup): `git push -u origin hugo-migration`
- Return to main: `git checkout main`
- Create worktree in parallel directory: `git worktree add ../josh.feiermanfamily.com-hugo hugo-migration`
- Verify worktree created: `git worktree list`

#### Task 0.2: Verify Worktree Setup
- Change to migration worktree: `cd ../josh.feiermanfamily.com-hugo`
- Verify on correct branch: `git branch`
- Verify all files present
- Make initial test commit to ensure worktree is working

**Note**: All subsequent tasks in Phases 1-8 will be executed in the migration worktree (`../josh.feiermanfamily.com-hugo`), leaving the main worktree clean and unchanged.

### Phase 1: Environment Setup

#### Task 1.1: Install Hugo
- Install Hugo extended edition (required for SCSS processing if needed)
- Verify installation with `hugo version`
- Document version used for reproducibility

#### Task 1.2: Initialize Hugo Project
- **Working directory**: Migration worktree (`../josh.feiermanfamily.com-hugo`)
- Initialize Hugo site in place: `hugo new site . --force` (force needed for non-empty directory)
- Review Hugo's default directory structure
- Understand where each type of content/asset will live
- Commit initial Hugo structure to hugo-migration branch

### Phase 2: Configuration Migration

**Working directory**: Migration worktree (`../josh.feiermanfamily.com-hugo`)

#### Task 2.1: Create Hugo Configuration File
- Create `hugo.toml` (or `hugo.yaml`/`hugo.json`) in migration worktree
- Map all settings from `config.js` and `gatsby-config.js` to Hugo config
- Configure site metadata (title, tagline, baseURL, etc.)
- Set up author information and social contacts
- Configure language and content settings
- Commit configuration changes

#### Task 2.2: Configure Taxonomies
- Set up "tags" taxonomy to match current tag system
- Configure taxonomy URLs to match existing `/tags/{tag}/` pattern
- Map tech label data from `config.js` to Hugo data files or params
- Commit changes

#### Task 2.3: Configure RSS Feed
- Set up RSS feed generation to output to `/rss.xml`
- Configure feed to only include published blog posts
- Match RSS feed structure to existing feed
- Commit changes

#### Task 2.4: Configure Permalinks
- Configure permalink structure to match Gatsby's slug generation
- Ensure blog posts maintain exact same URLs as current site
- Ensure tag pages match existing URL structure
- Commit changes

### Phase 3: Content Migration

**Working directory**: Migration worktree (`../josh.feiermanfamily.com-hugo`)

#### Task 3.1: Set Up Content Directory Structure
- Create `content/blog/` directory for blog posts
- Create `content/pages/` (or similar) for static markdown pages
- Understand Hugo's content organization and section structure

#### Task 3.2: Migrate Blog Posts
- Copy all markdown files from existing `content/blog/` to Hugo's `content/blog/`
- Verify frontmatter compatibility (title, date, tags, published)
- Test that Hugo correctly parses all frontmatter fields
- Handle any posts with image subdirectories (page bundles)
- Commit migrated content

#### Task 3.3: Migrate Markdown Pages
- Copy markdown files from existing `content/markdown_pages/` to appropriate Hugo location
- Update frontmatter if needed to match Hugo conventions
- Verify pages are correctly recognized by Hugo
- Commit migrated pages

#### Task 3.4: Test Table of Contents
- Replace `\`\`\`toc\`\`\`` markers with Hugo's TOC syntax
- Configure TOC settings to match current behavior
- Verify TOC renders correctly in posts that use it
- Commit TOC changes

#### Task 3.5: Verify Syntax Highlighting
- Test code blocks with various languages
- Configure Chroma (Hugo's syntax highlighter) to match PrismJS appearance
- Verify inline code and code block rendering
- Commit syntax highlighting configuration

### Phase 4: Template Migration

**Working directory**: Migration worktree (`../josh.feiermanfamily.com-hugo`)

#### Task 4.1: Create Base Layout Template
- Create `layouts/_default/baseof.html` as main layout wrapper
- Migrate HTML structure from `src/components/layout.js` (reference from main worktree)
- Include CSS and font references
- Set up proper HTML head with SEO tags
- Commit base template

#### Task 4.2: Create Single Post Template
- Create `layouts/blog/single.html` (or `layouts/_default/single.html`)
- Migrate structure and logic from `src/templates/blog-post.js` (reference from main worktree)
- Include post metadata (title, date, tags)
- Render post content with proper styling
- Include sharing functionality
- Commit single post template

#### Task 4.3: Create List Templates
- Create `layouts/blog/list.html` for blog listing page
- Migrate logic from `src/pages/blog.js` (reference from main worktree)
- Implement pagination if needed
- Ensure posts are sorted by date descending
- Commit list templates

#### Task 4.4: Create Tag Template
- Create `layouts/taxonomy/tag.html` (or similar)
- Migrate logic from `src/templates/tag.js` (reference from main worktree)
- List all posts with specific tag
- Include tag metadata
- Commit tag template

#### Task 4.5: Create Home Page Template
- Create `layouts/index.html`
- Migrate structure from `src/pages/index.js` (reference from main worktree)
- Include welcome content and recent posts
- Commit home page template

#### Task 4.6: Create Static Page Templates
- Create templates for About, Services, Archive pages
- Migrate structure from corresponding React components in `src/pages/` (reference from main worktree)
- Commit static page templates

#### Task 4.7: Create Partial Templates
- Create `layouts/partials/sidebar.html` (migrate from `src/components/sidebar/`)
- Create `layouts/partials/header.html` (migrate from `src/components/header/`)
- Create `layouts/partials/bio.html` (migrate from Bio components)
- Create `layouts/partials/social-links.html` (migrate from SocialLinks components)
- Create `layouts/partials/tech-tags.html` (migrate from TechTags components)
- Reference originals from main worktree as needed
- Commit partial templates

#### Task 4.8: Implement Tech Tag Display
- Decide on icon solution (Font Awesome, inline SVG, or other)
- Create partial or shortcode for rendering tech tags with icons
- Map icon names from react-icons to chosen solution
- Apply colors and sizes from config
- Commit tech tag implementation

### Phase 5: Styling Migration

**Working directory**: Migration worktree (`../josh.feiermanfamily.com-hugo`)

#### Task 5.1: Migrate Global Styles
- Copy `src/components/layout.css` and `src/pages/index.css` from main worktree to Hugo assets or static
- Link stylesheets in base template
- Verify Bootstrap 4 CSS is properly included
- Commit global styles

#### Task 5.2: Migrate Component Styles
- Copy all component CSS files from main worktree to appropriate Hugo location
- Update class names and selectors if needed to match Hugo templates
- Organize CSS files (either in `static/css/` or `assets/css/`)
- Commit component styles

#### Task 5.3: Migrate Template Styles
- Copy `blog-post.css`, `codeblock.css`, and other template CSS from main worktree
- Verify syntax highlighting styles work with Chroma
- Adjust any CSS that was specific to React component structure
- Commit template styles

#### Task 5.4: Configure Fonts
- Ensure Google Fonts (Raleway and Source Sans Pro) are loaded
- Add font link tags to base template head
- Verify font loading across all pages
- Commit font configuration

### Phase 6: Static Assets Migration

**Working directory**: Migration worktree (`../josh.feiermanfamily.com-hugo`)

#### Task 6.1: Migrate Images
- Copy all images from `src/images/` (main worktree) to `static/images/` in migration worktree
- Update all image references in templates to use correct paths
- Verify profile images and certification badges render correctly
- Commit image assets

#### Task 6.2: Configure Image Processing
- Set up Hugo's image processing if needed for responsive images
- Implement shortcodes or partials for responsive image rendering
- Test image rendering matches Gatsby's gatsby-image behavior
- Commit image processing configuration

#### Task 6.3: Migrate Other Static Files
- Copy any other static assets (icons, manifests, etc.) from main worktree
- Update references as needed
- Commit other static files

### Phase 7: Build and Deployment

**Working directory**: Migration worktree (`../josh.feiermanfamily.com-hugo`)

#### Task 7.1: Test Local Build
- Run `hugo` command to build site in migration worktree
- Verify `public/` directory contains correct output
- Serve site locally with `hugo server`
- Manually test all pages, navigation, and functionality
- Compare side-by-side with Gatsby site running in main worktree

#### Task 7.2: Configure Hugo Deploy (Alternative)
- Configure `hugo deploy` command for S3
- Add deployment target to `hugo.toml`
- Test deployment command locally if using this approach
- Commit deploy configuration if used

### Phase 8: Validation and Testing

**Working directory**: Migration worktree (`../josh.feiermanfamily.com-hugo`)
**Comparison**: Compare with main worktree Gatsby site running on localhost

#### Task 8.1: Visual Comparison
- Run both sites simultaneously (Hugo in migration worktree, Gatsby in main worktree)
- Compare rendered pages side-by-side
- Verify layout, spacing, fonts, colors match exactly
- Check responsive behavior on mobile and desktop
- Test all interactive elements
- Document any differences

#### Task 8.2: Content Verification
- Verify all blog posts are present and rendered correctly
- Check all static pages (About, Resume, Services, Archive)
- Verify all images and assets load correctly
- Check that code blocks render with proper syntax highlighting
- Verify all markdown features work correctly

#### Task 8.3: URL and Navigation Testing
- Test all internal links work correctly
- Verify tag pages generate and render correctly
- Check RSS feed structure and content
- Verify URLs match exactly with current site structure
- Test 404 page

#### Task 8.4: SEO and Metadata
- Verify page titles, descriptions, and meta tags
- Check Open Graph and Twitter Card metadata
- Verify canonical URLs
- Test RSS feed in feed reader
- Compare with Gatsby site's metadata

#### Task 8.5: Performance Testing
- Compare build times between Gatsby and Hugo
- Compare page load times
- Verify site performs at least as well as current Gatsby site
- Test build output size

#### Task 8.6: Remove Gatsby Files and Dependencies
- Delete Gatsby-specific files and directories:
  - Remove `package.json` and `package-lock.json`
  - Remove `gatsby-config.js`, `gatsby-node.js`, `gatsby-browser.js`, `gatsby-ssr.js`
  - Remove `src/` directory (all React components, templates, pages)
  - Remove `node_modules/` directory
  - Remove `.cache/` directory (Gatsby build cache)
  - Remove `public/` directory (will be regenerated by Hugo)
- Remove Gatsby-specific configuration:
  - Remove `config.js` (Gatsby site configuration, replaced by `hugo.toml`)
- Verify no Gatsby dependencies remain:
  - Search for any remaining `.js` or `.jsx` files: `find . -name "*.js" -o -name "*.jsx"`
  - Review and remove any other Gatsby-specific files found
- Commit the cleanup: `git add -A && git commit -m "Remove Gatsby files and dependencies"`

### Phase 9: Final Deployment

**Working directory**: Main worktree (`/Users/joshuafeierman/repos/josh.feiermanfamily.com`)

#### Task 9.1: Create Backup
- From main worktree, create git tag: `git tag gatsby-final-version`
- Push tag to remote: `git push origin gatsby-final-version`

#### Task 9.2: Merge Hugo Migration Branch
- From main worktree, ensure on main: `git checkout main`
- Merge hugo-migration branch: `git merge hugo-migration`
- Resolve any merge conflicts if they exist
- Test build one final time in main worktree: `hugo`
- Push to remote: `git push origin main`

#### Task 9.3: Clean Up Worktree
- Remove migration worktree: `git worktree remove ../josh.feiermanfamily.com-hugo`
- Verify worktree removed: `git worktree list`
- Optionally delete hugo-migration branch: `git branch -d hugo-migration`

#### Task 9.4: Deploy to Production
- Build the site locally: `hugo`
- Manually deploy to S3 using Hugo deploy
- Monitor deployment for errors
- Verify production site after deployment

#### Task 9.5: Documentation
- Update README with Hugo instructions (replace Gatsby instructions)
- Update CLAUDE.md with Hugo-specific guidance
- Document any Hugo-specific commands or workflows
- Commit documentation updates

## Risk Assessment

### High Risk Items
- **Custom React Components**: Complex components may be difficult to replicate in Go templates
- **Icon Library**: Finding equivalent for react-icons that works with Hugo
- **URL Compatibility**: Any URL changes will break existing links and SEO

### Medium Risk Items
- **RSS Feed Structure**: Feed structure might differ slightly between Gatsby and Hugo
- **Image Processing**: Responsive images may render differently
- **Syntax Highlighting**: Code styling may look different between PrismJS and Chroma

### Low Risk Items
- **Static Content**: Markdown content should migrate cleanly
- **Deployment**: S3 sync process remains identical
- **Build Performance**: Hugo is typically faster than Gatsby

## Success Criteria

1. All pages from current site are present in Hugo site
2. Visual appearance is identical (or indistinguishable) from current site
3. All URLs remain the same (no broken links)
4. RSS feed maintains same structure and content
5. Build and deployment pipeline works without manual intervention
6. Site loads at same or better performance than current site
7. All functionality (navigation, tags, search if present) works identically

## Rollback Plan

If migration fails or issues are discovered post-deployment:

### Option 1: Before Merge (Safest)
- Simply don't merge the hugo-migration branch
- Continue working in main worktree with Gatsby site intact
- Address issues in migration worktree
- Re-test before attempting merge again

### Option 2: After Merge, Before Production Deploy
- From main worktree: `git reset --hard gatsby-final-version`
- Force push to remote: `git push -f origin main`
- Trigger Azure Pipeline to rebuild Gatsby site
- Verify Gatsby site is restored

### Option 3: After Production Deploy
1. From main worktree: `git revert` or `git reset --hard gatsby-final-version`
2. Push to remote: `git push origin main` (or `git push -f` if using reset)
3. Trigger Azure Pipeline to rebuild and deploy Gatsby site
4. Verify Gatsby site is restored correctly in production
5. Optionally restore S3 bucket from backup if content issues occurred
6. Document issues encountered for future migration attempt

### Worktree Advantage for Rollback
The worktree approach makes rollback trivial before merge - the main worktree never changes, so there's nothing to roll back. The hugo-migration branch can be deleted and recreated as needed without affecting production.
