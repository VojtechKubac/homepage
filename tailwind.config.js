/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        stone: {
          50: '#F0EBE3',
          100: '#F5F0EB',
          200: '#E8E0D6',
          300: '#D4C8BA',
          400: '#B8A898',
          500: '#9C8B78',
          600: '#7A6B5A',
          700: '#5C5042',
          800: '#3D352C',
          900: '#1F1B17',
          950: '#110F0C',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
