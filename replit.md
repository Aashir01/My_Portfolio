# Overview

This is a full-stack web application built with React (frontend) and Express.js (backend) that serves as an AI Engineer's portfolio website. The application features a modern, responsive design showcasing an AI professional's experience, skills, projects, publications, and contact information. The frontend is built with React, TypeScript, and modern UI components using shadcn/ui, while the backend provides a foundation for API endpoints and data persistence.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system variables and dark mode support
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Structure**: Modular component architecture with separate sections (Hero, About, Skills, Projects, Publications, Contact)

## Backend Architecture
- **Framework**: Express.js with TypeScript for server-side logic
- **Development**: Hot reload support with tsx for TypeScript execution
- **Routing**: Centralized route registration pattern with `/api` prefix convention
- **Storage Interface**: Abstract storage interface pattern allowing for flexible data layer implementation
- **Error Handling**: Centralized error handling middleware with consistent error responses
- **Logging**: Custom request logging with timing and response capture for API endpoints

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM with connection pooling via Neon serverless
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for development and testing
- **Session Management**: PostgreSQL session store using connect-pg-simple for persistent sessions

## Authentication and Authorization
- **Session-based**: Built-in session management infrastructure with PostgreSQL persistence
- **User Schema**: Basic user model with username/password fields and UUID primary keys
- **Validation**: Zod schema validation for user input and data integrity

## External Dependencies
- **UI Framework**: Comprehensive shadcn/ui component system with Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS for modern CSS processing
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Hookform Resolvers for form validation
- **Database**: Drizzle ORM with Neon serverless PostgreSQL adapter
- **Development**: Replit-specific tooling for cloud development environment integration
- **Fonts**: Google Fonts integration (Inter, Fira Code, Architects Daughter, DM Sans, Geist Mono)
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel**: Embla Carousel for image/content carousels
- **Utilities**: clsx and tailwind-merge for conditional CSS classes