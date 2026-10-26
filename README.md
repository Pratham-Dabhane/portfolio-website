# PRA Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio features a clean, minimal design inspired by modern web design principles with smooth animations and excellent user experience.

## Features

- 🎨 **Modern Design**: Clean, minimal aesthetic with excellent typography
- 📱 **Fully Responsive**: Optimized for all screen sizes and devices
- ✨ **Smooth Animations**: Framer Motion powered animations and transitions
- 🎯 **Single Page Application**: Smooth scrolling between sections
- 🚀 **Performance Optimized**: Built with Next.js for optimal performance
- ♿ **Accessible**: Follows accessibility best practices
- 🎨 **Customizable**: Easy to customize colors, content, and styling

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Pratham-Dabhane/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. (Optional, for the contact form) Copy `.env.example` to `.env.local` and
   set `NEXT_PUBLIC_FORMSPREE_ID` to your Formspree form ID. Without it the
   form shows a “not configured” message instead of sending mail.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main page component
│   └── not-found.tsx        # 404 page
├── components/
│   ├── Navigation.tsx       # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Projects.tsx         # Projects section
│   ├── Contact.tsx          # Contact section
│   ├── Cursor.tsx           # Custom cursor
│   └── SmoothScroll.tsx     # Lenis smooth scrolling (provides useLenis)
├── public/assets/           # Images served by Next.js
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration (static export)
└── package.json             # Dependencies and scripts
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`. The current setup uses:
- Background: black (`bg`)
- Surface: `#0A0A0A` (`surface`)
- Accent: `#D1FF00` (`accent`)
- Muted text: `#888888` (`muted`), dim text: `#555555` (`dim`)

### Content
Update the content in each component file:
- `components/Hero.tsx`: Update name, tagline, and social links
- `components/About.tsx`: Update bio and skills
- `components/Projects.tsx`: Update project information
- `components/Contact.tsx`: Update contact information

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations are defined in `tailwind.config.js`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set `NEXT_PUBLIC_FORMSPREE_ID` in the project environment variables if you want the contact form to work
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Set `NEXT_PUBLIC_FORMSPREE_ID` in Site settings → Environment variables for the contact form

### Other Platforms
The project can be deployed to any platform that supports Next.js static exports.

## Performance

This portfolio is optimized for performance with:
- Static generation with Next.js
- Optimized images and fonts
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Lazy loading and code splitting

## Accessibility

The portfolio follows accessibility best practices:
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or reach out!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
