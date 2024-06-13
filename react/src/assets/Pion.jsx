import React from 'react';
import Circle from './Circle';
import Cross from './Cross';

const Pion = ({ value, onClick }) => {
    return (
        <button className="pion" onClick={onClick}>
            {value === 'X' ? <Cross /> : value === 'O' ? <Circle /> : null}
        </button>
    );
};

export default Pion;
