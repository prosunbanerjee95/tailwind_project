// src/components/Avatar.js
import React from "react";

export const Avatar = ({ src, alt, size = 50 }) => {
    return (
        <img
            src={src || "https://via.placeholder.com/50"} // Default image
            alt={alt || "Avatar"}
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                objectFit: "cover",
            }}
        />
    );
};

