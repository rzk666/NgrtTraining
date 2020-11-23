import React from 'react';
import styles from './App.module.scss';
import Map from './Componenets/map.jsx';
import SideBar from './Componenets/sider_bar';

function App() {
  return (
    <div className={styles.site_container}>
      <Map/>
      <SideBar/>
    </div>
  );
}

export default App;
