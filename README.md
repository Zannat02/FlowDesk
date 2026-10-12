# FlowDesk - Responsive Landing Page

A dark-theme, fully responsive landing page for **FlowDesk**, a fictional project-management SaaS. Built as Task 1 of my internship: a clean, component-based frontend before any backend work.

**Live demo:** _add your Vercel link here_

## Why this stack

- **React + Vite**: component-based structure, fast dev server, simple deploy.
- **Tailwind CSS v4**: mobile-first responsive utilities (`md:`, `lg:`) and design tokens in one place (`src/index.css`).
- **lucide-react**: consistent icon set.

## Design system

| Item | Choice |
|---|---|
| Theme | Dark (`#05070b` base, `#0c1118` surface) |
| Primary | Blue `#3b7ddd` |
| Status colors | Green / Amber / Red |
| Fonts | Inter (UI), Instrument Serif italic (accent word) |
| Shapes | Pill buttons, large rounded cards, soft shadows |
| Spacing | 4px scale (Tailwind default) |

**Type scale**

| Element | Mobile | Tablet (md) | Desktop (lg) |
|---|---|---|---|
| Heading (h1) | text-3xl | text-4xl | text-5xl |
| Sub-heading (h2) | text-2xl | text-3xl | text-4xl |
| Paragraph | text-sm | text-base | text-lg |

## Responsive behavior

- **Navbar:** hamburger menu on mobile, pill nav from 768px up.
- **Hero:** heading and paragraph scale per breakpoint.
- **Dashboard:** keeps the exact same layout on all devices. It is designed on a fixed 1100px canvas and scaled down to fit via `ScaledFrame` (CSS transform + ResizeObserver).
- **Feature tabs:** horizontally scrollable on small screens.

## Structure

```
src/
  components/
    layout/    Navbar, FeatureTabs
    hero/      Hero
    ui/        Button, Card, Heading, Logo, StatCard, StatusBadge, DropdownMenu, ScaledFrame
    dashboard/ Dashboard, Sidebar, Topbar, TaskStatus, PriorityDonut, ActivityHeatmap, WorkloadTable
  App.jsx
  index.css    design tokens
```

## Run locally

```bash
npm install
npm run dev
```

## Credit

Layout inspired by a Behance dashboard design. All content, colors, theme and code are original.
