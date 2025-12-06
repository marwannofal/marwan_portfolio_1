# 🌐 Personal Portfolio – Built with Next.js, React, TypeScript & Tailwind CSS

A modern, responsive, and blazing-fast personal portfolio website built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

Use it to showcase your projects, skills, experience, and contact information in a clean and professional way.

---

## ✨ Features

- ⚡ **Fast & SEO-friendly**
  - Server-side rendering (SSR) & static generation (SSG) with Next.js
  - Optimized meta tags, Open Graph, and social sharing
- 📱 **Fully responsive**
  - Looks great on mobile, tablet, and desktop
- 🎨 **Modern UI**
  - Built with Tailwind CSS utility classes
  - Easy to customize colors, fonts, spacing, and components
- 🧩 **Component-based architecture**
  - Reusable UI components for sections like:
    - Hero
    - About
    - Skills / Tech Stack
    - Projects
    - Experience / Timeline
    - Contact
- 🧠 **Type-safe**
  - Written in **TypeScript** for better DX and fewer runtime errors
- 🌗 (Optional) Dark mode support
- 🚀 Easy to deploy on **Vercel**, **Netlify**, or any Node-compatible hosting

---

## 🧱 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React-based)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI / Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** <!-- e.g. Heroicons / Lucide / React Icons -->
- **Deployment:** <!-- e.g. Vercel / Netlify / Custom VPS -->

---

## 📂 Project Structure

> This is the default structure. Update it if your layout is different.

```bash
.
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── app/                # Next.js App Router pages/layouts (if using App Router)
│   │   ├── layout.tsx
│   │   ├── page.tsx        # Home page (portfolio main)
│   │   └── (sections)/     # Optional grouped routes/sections
│   ├── components/         # Reusable UI components
│   │   ├── layout/         # Layout-related components (Navbar, Footer, etc.)
│   │   ├── sections/       # Hero, About, Projects, Contact, etc.
│   │   └── ui/             # Buttons, cards, badges, etc.
│   ├── lib/                # Helpers, utilities, constants
│   ├── data/               # Static data: projects, skills, experience
│   └── styles/             # Global styles (if any)
├── .env.example            # Example env vars (if needed)
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

If you’re using the **Pages Router** (older Next.js structure), your main directory will be `/pages` instead of `/app`.

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have:

- **Node.js** ≥ 18.x
- A package manager:
  - `npm` or `yarn` or `pnpm` (choose one)

Check your versions:

```bash
node -v
npm -v
```

### 2. Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-portfolio-repo>.git
cd <your-portfolio-repo>
```

### 3. Install Dependencies

Using **npm**:

```bash
npm install
```

Or with **yarn**:

```bash
yarn install
```

Or with **pnpm**:

```bash
pnpm install
```

### 4. Environment Variables (Optional)

If you’re using any environment variables (e.g. for analytics, email API, etc.):

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Fill in your values:

   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXX
   # Add more as needed
   ```

> If you’re not using env vars, you can skip this step.

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Then open your browser at:

```text
http://localhost:3000
```

You now have the portfolio running locally 🎉

---

## 📦 Available Scripts

Defined in `package.json` (adjust if yours differ):

```jsonc
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  }
}
```

- `dev` – Run the project in development mode
- `build` – Build the production-ready app
- `start` – Start the production server (after `build`)
- `lint` – Run ESLint for code quality
- `format` – Format the code using Prettier (if configured)

---

## 🎨 Customization

### Tailwind Theme

All design tokens (colors, fonts, spacing, etc.) are configured in:

```text
tailwind.config.ts
```

You can customize:

- `theme.extend.colors` – brand colors & accents
- `fontFamily` – change fonts (e.g. Inter, Poppins, etc.)
- `screens` – responsive breakpoints

Example snippet:

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        DEFAULT: '#2563EB',
        light: '#60A5FA',
        dark: '#1D4ED8'
      }
    }
  }
}
```

### Content (About, Skills, Projects, etc.)

All portfolio data is stored in structured files in `src/data/`:

```ts
// src/data/projects.ts
export const projects = [
  {
    title: 'ClassVera E-Learning Platform',
    description: 'Full-stack Moodle-based platform with custom plugins.',
    techStack: ['PHP', 'Moodle', 'MariaDB', 'Tailwind'],
    link: 'https://your-project-link.com',
    github: 'https://github.com/your-username/your-project'
  }
];
```

> Just update these arrays (projects, skills, experience) instead of editing JSX everywhere.

---

## ✅ Code Quality

This project uses:

- **ESLint** – linting and best practices
- **TypeScript** – strong typing
- (Optional) **Prettier** – consistent formatting

You can run:

```bash
npm run lint
# and if configured
npm run format
```

---

## 🚢 Deployment

The easiest way to deploy a Next.js app is via **Vercel**:

1. Push your repo to GitHub / GitLab / Bitbucket
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Set environment variables (if any)
5. Deploy

Other options:

- **Netlify**
- **Render**
- **Custom VPS / Docker**

---

## 👨‍💻 Author

**Marwan Nofal**
Full-Stack Developer – React, .NET, PHP/Moodle, Django, and more.

- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: <!-- Add your LinkedIn -->
- Portfolio: https://your-domain.com

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.


---

## ⭐ Support

If you like this portfolio:

- Star the repo ⭐
- Fork it and customize it
- Share it with other developers
