import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#37B7C4',
        secondary: '#2D3748',
        accent: '#F7FAFC',
        lp: {
          primary: '#55bdcf',
          'primary-strong': '#39afc3',
          'primary-deep': '#126f7d',
          'primary-soft': '#e6f7fa',
          'primary-surface': '#f2fbfd',
          'primary-border': '#bfe5ec',
          text: '#001a47',
          'text-muted': '#374151',
          'text-subtle': '#4b5563',
          surface: '#ffffff',
          'surface-soft': '#f8fbfc',
          border: '#d8e3e8',
          danger: '#e35f58',
          accent: '#ffe500',
          'accent-strong': '#f7c900',
        },
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '31': '7.75rem',
        '38': '9.5rem',
      },
      // Tailwind v4 ダイナミック opacity 互換 (0-100 全整数)
      opacity: Object.fromEntries(
        Array.from({ length: 101 }, (_, i) => [String(i), (i / 100).toString()]),
      ),
      rotate: {
        '10': '10deg',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        rounded: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config;
