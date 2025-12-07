import React from 'react';

import clsx from 'clsx';
import styles from './Button.module.css';

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, styles[className])}
    >
      {children}
    </button>
  );
};

export default Button;
