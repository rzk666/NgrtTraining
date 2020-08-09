import React from 'react';
import styles from './Square.module.scss';
import classNames from 'classnames';

const Square = ({ isActive, color, onClick }) => {
    const x = 5;
    return (
        <div 
            onClick={() => onClick()}
            className={classNames(styles.square,
             {
             [styles.is_active]: isActive,
             [styles.green]: color === 'green',
             [styles.red]: color === 'red',
             [styles.yellow]: color === 'yellow',
             [styles.grey]: color === 'grey',
             [styles.blue]: color === 'blue'})}>
            I AM SQUARE
        </div>
    )
}

export default Square;






// class Square extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isACtive: false,
//             colors: ['red', 'yellow', 'green', 'blue', 'grey'],
//             currentColor: '',
//             currentStyle: styles.square
//         }
//     }

//     updateIsActive () {
//         let { isActive } = this.state;
//         if (isActive === 'no') {
//             this.setState({ isActive: 'yes' })
//         } else if (isActive === 'yes') {
//             this.setState({ isActive: 'no' })
//         }
//     }

//     updateBackgroundColor () {
//         const { colors , currentStyle } = this.state;
//         const colorsArray = [...colors];
//         const randomColor = colorsArray[Math.floor(Math.random()*colorsArray.length)];
//         if (randomColor === 'red') {
//             this.setState({ currentStyle: styles.square.red})
//         } else if (randomColor === 'blue') {
//             this.setState({ currentStyle: styles.square.blue})
//         } else if (randomColor === 'green') {
//             this.setState({currentStyle: styles.square_green})
//         } else if (randomColor === 'yellow') {
//             this.setState({currentStyle: styles.square_yellow})
//         } else if (randomColor === 'grey') {
//             this.setState({currentStyle: styles.square})
//         }
//         console.log(currentStyle);
       
//     }

//     render () {
//         let { currentColor , currentStyle , isActive} = this.state;
//         let { color } = this.props;
//         if (isActive === 'yes') {
//             currentStyle = styles.square_red;
//         } else if (isActive === 'no') {
//             currentStyle = styles.square
//         }
//         return (
//         <div className={currentStyle} onClick={() => this.updateIsActive()}  />
//         )
//         }
// }

// export default Square;