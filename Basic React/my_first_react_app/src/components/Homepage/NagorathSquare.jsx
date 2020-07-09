import React from 'react';
// styles
import styles from './NagorathSquare.module.scss';

const NagorathSquare = (props) => {
  const { color, number } = props;
  let square;
  if (color === 'blue') {
    square = <div onClick={() => console.log('')} className={styles.blue_square}>{number}</div>;
  } else {
    square = <div className={styles.green_square}>{number}</div>;
  }
  return (
    square
  );
};

export default NagorathSquare;
