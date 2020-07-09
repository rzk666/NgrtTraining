import React from 'react';
// Components
import NagorathSquare from './components/Homepage/NagorathSquare';
// styles
import styles from './App.module.scss';

const App = () => {
  const x = Math.floor(Math.random() * (0 + 1, 100) + 5);
  const y = Math.floor(Math.random() * (0 + 1, 100) + 5);
  return (
    <div className={styles.site_container}>
      <NagorathSquare number={x} color="blue" />
      <NagorathSquare number={y} color="zladim" />
    </div>
  );
};

export default App;
