# Next.js MVC Template with Tailwind CSS, shadcn/ui, and Prisma

This is a template project for creating a Next.js application with Tailwind CSS, shadcn/ui, and Prisma. It follows the MVC architecture and is designed to be a starting point for your projects.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Bun](https://bun.sh/) - A modern build tool for JavaScript and TypeScript projects.
- [Supabase](https://supabase.io/) - An open-source alternative to Firebase.

### Installation

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/Mephisto-Grumpy/nextjs-mvc.git
cd nextjs-mvc
bun install
```

### Database Setup

Create a new Supabase project and set up the [environment variables](.env.example) in the `.env` file:

```bash
cp .env.example .env
```

Update the `.env` file with your Supabase credentials:

```bash
# Database Configuration for Prisma
DATABASE_URL=""
DIRECT_URL=""
```

Set up the database and run the migrations:

```bash
prisma migrate dev
```

### Running the Development Server

Start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Fonts

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Structure

This template follows the MVC architecture and includes the following structure:

- `components/` - Reusable UI components.
- `app/` - Application routes.
- `public/` - Public assets such as images and fonts.
- `lib/` - Utility functions and helpers.
- `prisma/` - Prisma schema and migrations.
- `models/` - Functions to interact with the database.
- `services/` - Functions that use models to interact with the database.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - Your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
