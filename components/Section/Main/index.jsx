import React from 'react';

import STYLES from './main.module.css';

export const MainSection = ({ children }) => {
  return (
    <div className={STYLES.main}>
      <div className={STYLES.container}>{children}</div>
    </div>
  );
};
