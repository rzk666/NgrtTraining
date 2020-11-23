import React from 'react';
// Styles
import styles from './SquareLayers.module.scss';

const SquareLayers = (props) => (
  <div className={styles.red_square}>
    <div className={styles.blue_square} />
    <div className={styles.blue_square} />
  </div>
);

export default SquareLayers;
