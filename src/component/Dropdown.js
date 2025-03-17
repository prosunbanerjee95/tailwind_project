// src/components/Dropdown.js
import React, { useState } from "react";

// Main Dropdown Component
const Dropdown = ({ children }) => {
    return (
        <div className="dropdown">
            {children}
        </div>
    );
};

// Dropdown Button Component
const DropdownButton = ({ label, onClick }) => {
    return (
        <button className="dropdown-button" onClick={onClick}>
            {label} ▼
        </button>
    );
};

// Dropdown Menu Component
const DropdownMenu = ({ isOpen, children }) => {
    return (
        <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
            {children}
        </div>
    );
};

// Dropdown Item Component
const DropdownItem = ({ children, onClick }) => {
    return (
        <div className="dropdown-item" onClick={onClick}>
            {children}
        </div>
    );
};

// Dropdown Divider Component
const DropdownDivider = () => {
    return <hr className="dropdown-divider" />;
};

// Dropdown Label Component
const DropdownLabel = ({ children }) => {
    return <div className="dropdown-label">{children}</div>;
};

// Export all components
export {
    Dropdown,
    DropdownButton,
    DropdownMenu,
    DropdownItem,
    DropdownDivider,
    DropdownLabel,
};
