# Personal Portfolio

A modern developer portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS**, and animated UI components **Acternity UI**.

## Overview

This project powers the personal portfolio of **Oussama SAIDI** and includes:

- Hero/about section with animated effects
- Project showcase cards
- Skills carousel
- Work experience timeline/cards
- Contact form integration via EmailJS
- Social links and downloadable resume
- Sentry integration for error monitoring

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion / Motion
- React Three Fiber / Drei / Three.js
- EmailJS
- Sentry

## Getting Started

### 1) Install dependencies

```bash
npm ci
```

### 2) Configure environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

These values are required for the contact form in `components/Contact.tsx`.

### 3) Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev    # Start local dev server
npm run build  # Create production build
npm run start  # Run production server
npm run lint   # Run lint script
```

## Project Structure

```text
app/          # Next.js App Router pages/layout
components/   # Portfolio UI sections and reusable UI components
data/         # Portfolio content (projects, skills, navigation, social links)
public/       # Static assets (images, icons, resume, etc.)
```

