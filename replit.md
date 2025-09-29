# Supply Chain Timeline Application

## Overview

This is a React-based supply chain traceability application that provides end-to-end visibility for agricultural products from farm to consumer. The application displays an interactive timeline showing each step in the supply chain, including farmer harvest, cooperative collection, laboratory testing, processing, and manufacturing. It features comprehensive documentation tracking, status verification, and blockchain-based verification for transparency and trust.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS
- **Design System**: Material Design approach with agricultural green color palette and Roboto typography
- **Component Structure**: Modular timeline components for each supply chain step (Farmer, Cooperative, Lab, Processor, Manufacturer)

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Build System**: ESBuild for production bundling
- **Development**: Hot reload with Vite middleware integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation (expandable to database)
- **API Design**: RESTful endpoints with `/api` prefix

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL with Neon serverless integration
- **Schema**: User management with extensible design for supply chain entities
- **Migrations**: Drizzle Kit for database schema management
- **Session Storage**: PostgreSQL-based session store with connect-pg-simple

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL storage
- **User Schema**: Username/password authentication with UUID primary keys
- **Security**: Form validation with React Hook Form and Zod schemas

### External Dependencies
- **UI Components**: Radix UI for accessible, unstyled components
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Roboto family) for typography
- **Styling**: Tailwind CSS with custom design tokens
- **Date Handling**: date-fns for date formatting and manipulation
- **Form Management**: React Hook Form with Hookform resolvers for validation

### Development Tools
- **TypeScript**: Full type safety across client and server
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Hot Reload**: Vite with runtime error overlay
- **Linting**: TypeScript compiler for type checking
- **Build**: Separate client (Vite) and server (ESBuild) build processes

### Deployment Configuration
- **Static Assets**: Client builds to dist/public for static serving
- **Server**: Node.js with ES modules
- **Environment**: Development and production configurations
- **Database**: Environment-based DATABASE_URL configuration