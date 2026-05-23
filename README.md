# Kraiwith Kamchu Portfolio

Personal portfolio website for **Kraiwith Kamchu**, built with Angular and TypeScript.

Live site: [https://kraiwith.github.io/](https://kraiwith.github.io/)

## Overview

This project is a modern frontend portfolio focused on clean UI, accessible interactions, and maintainable Angular application structure. It presents developer profile information, technical skills, work focus areas, and contact links in a responsive single-page experience.

## Tech Stack

- Angular 21
- TypeScript
- Bun
- Bootstrap 5
- Bootstrap Icons
- RxJS
- Vitest

## Features

- Responsive portfolio homepage
- Lazy-loaded Angular routes
- Light, dark, and system theme switching
- Accessible navigation and contact links
- Bootstrap-based design system with custom theme utilities
- Lab route for UI and theme component checks
- GitHub Pages deployment workflow

## Getting Started

Install dependencies:

```bash
bun install
```

Start the local development server:

```bash
bun start
```

The app will be available at:

```text
http://localhost:4200/
```

## Available Scripts

Run the Angular CLI through Bun:

```bash
bun run ng
```

Build the production app:

```bash
bun run build
```

Build in watch mode for development:

```bash
bun run watch
```

Run tests:

```bash
bun test
```

## Project Structure

```text
src/
  app/
    pages/
      home/       Portfolio homepage
      lab/        UI and theme testing page
    services/     Shared app services
    app.routes.ts Lazy-loaded route definitions
  styles.scss     Global styles and Bootstrap customizations
public/           Static public assets
.github/
  workflows/      GitHub Pages deployment workflow
```

## Deployment

The site is deployed to GitHub Pages using GitHub Actions.

Deployment runs automatically when changes are pushed to the `main` branch. The workflow installs dependencies with Bun, builds the Angular app for production, uploads the `dist/` output, and publishes it through GitHub Pages.

## Development Notes

This codebase follows modern Angular conventions:

- Standalone components
- Lazy-loaded feature routes
- Signal-based state where local state is needed
- `ChangeDetectionStrategy.OnPush` for components
- Strict TypeScript practices
- Accessible UI patterns with attention to WCAG AA basics

