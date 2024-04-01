/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        appMd: '10% 80% 10%',
        appSm: '12% 76% 12%',
        appXl: '20% 60% 20%',
        listingDetails: '70% 30%'
      }
    }
  },
  plugins: []
};
