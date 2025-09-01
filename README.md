# Modern React Frontend Website Blueprint

A comprehensive, production-ready React frontend application built with Vite, featuring multilingual support, campaign mode, and a scalable component architecture. This project serves as a blueprint for building fully-fledged frontend websites with modern best practices.

## 🚀 Features

- **Multilingual Support**: Built-in Arabic (RTL) and English (LTR) language switching
- **Campaign Mode**: Special landing page mode with different navigation and footer
- **Modern React Architecture**: Built with React 18, React Router v6, and modern hooks
- **Performance Optimized**: Lazy loading, code splitting, and optimized asset loading
- **SEO Ready**: React Helmet integration for meta tags and canonical URLs
- **Responsive Design**: Tailwind CSS with custom styling and animations
- **Form Handling**: Complete form system with validation using Yup
- **Animation Library**: Framer Motion integration for smooth animations
- **Map Integration**: Mapbox GL integration for location services

## 🏗️ Architecture Overview

This application follows a modern, scalable architecture pattern with clear separation of concerns:

### Core Technologies
- **React 18** with modern hooks and Suspense
- **Vite** for fast development and optimized builds
- **React Router v6** for client-side routing
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations
- **React Helmet Async** for SEO management

### Key Architectural Patterns
- **Context-based State Management** for global state (language, theme)
- **Lazy Loading** for code splitting and performance
- **Component Composition** with reusable UI components
- **Data-driven Content** with centralized content management
- **Hook-based Logic** for reusable business logic

## 📁 Project Structure

```
src/
├── assets/                    # Static assets and data
│   ├── data/                 # Content management
│   │   ├── en/              # English content
│   │   ├── ar/              # Arabic content
│   │   ├── config.js        # App configuration
│   │   └── service-cases.js # Service data
│   ├── fonts/               # Custom fonts
│   ├── images/              # Image assets
│   └── styles/              # Global styles and CSS modules
├── components/              # Reusable UI components
│   ├── nav/                # Navigation components
│   ├── footer/             # Footer components
│   ├── form/               # Form components
│   ├── home/               # Home page components
│   ├── reviews/            # Review components
│   └── services/           # Service-related components
├── contexts/               # React contexts
│   └── LanguageContext.jsx # Language management
├── pages/                  # Page components
│   ├── services/           # Service pages
│   ├── Home.jsx           # Home page
│   ├── PrivacyPolicy.jsx  # Privacy policy
│   └── NotFound.jsx       # 404 page
├── utility/               # Utility functions and hooks
│   └── hooks/            # Custom hooks
│       ├── form/         # Form-related hooks
│       ├── useCampaignMode.jsx
│       ├── useCarousel.jsx
│       └── useDataLoader.jsx
├── App.jsx               # Main app component
└── main.jsx             # Application entry point
```

## 🌐 Multilingual Architecture

The application supports both English and Arabic with RTL support:

### Language Management
- **LanguageContext**: Global language state management
- **URL-based Language Detection**: Language detection from URL paths (`/en`, `/ar`)
- **LocalStorage Persistence**: Language preference saved locally
- **RTL Support**: Automatic text direction switching for Arabic

### Content Structure
```
src/assets/data/
├── en/                   # English content
│   ├── generals.js      # General content
│   ├── nav-menu.js      # Navigation items
│   ├── footer.js        # Footer content
│   ├── form.js          # Form labels and messages
│   ├── reviews.js       # Customer reviews
│   └── services/        # Service-specific content
└── ar/                  # Arabic content (same structure)
```

## 🎯 Campaign Mode

The application features a special campaign mode for landing pages:

- **Automatic Detection**: Campaign mode activated for `/campaign` routes
- **Different UI**: Campaign-specific navigation and footer components
- **SEO Handling**: Special canonical URL handling for campaigns
- **Flexible Configuration**: Easy to extend for different campaign types

## 🧩 Component Architecture

### Component Categories

1. **Layout Components**
   - `Nav` / `CampaignNav`: Navigation bars
   - `Footer` / `CampaignFooter`: Footer components
   - `PageLogic`: Page wrapper with SEO and routing logic

2. **UI Components**
   - `Cards`: Various card layouts
   - `Tabs`: Tabbed interfaces
   - `FloatingButtons`: Persistent action buttons
   - `ProgressiveImage`: Optimized image loading

3. **Form Components**
   - `Form`: Complete form system
   - `Input`: Styled input components
   - `Button`: Action buttons
   - `Validation`: Form validation with Yup

4. **Animation Components**
   - `AnimatedWrapper`: Animation containers
   - `Fade`: Fade animations
   - `StaggeredList`: Staggered animations

## 🔧 Configuration

### Vite Configuration
- **Path Aliases**: Clean import paths with `@` prefixes
- **Asset Handling**: Support for fonts and images
- **Build Optimization**: Configured for production builds

### App Configuration (`src/assets/data/config.js`)
```javascript
export const BASE = "/";
export const DOMAIN = "companyname";
export const AVAILABLE_LANGUAGES = ["en", "ar"];
export const CAMPAIGNS_LIST = ["service"];
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📱 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌍 Internationalization

### Adding New Languages

1. Create language directory in `src/assets/data/[lang]/`
2. Add language to `AVAILABLE_LANGUAGES` in config
3. Create content files matching the English structure
4. Update language context if needed

### Content Management

All content is managed through JavaScript files in the `data` directory:
- **Centralized**: All content in one place
- **Type-safe**: JavaScript objects with clear structure
- **Version controlled**: Content changes tracked in git
- **Developer friendly**: Easy to edit and maintain

## 🎨 Styling

### Tailwind CSS
- Utility-first CSS framework
- Custom configuration in `tailwind.config.js`
- Responsive design built-in

### Custom Styles
- Global styles in `src/assets/styles/index.css`
- CSS modules for component-specific styles
- Custom fonts and animations

## 🔍 SEO Features

- **React Helmet Async**: Dynamic meta tags
- **Canonical URLs**: Proper canonical URL handling
- **Language Tags**: Proper language attributes
- **Structured Data**: Ready for structured data implementation

## 🧪 Development Best Practices

### Code Organization
- **Feature-based Structure**: Components grouped by feature
- **Custom Hooks**: Reusable logic in custom hooks
- **Context Pattern**: Global state management
- **Lazy Loading**: Performance optimization

### Performance
- **Code Splitting**: Automatic code splitting with React.lazy
- **Asset Optimization**: Optimized images and fonts
- **Bundle Analysis**: Built-in bundle analysis tools

## 📦 Dependencies

### Core Dependencies
- `react` & `react-dom` - React framework
- `react-router-dom` - Client-side routing
- `react-helmet-async` - SEO management
- `framer-motion` - Animation library
- `tailwindcss` - CSS framework
- `yup` - Form validation

### Development Dependencies
- `vite` - Build tool and dev server
- `@vitejs/plugin-react` - React plugin for Vite
- `eslint` - Code linting
- `autoprefixer` - CSS vendor prefixes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code examples

---

**Built with ❤️ using modern React patterns and best practices**