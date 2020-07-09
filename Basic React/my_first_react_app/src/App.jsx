import React from 'react';
// styles
import styles from './App.module.scss';

const App = () => {
  const x = 5;
  return (
    <div
      className={styles.main_container}
    >
      <div className={styles.btn}>
        5
      </div>
      <div className={styles.container}>
        <div className={styles.btn}>
          10
        </div>
      </div>
    </div>
  );
};

export default App;
