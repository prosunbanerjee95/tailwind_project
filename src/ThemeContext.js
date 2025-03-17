import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [themeColor, setThemeColor] = useState("#1e293b");

    useEffect(() => {
        // Retrieve theme and color from localStorage
        const storedTheme = localStorage.getItem("theme");
        const storedColor = localStorage.getItem("themeColor");
        
        if (storedTheme) {
            setDarkMode(storedTheme === "dark");
        }
        if (storedColor) {
            setThemeColor(storedColor);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            document.documentElement.style.setProperty("--dark-bg", themeColor);
            localStorage.setItem("theme", "dark");
            localStorage.setItem("themeColor", themeColor);
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.style.removeProperty("--dark-bg");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode, themeColor]);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
        if (!darkMode) {
            setThemeColor(getRandomColor()); // Change color only when switching to dark mode
        }
    };

    return (
        <ThemeContext.Provider value={{ darkMode, themeColor, setThemeColor, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const getRandomColor = () => {
    const colors = ["#1e293b", "#4a5568", "#2d3748", "#3b3b98", "#6b21a8", "#1a365d"];
    return colors[Math.floor(Math.random() * colors.length)];
};
