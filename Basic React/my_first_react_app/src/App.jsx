import React from 'react';
// Components
import SquareLayers from './components/Homepage/SquareLayers'
// styles
import styles from './App.module.scss';

const App = () => {
    
  return (
    <div className={styles.site_container}>
      <div className={styles.first_layer_container}>


      <SquareLayers/>
    </div>
    </div>
  );
};

export default App;
