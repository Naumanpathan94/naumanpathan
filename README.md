# Rest Express Project

## Overview
This project is a modern web application built with a combination of Express.js for the backend and React with Vite for the frontend. It uses TypeScript for type safety and Drizzle ORM for database interactions. The project is designed to be modular and scalable, leveraging popular libraries and tools for a smooth development experience.

## Features
- Express.js backend with TypeScript support
- React frontend with Vite build tool
- Tailwind CSS for styling with animation support
- Drizzle ORM for database management
- React Query for data fetching and caching
- Authentication support with Passport.js
- Modular UI components using Radix UI and custom hooks
- Responsive design and accessibility considerations

## Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd PortfolioClone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server with hot reloading for both backend and frontend:
```bash
npm run dev
```
This will run the Express server and Vite frontend concurrently.

### Build
To build the project for production:
```bash
npm run build
```
This will build the frontend assets and bundle the backend server code.

### Start
To start the production server:
```bash
npm start
```

## Project Structure
- `client/` - React frontend source code
- `server/` - Express backend source code
- `shared/` - Shared schemas and utilities
- `drizzle.config.ts` - Drizzle ORM configuration
- `vite.config.ts` - Vite configuration for frontend
- `package.json` - Project metadata and scripts

## Scripts
- `dev` - Run development server
- `build` - Build frontend and backend for production
- `start` - Start production server
- `check` - Run TypeScript type checks
- `db:push` - Push database schema changes using Drizzle

## Dependencies
Key dependencies include:
- Express.js
- React and React DOM
- Vite
- Tailwind CSS
- Drizzle ORM
- Passport.js for authentication
- Radix UI components
- React Query

## Contributing
Contributions are welcome! Please open issues or pull requests for bug fixes, features, or improvements.

## License
This project is licensed under the MIT License.
