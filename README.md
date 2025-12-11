# Personal Homepage

A modern, responsive personal portfolio website built with Svelte, Tailwind CSS, and Vite. Features multilingual support (English, German, Czech), dark mode, smooth animations, and a containerized setup with Docker.

## Features

- **Modern Design**: Clean, colorful, and creative design with Tailwind CSS
- **Multilingual Support**: English, German, and Czech translations
- **Dark Mode**: Automatic theme detection with persistent user preference
- **Responsive Layout**: Works seamlessly on all device sizes
- **Contact Form**: Integrated with Formspree for email submissions
- **Smooth Animations**: Fade-in and slide animations for visual appeal
- **Resume Download**: Easy one-click resume download
- **Social Links**: Quick access to social profiles and contact options
- **Docker Support**: Fully containerized for easy deployment

## Project Structure

```
├── src/
│   ├── app.svelte              # Main app component with navigation
│   ├── main.js                 # Vite entry point
│   ├── styles.css              # Global styles and animations
│   ├── app.html                # HTML template
│   ├── lib/
│   │   ├── components/         # Reusable section components
│   │   ├── data/               # Content data files
│   │   ├── i18n.js             # Translations
│   │   └── store.js            # Svelte stores
│   └── routes/                 # Page routes
├── public/                     # Static assets (place resume.pdf here)
├── Dockerfile                  # Docker configuration
├── docker-compose.yml          # Docker Compose configuration
└── tailwind.config.js          # Tailwind CSS configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for containerized development)

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

### Docker Setup

1. **Build and run with Docker Compose**:
   ```bash
   docker-compose up --build
   ```
   The app will be available at `http://localhost:3000`

2. **Build Docker image**:
   ```bash
   docker build -t personal-homepage .
   ```

3. **Run container**:
   ```bash
   docker run -p 3000:3000 personal-homepage
   ```

## Customization

### Content Management

All content is managed through data files in `src/lib/data/`:
- `experience.js` - Work experience entries
- `education.js` - Education history
- `skills.js` - Skills and proficiency levels
- `projects.js` - Project portfolio
- `social.js` - Social media links

### Translations

Translations are in `src/lib/i18n.js`. Add new languages by extending the translations object:

```javascript
const translations = {
  en: { /* English translations */ },
  de: { /* German translations */ },
  cs: { /* Czech translations */ },
  fr: { /* Add French here */ }
}
```

### Resume Download

1. Place your resume PDF file in the `public/` directory
2. Name it `resume.pdf`
3. The download link in the contact section will work automatically

### Contact Form

The contact form uses Formspree for email submissions:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace `YOUR_FORM_ID` in `src/lib/components/ContactSection.svelte` with your actual form ID

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Dark Mode**: Configured with `darkMode: 'class'` in `tailwind.config.js`
- **Custom Colors**: Extend theme in `tailwind.config.js`
- **Animations**: Custom animations defined in `src/styles.css`

## Deployment

### Free Hosting Options

1. **Netlify** (recommended for serverless):
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Vercel**:
   - Import project from GitHub
   - Auto-detected build settings
   - One-click deployment

3. **GitHub Pages**:
   - Use `@sveltejs/adapter-static`
   - Configure GitHub Actions for auto-deployment

4. **Any Docker-compatible platform**:
   - Use the provided Dockerfile
   - Deploy to cloud services like Railway, Render, or Heroku

## Development Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Run type checking
npm run check:watch  # Watch mode type checking
```

## Color Scheme

The site uses a modern color palette:
- Primary: Blue (`#2563eb`)
- Secondary: Purple (`#9333ea`)
- Accent: Amber (`#f59e0b`)

Customize these in `tailwind.config.js` and `src/styles.css`.

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## Performance

- Optimized build size (~40KB gzipped)
- Lazy loading for images
- Smooth animations with CSS transforms
- Fast cold start with Vite

## Future Enhancements

Consider these additions:
- Blog section with markdown support
- Portfolio image gallery with lightbox
- Analytics integration
- SEO optimization
- PDF resume generation
- CMS integration for easy content updates

## License

MIT - Feel free to use this template for your portfolio

## Support

For issues or questions:
1. Check the existing code comments
2. Review the official documentation:
   - [Svelte](https://svelte.dev/)
   - [Tailwind CSS](https://tailwindcss.com/)
   - [Vite](https://vitejs.dev/)
3. Open an issue in the repository

---

**Ready to customize?** Start by editing the data files in `src/lib/data/` and translations in `src/lib/i18n.js`. Good luck!
