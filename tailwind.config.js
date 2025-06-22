/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,md,njk,webc,js}",
    "./src/_includes/**/*.{html,md,njk,webc,js}"
  ],
  theme: {
    extend: {
      // Modern CSS features
      colors: {
        primary: {
          50: 'oklch(97% 0.013 238.5)',
          100: 'oklch(94% 0.027 240.1)',
          500: 'oklch(67% 0.203 238.7)',
          900: 'oklch(35% 0.108 237.5)',
        },
      },
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', 'sans-serif'],
      },
      // Container query sizes
      containers: {
        '2xs': '16rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
      // View transition names for smooth animations
      transitionProperty: {
        'view-transition': 'view-transition-name',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
  // Future-proof configuration
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Experimental features
  experimental: {
    optimizeUniversalDefaults: true,
  },
}