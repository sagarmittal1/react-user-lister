import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>
        React User Lister <span className={styles.author}>by Sagar Mittal</span>
      </h2>
    </div>
  );
};

export default Header;
