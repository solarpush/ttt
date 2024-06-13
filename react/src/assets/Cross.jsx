import React from 'react';

const Cross = () => {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100">
            <line x1="10" y1="10" x2="90" y2="90" stroke="black" strokeWidth="5" />
            <line x1="10" y1="90" x2="90" y2="10" stroke="black" strokeWidth="5" />
        </svg>
    );
};

export default Cross;
