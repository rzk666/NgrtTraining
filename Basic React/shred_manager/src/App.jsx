import React from 'react';
// Componenets
import Login from './Componenets/Login';
import Expanses from './Componenets/Expanses';
import Merch from './Componenets/Merch';
// styles
import styles from './App.module.scss';


function App() {
  return ( 
    <div className={styles.site_container}>
    <Merch/>
    </div>
  );
}

export default App;
