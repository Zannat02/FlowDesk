# FlowDesk: Responsive SaaS Landing Page

A dark-theme, fully responsive landing page for **FlowDesk**, a fictional project-management product. It was built as Task 1 of my internship: *prove you can build a clean, responsive interface before wiring up any backend.*

**Live demo:** [flow-desk-sage.vercel.app](https://flow-desk-sage.vercel.app/)



---

## Overview

The brief asked for a responsive landing page for a product of my choice, built from reusable components, with a consistent design system, deployed live.

I chose a **SaaS landing page** because it has many different layouts (navigation, hero, data previews, cards, pricing, footer). That makes it a good test of component structure and of how a layout behaves on mobile, tablet and desktop.

**Goals**

- Component-based structure with small, reusable pieces
- One consistent design system: color, type, spacing and hierarchy
- A layout that works on mobile, tablet and desktop
- Clean, readable code that is easy to extend

---

## Tech stack and why

| Tool | Purpose | Why I chose it |
|  ---   | ---   |    ---      |
| **React 19** | UI components | The page is made of repeated pieces (cards, badges, tables, buttons). Components let me build each one once and reuse it. |
| **Vite** | Build tool and dev server | Fast start-up and hot reload, simple production build. |
| **Tailwind CSS v4** | Styling | Mobile-first responsive utilities (`md:`, `lg:`) and design tokens kept in one file (`src/index.css`). |
| **lucide-react** | UI icons | One consistent icon set. |
| **react-icons** | Brand logos | Used in the integrations section. |
| **react-fast-marquee** | Logo strip | A tested marquee instead of hand-written CSS keyframes. |
| **motion** | Feature stack animation | Smooth looping animation with built-in reduced-motion support. |

---

## Page sections

| # | Section | What it does |
|---|  ---    |   ---        |
| 1 | **Navbar** | Pill navigation on desktop, floating overlay menu on mobile and tablet. |
| 2 | **Hero** | Main heading, short description, two call-to-action buttons. |
| 3 | **Dashboard preview** | A full dashboard (sidebar, stats, donut chart, heatmap, workload table) built with real components, not an image. |
| 4 | **Feature tabs** | A pill tab bar with four tabs that fits on one line on every device. |
| 5 | **Trusted by** | Infinite logo marquee with faded edges. |
| 6 | **Core features** | Animated feature stack on a 3D surface, a scaled tasks preview and an "explore" card. |
| 7 | **Why choose us** | Three cards, each with a live UI preview built from existing dashboard components. |
| 8 | **Pricing** | Three plans with the recommended plan highlighted. |
| 9 | **Integrations** | Elliptical rings with tool logos placed exactly on the ring path. |
| 10 | **Footer** | Brand block, three link columns, divider and copyright. |

A soft wave background sits behind the whole page and stays visible while scrolling.

---

## Design system

All tokens live in one place: the `@theme` block in `src/index.css`.

### Color

| Token | Value | Use |
|---|---|---|
| `bg` | `#05070b` | Page background |
| `surface` | `#0c1118` | Cards and panels |
| `surface-2` | `#121823` | Raised cards |
| `line` | `#1e2735` | Borders and dividers |
| `ink` / `ink-soft` / `ink-mute` | `#f3f6fb` / `#a7b1c2` / `#6b7686` | Primary, secondary and muted text |
| `primary` | `#3b7ddd` | Buttons, active states, charts |
| `ok` / `warn` / `bad` | green / amber / red | Status colors |

### Typography

- **Inter** for all interface text.
- **Instrument Serif (italic)** for one accent phrase per heading, a deliberate focal point.

| Element | Mobile | Tablet (`md`, 768px) | Desktop (`lg`, 1024px) |
|---|---|---|---|
| Heading (`h1`) | `text-3xl` | `text-4xl` | `text-5xl` |
| Sub-heading (`h2`) | `text-2xl` | `text-3xl` | `text-4xl` |
| Paragraph | `text-sm` | `text-base` | `text-lg` |

Headings use the reusable `Heading` component, so the scale is defined once.

### Spacing and shape

- Every section uses the same top spacing (`pt-20` on mobile, `md:pt-34` on tablet and desktop). Only the last section (the footer) adds bottom spacing. This keeps the gap between any two sections identical.
- Pill-shaped buttons, large rounded cards (`rounded-3xl`) and one soft shadow style.

### Visual hierarchy

Each section follows the same order: a badge, a large heading with one italic accent phrase, a supporting line, then the content.

---

## Responsive behavior

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | below 768px | Single column, hamburger menu, smallest type scale. |
| Tablet | 768px to 1023px | Single column with larger type, hamburger menu. |
| Desktop | 1024px and up | Multi-column layouts, full pill navigation. |

**Specific decisions**

- **Navbar:** the menu floats *over* the page as an overlay, so the hero never moves when it opens. It closes on outside click, `Esc`, link click, or when the screen grows to desktop.
- **Dashboard and previews:** each is designed at a fixed width and scaled to fit its container with the `ScaledFrame` component. They look identical on every device and only change size.
- **Feature tabs:** the same four tabs on every screen, always on one line.
- **Core features:** two columns on desktop (stack left, content right). On mobile and tablet the content comes first and the stack below, using CSS `order` with no duplicated markup.
- **Why choose us and Pricing:** three columns on desktop, one centered column on mobile and tablet.
- **Integrations:** rings are wide on desktop and tall on mobile and tablet. Tool badges scale with the screen width and stay on the rings at every size.
- **Footer:** brand and links side by side on desktop, stacked on smaller screens, with the link columns reflowing from three columns to two on mobile.

---

## Key implementation details

**Scaling fixed layouts (`ScaledFrame`).** A child is rendered at a fixed design width, then scaled with a CSS `transform` based on the container width (tracked with `ResizeObserver`). The wrapper height is updated so the page layout stays correct.

**Faded edges with `mask-image`.** Logo strip, feature stack, previews and rings fade at their edges using Tailwind arbitrary classes, for example `[mask-image:linear-gradient(...)]`. No extra images are needed.

**Icons exactly on the rings.** Each ring is a true ellipse (`border-radius: 50%`). Every tool badge sits inside an invisible box with the *same size* as its ring, and its position is calculated from an angle with `cos` and `sin`. Because the percentages are measured on the ring itself, the badges stay on the ring at every screen size.

**Reusable building blocks.** `Heading`, `Button`, `Card`, `Badge`, `StatCard`, `StatusBadge`, `DropdownMenu`, `FeatureItem`, `ChooseCard`, `PricingCard` and `FooterColumn` are each defined once and used across sections. The "Why choose us" previews reuse the real `ActivityHeatmap` and `WorkloadTable` from the dashboard.

**Accessibility.**
- Animations stop when the user has *reduce motion* enabled
- Visible keyboard focus styles
- `aria-label` and `aria-expanded` on the menu toggle
- Decorative elements are marked `aria-hidden`

---

## Project structure

```
src/
  main.jsx
  App.jsx                    renders the Home page
  index.css                  design tokens and global styles
  pages/
    Home.jsx                 page layout, composes all sections
  components/
    layout/                  Navbar, FeatureTabs, Footer, FooterColumn
    hero/                    Hero
    ui/                      Button, Card, Badge, Heading, Logo, StatCard,
                             StatusBadge, DropdownMenu, ScaledFrame,
                             WaveBackground, BrandLogo
    dashboard/               Dashboard, Sidebar, Topbar, TaskStatus,
                             PriorityDonut, ActivityHeatmap, WorkloadTable
    features/                FeatureStack, FeatureItem, TasksPreview,
                             ExploreCard, ChooseCard, EfficiencyChart
    pricing/                 PricingCard
    integrations/            IntegrationIcon
    sections/                TrustedBy, Features, WhyChooseUs,
                             Pricing, Integrations
```

`App.jsx` only renders `Home`. All layout logic lives in `pages/Home.jsx`.

---

## Getting started

**Requirements:** Node.js 18 or newer.

```bash
# 1. Clone the repository
git clone https://github.com/Zannat02/FlowDesk.git
cd FlowDesk

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the local address shown in the terminal (usually `http://localhost:5173`).

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Deployment

Deployed on **Vercel** from the `main` branch. Every push to `main` triggers a new deployment.

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |

---

## Scope and notes

This is a front-end project, so some parts are intentionally static:

- Dashboard numbers, team members, tasks and prices are **sample data**.
- Tabs, menu items and footer links demonstrate the UI states only; they do not load other pages.
- There is no backend, authentication or form handling. Those are the next tasks.

---

## Credit

The page layout was inspired by a Behance dashboard design. All content, colors, the dark theme and the code are original.

Brand logos in the integrations section are used for illustration only. FlowDesk is a fictional product and has no real integration with those tools.