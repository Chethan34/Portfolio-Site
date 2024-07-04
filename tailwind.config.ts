import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        aurora: 'aurora 15s linear infinite',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '0% 0%' },
          to: { backgroundPosition: '200% 0%' },
        },
      },
    },
  },
  plugins: [],
}

export default config