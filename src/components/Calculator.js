import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input));
            } catch (error) {
                setResult('Error');
            }
            setInput('');
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <Display input={input} result={result} />
            <Keypad onButtonClick={handleButtonClick} />
        </div>
    );
};

export default Calculator;