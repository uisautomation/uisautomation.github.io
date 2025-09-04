# UIS Automation Components

A modern React component library for the University of Cambridge UIS Automation team, built with TypeScript, Material-UI (MUI), and React Styleguidist.

## 🚀 Features

- **Modern React 18** with TypeScript support
- **Material-UI (MUI) v5** for consistent design system
- **Component Documentation** with React Styleguidist
- **Automated Testing** with Vitest and Testing Library
- **GitHub Actions CI/CD** for automated building and deployment
- **ESLint & Prettier** for code quality and formatting
- **Comprehensive Type Definitions** for all components

## 📦 Components

### AppBar
An application bar which shows the current document's title with responsive hamburger menu for small screens.

### NavigationPanel
A comprehensive navigation drawer system including:
- **NavigationPanel**: Main container component
- **NavigationPanelLogo**: University branding with project status badge
- **NavigationPanelAvatar**: User profile display
- **NavigationPanelSection**: Navigation link grouping
- **NavigationPanelSectionAnchor**: External navigation links
- **NavigationPanelSectionLink**: Internal router navigation
- **NavigationPanelFooter**: Footer with UIS DevOps attribution
- **NavigationPanelFooterLink**: Footer link components

### ChooseColumnsDialog
An interactive dialog for customizing table column selection and ordering with drag-and-drop support.

## 🛠️ Development

### Prerequisites

- Node.js 18 or higher
- npm 8 or higher

### Installation

```bash
npm install
```

### Development Scripts

```bash
# Start development server for components
npm run styleguidist

# Build production documentation
npm run styleguidist:build

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npx tsc --noEmit
```

### Building

```bash
# Build the documentation site
npm run styleguidist:build
```

The build output will be in the `build/` directory, ready for deployment to GitHub Pages.

## 🧪 Testing

The project uses Vitest with React Testing Library for comprehensive testing:

```bash
# Run all tests
npm run test

# Run tests in watch mode (development)
npm run test -- --watch

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## 📝 Component Documentation

The components are documented using React Styleguidist. Visit the live documentation at [https://uisautomation.github.io](https://uisautomation.github.io) or run locally:

```bash
npm run styleguidist
```

This will start a development server with hot reloading for the component documentation.

## 🚀 Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

```bash
# Build the documentation
npm run styleguidist:build

# The build/ directory can then be deployed to any static hosting service
```

## 🔧 Configuration

### TypeScript

- `tsconfig.json`: Main TypeScript configuration
- `tsconfig.styleguidist.json`: Specific configuration for React Styleguidist
- `tsconfig.node.json`: Configuration for build tools

### Styling

The components use Material-UI (MUI) v5 with the styled-components API for custom styling.

### Linting

ESLint is configured with TypeScript and React rules. Prettier is used for code formatting.

## 📁 Project Structure

```
├── .github/workflows/     # GitHub Actions CI/CD
├── src/
│   ├── components/        # React components
│   │   ├── AppBar/        # AppBar component
│   │   ├── NavigationPanel/ # Navigation components
│   │   └── ChooseColumnsDialog/ # Dialog components
│   ├── types/             # TypeScript type definitions
│   └── test/              # Test configuration
├── build/                 # Built documentation (auto-generated)
└── styleguide.config.cjs  # React Styleguidist configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and add tests
4. Run the test suite: `npm run test`
5. Lint your code: `npm run lint`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📄 License

This project is part of the University of Cambridge UIS Automation infrastructure.

## 🔗 Links

- [Live Documentation](https://uisautomation.github.io)
- [UIS DevOps Documentation](https://guidebook.devops.uis.cam.ac.uk/en/latest/)
- [React Styleguidist](https://react-styleguidist.js.org/)
- [Material-UI (MUI)](https://mui.com/)

---

Made with ❤️ by [UIS DevOps](https://guidebook.devops.uis.cam.ac.uk/en/latest/)  
© 2024 University of Cambridge