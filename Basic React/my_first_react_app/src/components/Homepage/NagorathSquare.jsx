import React from 'react';
// styles
import styles from './NagorathSquare.module.scss';

const NagorathSquare = (props) => {
  const { color, number } = props;
  // let color;
  // let children;
  // color = props['color']
  // children = props.children
  // console.log(children); console.log(color);
  let square;
  if (color === 'blue') {
    square = <div className={styles.blue_square}>{number}</div>;
  } else {
    square = <div className={styles.green_square}>{number}</div>;
  }
  return (
    square
  );
};

export default NagorathSquare;
