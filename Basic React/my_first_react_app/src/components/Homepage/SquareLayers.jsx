import React from 'react';
//Styles
import styles from './SquareLayers.module.scss';
 

const SquareLayers = (props) => {

    return (
        <div className={styles.red_square}>
            <div className={styles.blue_square}></div>
            <div className={styles.blue_square}></div>
        </div>
    )
}

export default SquareLayers;