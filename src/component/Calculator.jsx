import React, { useState } from 'react';
import { sumFromString } from '../utils/stringCalculator';
import styles from './Calculator.module.css';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAddClick = () => {
    try {
      const result = sumFromString(inputValue);
      setResult(result);
      setError(null);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div>
      <header>
        <h1>String Calculator</h1>
      </header>

      <main className={styles.container}>
        <section>
          <textarea id="myTextArea" rows="5" cols="50"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter numbers"
          />
        </section>
        <section>
          <button className={styles.addButton} onClick={handleAddClick}>Add</button>
        </section>
        <section>
          {result !== null && <div>Result: {result}</div>}
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </section>
      </main>
    </div>
  );
};

export default Calculator;
