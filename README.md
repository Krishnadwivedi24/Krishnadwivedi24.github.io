# Krishna Dwivedi — Personal Portfolio

A minimalist, responsive, single-page personal portfolio for **Krishna Dwivedi**, pursuing B.Tech in Computer Science and Engineering (Artificial Intelligence).

Built with Next.js (App Router), TypeScript, and Tailwind CSS, featuring a strict monochrome design system and a functional light/dark mode toggle.

## ✨ Features

- **Strict Monochrome Design System**: Crafted exclusively with black, white, and neutral gray shades. No colors, gradients, or distractions.
- **Light / Dark Mode**: Default dark theme with a smooth toggle to light mode, persisted via `localStorage` and zero theme flashing (FOUC).
- **Single-Page Flow**:
  - **Hero**: Clean typographic statement and introduction.
  - **About Me**: Academic background and engineering philosophy.
  - **What I'm Learning**: Four focus areas (Programming, Problem Solving, Computer Science, Artificial Intelligence).
  - **Current Focus**: Compact editorial overview of current goals.
  - **Contact**: Minimal text links for Email (`mailto:`), LinkedIn, and GitHub without backend dependencies.
  - **Footer**: Subtle degree, copyright, and platform notes.
- **Static Export**: Configured with Next.js `output: 'export'` for fast, serverless hosting on GitHub Pages.
- **Automated Deployment**: GitHub Actions workflow included to build and deploy to GitHub Pages automatically on push to `main`.
- **Accessible & Responsive**: Fully responsive across mobile, tablet, and desktop with keyboard navigation, reduced motion support, and WCAG-compliant contrast.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Export)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm (or pnpm / yarn)

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for static export

```bash
npm run build
```

The optimized static files will be exported to the `out/` directory.

## 📝 Customization

All personal details, learning categories, and contact information are centralized in:

```
data/profile.ts
```

Simply update the values in `profile` to change any text, links, or sections.
