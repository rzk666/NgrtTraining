import React from 'react';
// Components
import ColorBtn from './ColorBtn';
// Styles
import styles from './MainSquare.module.scss';

class MainSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'khaki',
      currentSize: '500px',
    };
  }

  updateBackgroundColor(currentColor, currentSize) {
    this.setState({ currentColor, currentSize });
  }

  render() {
    const { currentColor, currentSize } = this.state;
    const containerStyle = {
      height: currentSize,
      width: currentSize,
      backgroundColor: currentColor,
    };
    return (
      <div style={containerStyle} className={styles.container}>
        <ColorBtn david={(color) => console.log(color)} onClick={() => this.updateBackgroundColor('red', '200px')} myProp={{ a: 1 }} type="a" color="red" />
        <ColorBtn david={(color) => console.log(color)} onClick={() => this.updateBackgroundColor('green', '750px')} myProp={{ a: 1 }} type="a" color="green" />
        <ColorBtn david={(color) => console.log(color)} onClick={() => this.updateBackgroundColor('blue', '400px')} myProp={{ a: 1 }} type="a" color="blue" />
      </div>
    );
  }
}

export default MainSquare;
