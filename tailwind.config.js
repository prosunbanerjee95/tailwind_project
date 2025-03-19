/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // ✅ Enables class-based dark mode
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // ✅ Fixed comma issue
    theme: {
        extend: {}, // ✅ No unnecessary trailing comma
    },
    plugins: [],
};
