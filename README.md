# Better-T-Stack

A modern CLI tool for scaffolding end-to-end type-safe TypeScript projects with best practices and customizable configurations

## Quick Start

```bash
# Using npm
npx create-better-t-stack@latest

# Using bun
bun create better-t-stack@latest

# Using pnpm
pnpm create better-t-stack@latest
```

## Features

- ⚡️ **Zero-config setup** with interactive CLI wizard
- 🔄 **End-to-end type safety** from database to frontend via tRPC
- 🧱 **Modern stack** with React, Hono/Elysia, and TanStack libraries
- 🗃️ **Database flexibility** with SQLite (Turso) or PostgreSQL options
- 🛠️ **ORM choice** between Drizzle or Prisma
- 🔒 **Built-in authentication** with Better-Auth
- 📱 **Optional PWA support** for mobile-friendly applications
- 🖥️ **Desktop app capabilities** with Tauri integration
- 📦 **Monorepo architecture** powered by Turborepo

## Repository Structure

This repository is organized as a monorepo containing:

- **CLI**: [`create-better-t-stack`](apps/cli) - The scaffolding CLI tool
- **Documentation**: [`web`](apps/web) - Official website and documentation

## Documentation

Visit [better-t-stack.pages.dev](https://better-t-stack.pages.dev) for full documentation, guides, and examples.

## Development

```bash
# Clone the repository
git clone https://github.com/better-t-stack/create-better-t-stack.git

# Install dependencies
bun install

# Start CLI development
bun dev:cli

# Start website development
bun dev:web
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Created by [Aman Varshney](https://github.com/AmanVarshney01) & [Nitish Singh](https://github.com/FgrReloaded)
