// Grid.jsx
import React from 'react';
import Pion from './Pion';

const Grid = ({ pions, onSquareClick }) => {
    return (
        <div className="grid">
            {pions.map((value, index) => (
                <Pion key={index} value={value} onClick={() => onSquareClick(index)} />
            ))}
        </div>
    );
};

export default Grid;
