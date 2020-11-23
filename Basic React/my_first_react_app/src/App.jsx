import React from 'react';
// Components
import MainSquare from './components/Homepage/MainSquare';
// styles
import styles from './App.module.scss';

const App = () => (
  <div className={styles.site_container}>
    <div className={styles.first_layer_container}>
      <MainSquare />
    </div>
  </div>
);

export default App;
