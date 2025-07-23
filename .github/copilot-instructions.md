<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# SnapFolio Portfolio Website

This is a modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Project Structure
- **Components**: All React components are in `src/components/`
- **Data**: Portfolio data is centralized in `src/data/portfolioData.js`
- **Contexts**: Theme context for dark mode in `src/contexts/`
- **Styling**: Tailwind CSS with custom configurations

## Key Features
- Fully responsive design (mobile, tablet, desktop)
- Dark mode toggle with persistent storage
- Smooth scroll animations using Framer Motion
- Portfolio sections: Home, Profile, Skills, Education, Projects, Activities, Contact
- Contact form with validation
- CV download functionality
- Social media integration

## Development Guidelines
- Use functional components with React hooks
- Follow Tailwind CSS utility-first approach
- Implement responsive design patterns
- Use Framer Motion for animations
- Maintain consistent component structure
- Keep data separated from components

## Styling Conventions
- Use custom Tailwind classes defined in `src/index.css`
- Dark mode classes with `dark:` prefix
- Consistent color scheme using primary colors
- Card-based layouts with shadows and hover effects

## Component Guidelines
- Each section is a separate component
- Use motion variants for consistent animations
- Implement proper accessibility features
- Handle loading states and error scenarios
- Use semantic HTML elements
