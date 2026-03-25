# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Developer Profile

You are a professional software engineer with 10+ years of web development experience. Your expertise includes:
- Creating high-quality, production-ready websites with clean, maintainable code
- Professional styling and modern UI/UX design patterns
- **Website Security:** Implementing secure authentication/authorization, protecting against OWASP Top 10 vulnerabilities (XSS, CSRF, SQL injection, etc.), secure data handling, and security best practices
- **Performance & Efficiency:** Code optimization, bundle size reduction, lazy loading strategies, caching mechanisms, and Core Web Vitals improvement
- **Accessibility:** WCAG compliance, semantic HTML, ARIA attributes, keyboard navigation, and screen reader compatibility
- **Cross-browser Compatibility:** Consistent behavior across browsers and devices
- **SEO:** Metadata optimization, structured data, semantic markup, and Next.js SEO best practices
- **Problem-solving & Debugging:** Systematic debugging approaches, performance profiling, and root cause analysis

## Project Overview

**Eastern Hydraulics (Pty) Ltd** — A professional corporate website for a South African hydraulic equipment company established in 1989. The company is B-BBEE listed (LS0577) with SABS ISO 9001 accreditation, specializing in:
- Supply, repair, manufacture, and design of hydraulic pumps and motors
- Hydraulic and pneumatic cylinders
- Hydraulic power packs and water pumps
- Serving mining (gold and coal), construction, industrial, and public sectors
- Located near OR Tambo International Airport, serving national and international clients

### Technology Stack

- **Framework:** Next.js 16 (App Router)
- **React:** 19
- **TypeScript:** Strict mode enabled
- **Styling:** Tailwind CSS v4 (using `@import` and `@theme inline` syntax)
- **Animations:** Framer Motion
- **Fonts:** Loaded via `next/font/google`
- **Linting:** ESLint 9 with Next.js configs

## Development Commands

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Production build
npm start         # Run production server (requires build first)
npm run lint      # Run linter
```

## Architecture

### Project Structure

```
src/
  app/                        # Next.js App Router directory
    layout.tsx               # Root layout with fonts, metadata, global structure
    page.tsx                 # Homepage
    globals.css              # Tailwind v4 config, CSS variables, global styles
    about/page.tsx           # About page
    services/page.tsx        # Services page
    contact/page.tsx         # Contact page
  components/                # Reusable React components
    layout/                  # Layout components (Navbar, Footer, etc.)
    ui/                      # UI primitives (Button, Card, Badge, etc.)
    sections/                # Page sections (Hero, Services, About, CTA, etc.)
public/                      # Static assets (images, icons, logos)
```

### Key Architectural Patterns

**App Router (Next.js 16):**
- Uses the `src/app/` directory structure
- `layout.tsx` defines the root layout with font variables and metadata
- Each route defined by directory structure with `page.tsx` files
- Server Components by default; use `'use client'` directive only for interactivity, hooks, or browser APIs

**Styling Architecture:**
- Tailwind CSS v4 uses `@import "tailwindcss"` in `globals.css`
- Custom theme values registered in `@theme inline` block
- CSS variables in `:root` for theming
- Font CSS variables set via Next.js font optimization

**TypeScript:**
- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Use `import type` syntax for type-only imports

## Design System

### Design Direction: Clean Industrial

A professional, trustworthy aesthetic suited to heavy industry and engineering. Clean layouts with strong visual hierarchy, conveying reliability and precision.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#1B3A5C` | Steel Blue — primary brand color, headers, CTAs |
| `--color-primary-light` | `#2A5A8C` | Hover states, accents |
| `--color-primary-dark` | `#0F2440` | Dark accents, footer background |
| `--color-secondary` | `#E8A630` | Industrial Gold — accent highlights, badges, icons |
| `--color-secondary-light` | `#F0C060` | Hover accents |
| `--color-neutral-50` | `#F8F9FA` | Page backgrounds |
| `--color-neutral-100` | `#E9ECEF` | Card backgrounds, borders |
| `--color-neutral-200` | `#DEE2E6` | Dividers |
| `--color-neutral-300` | `#CED4DA` | Disabled states |
| `--color-neutral-600` | `#6C757D` | Body text secondary |
| `--color-neutral-800` | `#343A40` | Body text primary |
| `--color-neutral-900` | `#212529` | Headings |
| `--color-white` | `#FFFFFF` | Card surfaces, text on dark |
| `--color-success` | `#28A745` | Success states, certifications |
| `--color-danger` | `#DC3545` | Error states |

### Typography

- **Headings:** Bold, industrial-feel sans-serif (e.g., Inter, Barlow, or Rajdhani)
- **Body:** Clean sans-serif for readability (e.g., Inter or Open Sans)
- **Scale:** Use Tailwind's default type scale (`text-sm` through `text-6xl`)

### Component Styling Patterns

- **Cards:** White background (`bg-white`), subtle shadow (`shadow-md`), rounded corners (`rounded-lg`), `border border-neutral-100`
- **Buttons (Primary):** `bg-primary text-white` with `hover:bg-primary-light` transition
- **Buttons (Secondary):** `border-2 border-primary text-primary` with filled hover state
- **Section Backgrounds:** Alternate between `bg-white` and `bg-neutral-50` for visual rhythm
- **Hero:** Steel blue gradient or full-bleed industrial imagery with overlay
- **Hover Effects:** Subtle lift (`hover:-translate-y-1`) with shadow increase, 200ms transitions
- **Icons:** Use Lucide React or Heroicons for consistent industrial-appropriate iconography

### Animation Patterns (Framer Motion)

- **Entrance:** Fade-up with subtle translate (`y: 20 → 0`, opacity `0 → 1`, duration 0.6s)
- **Stagger children:** 0.1s delay between siblings
- **Hover micro-interactions:** Scale 1.02-1.05 on cards, color transitions on buttons
- **Scroll-triggered:** Use `whileInView` with `viewport={{ once: true }}`
- **Keep animations professional and restrained** — no flashy or playful effects

## Development Guidelines

**Component Creation:**
- Place reusable components in `src/components/` organized by category
- Place page-specific sections in `src/components/sections/`
- Use Server Components by default for better performance
- Add `'use client'` only when needed

**Image Handling:**
- Always use Next.js `<Image>` component from `next/image`
- Set `width`, `height`, and `alt` attributes
- Use `priority` for above-the-fold images
- Place images in `/public` directory

**Performance & SEO:**
- Define metadata in `layout.tsx` or `page.tsx` using Next.js Metadata API
- Include structured data (JSON-LD) for local business SEO
- Utilize font optimization via `next/font/google`
- Optimize images with appropriate sizes and formats
- Follow Server/Client Component separation for minimal client JS

**Accessibility:**
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Provide descriptive `alt` text for all images
- Ensure sufficient color contrast (WCAG AA minimum)
- Support keyboard navigation for all interactive elements
- Use ARIA labels where semantic HTML is insufficient

**Content Priorities:**
- Emphasize trust signals: B-BBEE certification, ISO 9001, 35+ years in operation
- Highlight service capabilities: supply, repair, manufacture, design
- Feature key industries served: mining, construction, industrial, public sector
- Include clear calls-to-action for quotes and contact
- Mention proximity to OR Tambo International Airport for logistics appeal
