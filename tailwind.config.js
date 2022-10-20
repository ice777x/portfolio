/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: "Inter, sans-serif",
                ssp: "Source Sans Pro, sans-serif",
                space: "Space Grotesk, sans-serif",
            },
        },
    },
    plugins: [],
};
