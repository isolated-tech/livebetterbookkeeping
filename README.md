# Live Better Bookkeeping LLC

A professional bookkeeping services website built with Next.js, TypeScript, and Tailwind CSS.

## Overview

Live Better Bookkeeping LLC provides comprehensive bookkeeping solutions for small businesses. This website showcases the company's services, expertise, and client testimonials, making it easy for potential clients to understand the value proposition and get in touch.

## Features

- **Modern, responsive design** with a clean, professional look
- **Service showcase** highlighting key bookkeeping offerings
- **About section** featuring Jeff, the professional bookkeeper
- **Pricing tiers** with transparent monthly pricing options
- **Client testimonials** to build trust and credibility
- **Contact form** for easy client inquiries
- **Mobile-optimized** navigation and layout

## Tech Stack

- **Framework:** Next.js 15.4 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom animations
- **UI Components:** Radix UI primitives with shadcn/ui
- **Icons:** Lucide React
- **Font:** Geist (auto-optimized with Next.js)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd livebetterbookkeeping
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and Tailwind directives
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Homepage with all sections
│   ├── components/
│   │   ├── ui/             # Reusable UI components (shadcn/ui)
│   │   ├── contact-form.tsx # Contact form component
│   │   ├── mobile-menu.tsx  # Mobile navigation menu
│   │   ├── pricing-section.tsx # Pricing cards component
│   │   └── testimonials.tsx # Client testimonials carousel
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets (images, etc.)
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json            # Project dependencies
```

## Key Components

- **Homepage (`page.tsx`)**: Contains all main sections including hero, about, services, pricing, testimonials, and contact
- **Contact Form**: Interactive form with validation for client inquiries
- **Mobile Menu**: Responsive navigation for mobile devices
- **Pricing Section**: Three-tier pricing display with feature lists
- **Testimonials**: Client reviews with carousel functionality

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed with automatic SSL and global CDN

For other deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

© 2025 Live Better Bookkeeping LLC. All rights reserved.