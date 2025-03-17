// src/components/Navbar.js
import React from "react";

// Main Navbar Component
const Navbar = ({ children }) => {
    return <nav className="navbar">{children}</nav>;
};

// Navbar Section (Groups items)
const NavbarSection = ({ children }) => {
    return <div className="navbar-section">{children}</div>;
};

// Navbar Item (Clickable menu items or links)
const NavbarItem = ({ label, onClick }) => {
    return (
        <div className="navbar-item" onClick={onClick}>
            {label}
        </div>
    );
};

// Navbar Label (For headings in the navbar)
const NavbarLabel = ({ children }) => {
    return <span className="navbar-label">{children}</span>;
};

// Navbar Divider (For visual separation)
const NavbarDivider = () => {
    return <div className="navbar-divider"></div>;
};

// Navbar Spacer (Pushes items apart)
const NavbarSpacer = () => {
    return <div className="navbar-spacer"></div>;
};

// Export all components
export { Navbar, NavbarSection, NavbarItem, NavbarLabel, NavbarDivider, NavbarSpacer };
