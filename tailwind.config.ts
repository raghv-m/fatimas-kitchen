import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fatima Karahi Corner Brand Colors
        primary: {
          50: '#ffebee',
          100: '#ffcdd2',
          200: '#ef9a9a',
          300: '#e57373',
          400: '#ef5350',
          500: '#D32F2F', // Spicy Red-Orange (Karahi Heat) - Main brand color
          600: '#C62828', // Hover state
          700: '#B71C1C',
          800: '#8B1414',
          900: '#5F0F0F',
        },
        secondary: {
          50: '#fffde7',
          100: '#fff9c4',
          200: '#fff59d',
          300: '#fff176',
          400: '#ffee58',
          500: '#F9A825', // Rich Saffron Gold (Royal & Warm)
          600: '#F57F17',
          700: '#F57C00',
          800: '#EF6C00',
          900: '#E65100',
        },
        accent: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4CAF50', // Fresh Mint Green (Herbs & Halal)
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        cream: {
          50: '#fffef9',
          100: '#fffcf5',
          200: '#FFF8E1', // Warm Cream (Naan & Raita) - Main background
          300: '#fff3cc',
          400: '#ffecb3',
          500: '#ffe082',
        },
        charcoal: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#bdbdbd',
          300: '#9e9e9e',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#303030',
          800: '#212121', // Deep Charcoal (Modern & Readable) - Text
          900: '#121212', // Dark mode background
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;

