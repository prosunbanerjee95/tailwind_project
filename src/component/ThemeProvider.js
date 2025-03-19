import { createContext, useContext, useEffect, useState } from "react";

// Create Theme Context
const ThemeContext = createContext();

// Theme Provider Component
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Apply theme to the document root
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");  // ✅ Adds dark mode class
        } else {
            document.documentElement.classList.remove("dark"); // ✅ Removes dark mode class
        }
        localStorage.setItem("theme", theme); // ✅ Save theme to local storage
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom Hook to Use Theme Context
export function useTheme() {
    return useContext(ThemeContext);
}
