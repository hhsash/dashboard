/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: ['selector', "[data-theme*='dark']"],
    theme: {
        extend: {
            colors: {
                dark: '#1F2329',
                darkSidebar: '#33373D',
                darkCard: '#33373D',
                darkIcon: '#02C9D6',
            },
        },
    },
    plugins: [],
};
