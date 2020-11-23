import React from 'react';
// Dictioneries
import TOWERS from '../Common/Towers';
// Util
import classNames from 'classnames'
// Styles
import styles from './Tower.module.scss';
// Tower pictures
import bastianPic from '../resources/Bastian.jpg';
import raziPic from '../resources/razi.jpg';
import yotamPic from '../resources/yotam.jpg';
import aharonPic from '../resources/aharon.jpg';
import liloPic from '../resources/Lilo.jpg';
import kahanaPic from '../resources/kahana.jpg';

const Tower = ({ isActive, onClick, src }) => {
    const x = 5;
    return (

            <div
            onClick={() => onClick()}
            className={classNames(styles.tower,
                {
                    [styles.is_active]: isActive,
                })}
                >
                    <img src={src} 
                    alt="" 
                    className={styles.tower_pic}/>
            </div>
        

    )
}

export default Tower;

