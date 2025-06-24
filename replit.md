# CodeVente Website Project

## Overview
A comprehensive professional tech company website built with React + Tailwind CSS featuring modern design, animations, and full-stack functionality. The website showcases CodeVente's services in web development, digital marketing, SEO, UI/UX design, and professional courses.

## Project Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for page transitions and scroll animations
- **UI Components**: Shadcn/ui component library

### Backend (Node.js + Express)
- **Server**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage) for development
- **Validation**: Zod schemas for API validation
- **API Routes**: RESTful endpoints for forms and data

### Database Schema
- **contacts**: Contact form submissions
- **newsletters**: Newsletter subscriptions  
- **jobApplications**: Career applications with resume upload
- **courseEnrollments**: Course enrollment submissions

## Pages Structure
1. **Home** (`/`) - Hero section, services overview, testimonials, recent projects, featured courses
2. **About** (`/about`) - Company mission, vision, team, timeline
3. **Services** (`/services`) - Detailed service descriptions with CTAs
4. **Portfolio** (`/portfolio`) - Project showcase with filtering
5. **Courses** (`/courses`) - Professional training courses with enrollment
6. **Careers** (`/careers`) - Job openings and application form
7. **Contact** (`/contact`) - Contact form and company information
8. **404** - Custom error page

## Key Features
- Responsive design (mobile-first approach)
- SEO optimization with meta tags and Open Graph
- Form validation and submission
- File upload functionality (resume upload)
- Newsletter subscription
- Course enrollment system
- Job application system
- Animated UI elements
- Professional color scheme and typography

## Recent Changes
- ✅ Created comprehensive careers page with job application form
- ✅ Added courses page with 6 professional courses
- ✅ Integrated course enrollment system with backend
- ✅ Added courses to navigation and footer
- ✅ Featured courses section on homepage
- ✅ Full-stack form handling for all user interactions

## Technical Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion, Wouter
- **Backend**: Express.js, TypeScript, Zod validation
- **Storage**: In-memory (development), ready for database migration
- **Forms**: React Hook Form + Zod validation
- **UI**: Shadcn/ui components, Lucide React icons

## User Preferences
- Clean, professional design with blue/violet gradient theme
- Modern animations and smooth transitions
- Mobile-responsive design
- Form validation with clear error messaging
- SEO-optimized pages