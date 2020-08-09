import React from 'react';
import styles from './App.module.scss';
import Square from './Componenets/Square.jsx'



function App() {
  const colorsArray = ['red', 'yellow', 'blue', 'green', 'grey'];
  let RandomColors = colorsArray[Math.floor(Math.random()*colorsArray.length)];

  return (
    <div className={styles.site_container}>
      <div className={styles.squares_container}>
        <Square color={RandomColors}/>
        <Square color={RandomColors}/>
        <Square color={RandomColors}/>
        <Square color={RandomColors}/>
        <Square color={RandomColors}/>
      </div>
      <div className={styles.squares_container}>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className={styles.squares_container}>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className={styles.squares_container}>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className={styles.squares_container}>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>
    </div>
  );
}

export default App;
