import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      const res = eval(input);
      setResult(res);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <h2>{input || "0"}</h2>
          <h3>{result ? "=" + result : ""}</h3>
        </div>
        <div className="buttons">
          <button onClick={handleClear} className="clear">AC</button>
          <button onClick={handleBackspace} className="backspace">C</button>
          <button onClick={() => handleClick('/')} className="operator">/</button>
          <button onClick={() => handleClick('*')} className="operator">*</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('-')} className="operator">-</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('+')} className="operator">+</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={handleEqual} className="equal">=</button>

          <button onClick={() => handleClick('0')} className="zero">0</button>
          <button onClick={() => handleClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
