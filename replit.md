# replit.md

## Overview

CodeVente is a modern full-stack web application that serves as a digital agency website. It showcases services, portfolio projects, team information, and provides contact forms for client inquiries and job applications. The application features a responsive design with modern UI components and comprehensive form handling capabilities.

## System Architecture

The application follows a monorepo structure with a clear separation between client-side and server-side code:

- **Frontend**: React-based SPA with TypeScript, built using Vite
- **Backend**: Express.js server with TypeScript 
- **Database**: PostgreSQL with Drizzle ORM for data modeling
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Deployment**: Configured for Replit autoscale deployment

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions and interactions
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for form submissions and data retrieval
- **Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling middleware

### Data Layer
- **Database**: PostgreSQL 16
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Defined in shared directory for both client and server usage
- **Migrations**: Drizzle Kit for database schema management

### UI/UX Design System
- **Design Language**: Modern, professional aesthetic with gradient accents
- **Color Palette**: Blue, violet, cyan, and emerald primary colors
- **Typography**: Inter font family for clean readability
- **Components**: Comprehensive set of reusable UI components
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## Data Flow

1. **User Interaction**: Users interact with React components in the browser
2. **Form Submission**: Forms use React Hook Form with Zod validation
3. **API Requests**: TanStack Query manages HTTP requests to Express endpoints
4. **Server Processing**: Express routes handle requests with validation and business logic
5. **Database Operations**: Drizzle ORM performs type-safe database operations
6. **Response Handling**: Responses flow back through the same chain with error handling

### Database Schema
- **users**: User authentication and management
- **contacts**: Contact form submissions with service inquiries
- **newsletters**: Email newsletter subscriptions
- **job_applications**: Career application submissions with file uploads

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm & drizzle-kit**: Database ORM and migration tools
- **@tanstack/react-query**: Server state management
- **react-hook-form & @hookform/resolvers**: Form handling and validation
- **zod**: Runtime type validation
- **framer-motion**: Animation library

### UI Dependencies
- **@radix-ui/react-***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **cmdk**: Command palette component

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type safety and development experience
- **tsx**: TypeScript execution for development

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Development**: `npm run dev` runs the Express server with Vite middleware
- **Build Process**: 
  - Frontend: Vite builds client code to `dist/public`
  - Backend: esbuild bundles server code to `dist/index.js`
- **Production**: `npm run start` runs the built Express server
- **Database**: Uses DATABASE_URL environment variable for PostgreSQL connection
- **Port Configuration**: Server runs on port 5000, exposed on port 80

### Environment Requirements
- Node.js 20
- PostgreSQL 16
- DATABASE_URL environment variable

## Changelog

```
Changelog:
- June 24, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```