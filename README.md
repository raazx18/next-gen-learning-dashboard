# Next-Gen Learning Dashboard

A futuristic student dashboard built with Next.js App Router, Supabase, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- Bento Grid Dashboard Layout
- Dark Theme UI
- Dynamic Course Cards from Supabase
- Animated Progress Indicators
- Framer Motion Staggered Animations
- Responsive Sidebar
- Mobile Bottom Navigation
- Loading Skeletons
- Error Handling
- Dynamic Lucide Icons

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion
- Lucide React

## Server / Client Component Split

### Server Components

- `app/page.tsx`
- Fetches course data directly from Supabase.
- Keeps database access on the server.

### Client Components

- Sidebar
- CourseCard
- HeroTile
- ActivityTile
- MobileNav

These components use Framer Motion and interactive UI features.

## Database

Table: `courses`

Columns:

- id
- title
- progress
- icon_name
- created_at

Course data is fetched dynamically from Supabase.

## Loading States

Implemented using `loading.tsx` with animated skeleton placeholders.

## Error Handling

Graceful fallback UI is displayed if Supabase data fetching fails.

## Responsive Design

### Desktop (>1024px)

- Full sidebar
- Bento grid layout

### Tablet (768px–1024px)

- Collapsible sidebar
- Two-column grid

### Mobile (<768px)

- Bottom navigation
- Single-column layout

## Challenges

- Mapping Lucide icons dynamically from database values.
- Implementing staggered animations without layout shifts.
- Maintaining a clean Server Component and Client Component separation.

## Run Locally

```bash
npm install
npm run dev
```
