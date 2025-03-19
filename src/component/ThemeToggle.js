import React from "react";
import { useTheme } from "./ThemeProvider";
// import { useTheme } from "./ThemeProvider"; // ✅ Import useTheme

function ThemeToggle() {
    const { theme, setTheme } = useTheme(); // ✅ Access theme and setTheme

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
        >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
    );
}

export default ThemeToggle;
