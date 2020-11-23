import React from 'react';
import styles from './App.module.scss';
import Square from './Componenets/Square.jsx'

// ----- Consts & Dicts ----- //
const COLORS_ARRAY = ['red', 'yellow', 'blue', 'green', 'grey'];

// ----- Help Function ----- //
const initSquares = (squares) => {
  const squaresArray = [];
  for (let index = 0; index < squares; index++) {
    let randomColors = COLORS_ARRAY[Math.floor(Math.random()*COLORS_ARRAY.length)];
    squaresArray.push(randomColors);
  }
  return (squaresArray);
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeSquare: -1,
    }
    this.SQUARES = initSquares(25);
  }

  setActiveSquare(activeSquare) {
    this.setState({ activeSquare }) 
  }

  render() {
    const { activeSquare } = this.state;
    return (
      <div className={styles.site_container}>
        {this.SQUARES.map((square, index) => (
          <Square 
            onClick={() => this.setActiveSquare(index)} 
            color={square}
            isActive={index === activeSquare}/>
        ))}
        {/* <div className={styles.squares_container}>
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
        </div> */}
      </div>
    )};
}

export default App;
