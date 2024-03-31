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
        appLg: '20% 60% 20%',
        appMd: '10% 80% 10%',
        appSm: '12% 76% 12%',
        listingDetails: '60% 40%'
      }
    }
  },
  plugins: []
};
