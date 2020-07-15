import React from 'react';
//Styles
import styles from './ColorBtn.module.scss';
 

const ColorBtn = (props) => {
    const { color } = props;
    let btn
    if(color === 'green') {
        btn = <div className={styles.green_button} onClick={() => console.log()}></div>;
    } else if(color === 'blue') {
        btn = <div className={styles.blue_button}></div>;
    } else {
        btn = <div className={styles.red_button}></div>; 
    }
    return (
        btn
    )
}

export default ColorBtn;