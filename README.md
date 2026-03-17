# 🦜 Parakeet – Next.js Frontend

AI-powered language learning app. Mobile-first, desktop-compatible.

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
parakeet/
├── app/
│   ├── globals.css         # Global styles + CSS variables
│   ├── layout.tsx          # Root layout (app shell, fonts)
│   ├── page.tsx            # Home screen
│   ├── learn/page.tsx      # Learn / scenarios screen
│   ├── progress/page.tsx   # Progress & stats screen
│   └── profile/page.tsx    # Profile & settings screen
├── components/
│   ├── Header.tsx          # Top bar (logo + streak)
│   ├── BottomNav.tsx       # Bottom navigation (client, uses usePathname)
│   └── ConversationView.tsx # Full-screen AI chat overlay (client)
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home – XP hero, quick actions, stats, achievements |
| `/learn` | Scenario picker + adaptive lesson list |
| `/progress` | Fluency bars + weekly activity chart |
| `/profile` | User settings |

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** – Nunito + Fraunces

## Color Palette (Parakeet-inspired)

| Name | Hex |
|------|-----|
| Green Deep | `#2d7a3a` |
| Green Mid | `#4aab5a` |
| Aqua | `#3bbfb2` |
| Yellow | `#f5c842` |
| Cream | `#fdfaf3` |
