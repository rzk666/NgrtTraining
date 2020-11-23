import React from 'react';
import styles from './map.module.scss'
import mapImage from '../resources/Kingdom_rush_4.jpg'




const Tiles = () => {
    const x =5;
    return (
        <div className={styles.map_tile}></div>

    )
}

const Map = () => {
    const x = 5;
    return (
        <div className={styles.map_image_container}>
            <img src={mapImage} alt=""/>
        </div>
    )
}

export default Map;