# Match Tracker

A simple dates tracker app built with Next.js, Drizzle ORM, Neon Database, and Cloudinary.

## Features

- Track your matches with photos, videos, and notes
- Store WhatsApp and Telegram contact info
- Rate each match from 1-10
- Upload images and videos to Cloudinary
- Beautiful, responsive UI with CSS modules

## Setup

### 1. Install dependencies

```bash
bun install
```

### 2. Configure environment variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Neon Database URL
DATABASE_URL=postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. Set up the database

Push the schema to your Neon database:

```bash
bun run db:push
```

### 4. Run the development server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Database Commands

- `bun run db:generate` - Generate SQL migrations
- `bun run db:push` - Push schema changes to database
- `bun run db:studio` - Open Drizzle Studio to view/edit data

## Tech Stack

- **Framework**: Next.js 16
- **Database**: Neon (PostgreSQL)
- **ORM**: Drizzle ORM
- **File Storage**: Cloudinary
- **Styling**: CSS Modules
