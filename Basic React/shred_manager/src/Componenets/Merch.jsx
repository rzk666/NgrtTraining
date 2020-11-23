import React from 'react';
// Components
import { Button , Modal } from 'semantic-ui-react';
import UploadModal from '../Common/UploadModal'
//DICTS 
import PRODUCTS from '../Common/Producs';
// Util
import classNames from 'classnames'
//Resources 
import Logo from '../static/shredhead_logo.png';
import NoImg from '../static/noIMG.jpg';
//Styles
import styles from '../Componenets/Merch.module.scss';

//-------Help Componenets-------//
const MerchCard = ({ img, productName, stock}) => (
    <div className={styles.merch_card}>
            <div className={styles.merch_pic_container}>
                <img src={img} alt="" className={styles.merch.pic}/>
            </div>
            <div className={styles.merch_info}>
                <div className={styles.info_section}>
                    Name: {productName} 
                </div>
                <div className={styles.info_section}>
                    Stock: {stock} 
                </div>
            </div>
    </div>
)


class Merch extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            currentProductName: '',
            currentStock: 0,
            currentProductImg: NoImg,
            activeUserId: 11,
            currentNameInput: '',
            currentDateInput: '',
            currentOutcomeInput: '',
            expanses: [],
            expanseId: 11,
        }
    }

        setCurrentProductName(currentProductName) {
            this.setState({ currentProductName });
        }

        setCurrentStock(currentStock) {
            this.setState({ currentStock });
        }

        addNewItem() {
            const { currentProductName , currentStock , currentProductImg } = this.state;
            const newItem = {
                name: currentProductName,
                stock: currentStock,
                img: currentProductImg,
            }
            PRODUCTS.push(newItem);
            this.setState({ currentProductName: '' , currentStock: 0 })
        }

    render () {
        const { currentProductName , currentStock } = this.state;
        const { openExpenses } = this.props;
        return (
            <>
            <div className={styles.logo_container}>
                <img src={Logo} alt="" className={styles.logo}/>
            </div>
            <div className={styles.content_container}>
                <div className={styles.nav_bar_container}>
                    <UploadModal
                    className={styles.add_item_btn}
                    onChangeProductName={(event) => this.setCurrentProductName(event.currentTarget.value)}
                    onChangeStock={(event) => this.setCurrentStock(event.currentTarget.value)}
                    onClickAddItem={() => this.addNewItem()}
                    nameValue={currentProductName}
                    stockValue={currentStock}/>
                    <Button onClick={() => openExpenses()} style={{ width: '150px', height: '40px', padding: '0 5px',}}>
                        Open Expenses
                    </Button>
                </div>
                <div className={styles.merch_container}>
                    {PRODUCTS.map((product) => (
                        <MerchCard 
                        img={product.img}
                        productName={product.name}
                        stock={product.stock}/>
                    ))}
                </div>
            </div>
            </>
        )
    }
}

export default Merch;