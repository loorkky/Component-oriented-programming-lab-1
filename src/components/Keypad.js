import React from 'react';
import Button from './Button';

const Keypad = ({ onButtonClick }) => {
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        'C', '0', '=', '+'
    ];

    return (
        <div className="keypad">
            {buttons.map((button, index) => (
                <Button key={index} label={button} onClick={onButtonClick} />
            ))}
        </div>
    );
};

export default Keypad;