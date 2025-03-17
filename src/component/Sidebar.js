// src/components/Sidebar.js
import React from "react";

// Main Sidebar Component
const Sidebar = ({ children, width = 250 }) => {
    return (
        <div className="sidebar" style={{ width }}>
            {children}
        </div>
    );
};

// Sidebar Header Component
const SidebarHeader = ({ children }) => {
    return <div className="sidebar-header">{children}</div>;
};

// Sidebar Heading Component
const SidebarHeading = ({ children }) => {
    return <h2 className="sidebar-heading">{children}</h2>;
};

// Sidebar Body Component
const SidebarBody = ({ children }) => {
    return <div className="sidebar-body">{children}</div>;
};

// Sidebar Section Component (For grouping items)
const SidebarSection = ({ children }) => {
    return <div className="sidebar-section">{children}</div>;
};

// Sidebar Item Component (Clickable links or buttons)
const SidebarItem = ({ icon, label, onClick }) => {
    return (
        <div className="sidebar-item" onClick={onClick}>
            {icon && <span className="sidebar-icon">{icon}</span>}
            {label}
        </div>
    );
};

// Sidebar Label Component (For titles or sections)
const SidebarLabel = ({ children }) => {
    return <div className="sidebar-label">{children}</div>;
};

// Sidebar Spacer (For spacing between sections)
const SidebarSpacer = () => {
    return <div className="sidebar-spacer"></div>;
};

// Sidebar Footer Component (For bottom content like logout buttons)
const SidebarFooter = ({ children }) => {
    return <div className="sidebar-footer">{children}</div>;
};

// Export all components
export {
    Sidebar,
    SidebarHeader,
    SidebarHeading,
    SidebarBody,
    SidebarSection,
    SidebarItem,
    SidebarLabel,
    SidebarSpacer,
    SidebarFooter,
};
