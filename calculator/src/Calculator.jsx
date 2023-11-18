import React, { useState } from 'react';

import './App.css'; 

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
     setInput(input + value);
  };

  const calculateResult = () => {
    try {
      
      const result = eval(input);
      setInput(String(result));
    } catch (error) {
      
      console.error("Error in expression:", error);
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="parent">
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="button-row operators">
        <button onClick={clearInput}>AC</button>
        <button onClick={() => handleButtonClick('+/-')}>+/-</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div className="button-row">
        <button className="zero-button" onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
