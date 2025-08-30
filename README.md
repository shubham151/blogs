# Blog Management System

A responsive React application with WordPress REST API integration.

- **Live Demo:** https://blogs-black-ten.vercel.app/
- **Repository:** https://github.com/shubham151/blogs

## Setup Instructions

### Prerequisites

- Node.js (version 16+)
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/shubham151/blogs
cd blogs

# Install dependencies
npm install

# Start development server
npm run dev

```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Features Implemented

### Core Requirements

- Responsive design across all devices
- WordPress REST API integration (https://futureoffounders.com/wp-json/wp/v2/posts)
- Dynamic content fetching and display
- Mobile-first responsive approach

### Additional Features

- **Search and Filtering:** Real-time search with sorting options (latest, oldest, title)
- **Pagination:** Efficient content navigation with page controls

### Technical Enhancements

- Custom React hooks for state management
- CSS Modules for scoped styling
- Memoized components for performance
- Error boundaries and fallback states

## API Integration

- Fetches blog posts with pagination
- Implements search functionality
- Handles individual post retrieval
- Includes error handling and loading states

## Assumptions Made

- **WordPress API Structure:** Assumed standard WordPress REST API response format
- **Featured Media:** Used placeholder images due to API limitations with featured media URLs
- **Categories:** Implemented basic category display with fallback text
- **Content Safety:** Assumed content is properly sanitized from WordPress
