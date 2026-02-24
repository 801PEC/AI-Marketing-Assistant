import React from 'react';

const GlassContainer = ({ children, className = '' }) => {
    return (
        <div className={`glass-container ${className}`}>
            {children}
        </div>
    );
};

export default GlassContainer;
