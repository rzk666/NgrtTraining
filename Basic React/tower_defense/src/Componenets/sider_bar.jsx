import React from 'react';
// Components
import Tower from './Tower.jsx';
// Dictioneries
import TOWERS from '../Common/Towers';
// Styles
import styles from './side_bar.module.scss';
// Tower pictures
import bastianPic from '../resources/Bastian.jpg';
import raziPic from '../resources/razi.jpg';
import yotamPic from '../resources/yotam.jpg';
import aharonPic from '../resources/aharon.jpg';
import liloPic from '../resources/Lilo.jpg';
import kahanaPic from '../resources/kahana.jpg';

//-----Help componenets-----//
const TowerInfo = ({activeTowerId}) => {
    console.log(activeTowerId)
    const activeTower = TOWERS.find(tower => tower.id === activeTowerId);
    console.log(activeTower);
    return(
        <>
        { activeTower ?
        <div className={styles.tower_info}>
            <div className={styles.tower_name}>Name: {activeTower.name}</div>
        <div className={styles.tower_info_one}>Attack: {activeTower.attack} Range: {activeTower.range}</div>     
        <div className={styles.tower_info_two}>Speed: {activeTower.speed} Cost: {activeTower.cost}</div>
        </div> : <></> }
        </>
        )
    }

    const activeTowerPic = ({activeTowerId}) => {
        const activeTowerPic = TOWERS.find(tower => tower.id === activeTowerId)
        return (activeTowerPic.img);
    }

    const towerPicArray = [bastianPic, raziPic, yotamPic, aharonPic, liloPic, kahanaPic];

class SideBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeTowerId: -1,
        }
        
    }

    setActiveTower(activeTowerId) {
        this.setState({ activeTowerId })
    }

    render() {
        const { activeTowerId } = this.state;
        return(

    <div className={styles.side_bar_container}>
        <div className={styles.towers_container}>
            {TOWERS.map((tower) => (
                <Tower 
                onClick={() => this.setActiveTower(tower.id)}
                isActive={tower.id === activeTowerId}
                src={() => activeTowerPic(tower.id)}/>
                ))}
        </div>
                <TowerInfo activeTowerId={activeTowerId} />
    </div>
        )
    }
}


export default SideBar;