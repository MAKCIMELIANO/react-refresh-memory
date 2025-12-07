import React from 'react';
import Button from '../Button/Button';
import { FaPlus, FaMinus, FaRedo } from 'react-icons/fa';
import { useCounter } from '../СounterFunctions/СounterFunctions';
import styles from './Counter.module.css';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className={styles.counter}>
      <h1>{count}</h1>
      <div className={styles.buttonContainer}>
        <Button onClick={increment} className="increment">
          <FaPlus className={styles.icon} />
          Plus
        </Button>
        <Button onClick={decrement} className="decrement">
          <FaMinus className={styles.icon} />
          Minus
        </Button>
        <Button onClick={reset} className="reset">
          <FaRedo className={styles.icon} />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
