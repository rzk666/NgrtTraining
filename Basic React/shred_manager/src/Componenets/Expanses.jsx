import React from 'react';
// Components
import { Input , Button , Checkbox } from 'semantic-ui-react';
//Dicts 
import USERS from '../Common/Users';
//styles
import styles from './Expanses.module.scss';
// Util
import classNames from 'classnames'
//Resources 
import Logo from '../static/shredhead_logo.png';
import Close from '../static/close.png';



//--!!-----Help Componenets------!!--\\
const Profile = ({ img , onClick, isActive }) => (
    <div className={styles.profile}>
        <div className={styles.profile_pic_container}>
            <img src={img}
            alt="" 
            className={classNames(styles.profile_pic,
                {
                    [styles.is_active]: isActive
                })}
                onClick={() => onClick()}/>   
        </div>
    </div>
)

const ExpansesInputs = ({ onChangeName, onChangeDate, onChangeOutcome , onSendClick , nameValue , dateValue , outcomeValue }) => (
    <div className={styles.expanses_input_field_container}>
        <div className={styles.expanses_input_section}>
            <div className={styles.expanses_catagory_container}>
                <div className={styles.expanses_catagory}>
                    Name: 
                </div>
                <div className={styles.expanses_catagory}>
                    Date:
                </div>
                <div className={styles.expanses_catagory}>
                    Outcome:
                </div>
            </div>
            <div className={styles.expanses_input_container}>
                <Input style={{marginBottom: 20,width: 300}}
                        onChange={(e) => onChangeName(e)}
                        placeholder='Name'
                        icon='user secret'
                        iconPosition='left'
                        value={nameValue}/>
                <Input style={{marginBottom: 20,width: 300}}
                        type='Date'
                        icon='calendar alternate'
                        iconPosition='left'
                        onChange={(e) => onChangeDate(e)}
                        value={dateValue}/>
                <Input style={{marginBottom: 20,width: 300}}
                        placeholder='Outcome'
                        icon='dollar sign'
                        iconPosition='left'
                        onChange={(e) => onChangeOutcome(e)}
                        value={outcomeValue}/>
            </div>                 
        </div>
        <div className={styles.expanses_btn_container}>
                <Button className={styles.expanses_send_btn}
                        onClick={() => onSendClick()}>
                            SEND</Button>
        </div>
    </div>
)

const ExpansesOutput= ({ expansesArray , activeUserId }) => {
    const filteredExpanses = expansesArray.filter((expanse) => expanse.id === activeUserId)
    return (
        <div className={styles.expanses_output_container}>
        <div className={styles.expanses_output_column}>
            <div className={styles.expanses_output_column_content}>
                Name:
            </div>
            <div className={styles.expanses_output_column_content}>
                {filteredExpanses.map((expanse) => (
                    <div className={styles.expane_content}>
                        {expanse.name} 
                    </div>
                ))}
            </div>
        </div >
        <div className={styles.expanses_output_column}>
            <div className={styles.expanses_output_column_content}>
                Date:
            </div>
            <div className={styles.expanses_output_column_content}>
                {filteredExpanses.map((expanse) => (
                    <div className={styles.expane_content}>
                        {expanse.date}
                    </div>
                ))}
            </div>
        </div>
        <div className={styles.expanses_output_column}>
            <div className={styles.expanses_output_column_content}>
                Outcome:
            </div>
            <div className={styles.expanses_output_column_content}>
                {filteredExpanses.map((expanse) => (
                    <div className={styles.expane_content}>
                        {expanse.outcome}
                    </div>
                ))}
            </div>
        </div>
        <div className={styles.expanses_output_column}>
            <div className={styles.expanses_output_column_content}>
                Paid?:
            </div>
            <div className={styles.expanses_output_column_content}>
                {filteredExpanses.map((expanse) => (
                    <div className={styles.expane_content}>
                        {expanse.button}
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}


class Expanses extends React.Component {
    constructor(props) {
        super(props);  
        const { expansesArray } = this.props;
        this.state = {
            activeUserId: 11,
            currentNameInput: '',
            currentDateInput: '',
            currentOutcomeInput: '',
            expanses: expansesArray,
            expanseId: 11,
        }
    }

    setActiveUser(activeUserId) {
        const { expanses} = this.state;
        this.setState({ activeUserId });
        console.log(expanses);
    }

    setCurrentName(currentNameInput) {
        this.setState({ currentNameInput });
    }

    setCurrentDate(currentDateInput) { 
        this.setState({ currentDateInput });
    }
    
    setCurrentOutcome(currentOutcomeInput) {
        this.setState({ currentOutcomeInput });
    }

    sendBtnFunc() {
        const { expanses , currentNameInput , currentDateInput , currentOutcomeInput , activeUserId } = this.state;
        const expanseObj = {
            name: currentNameInput,
            date: currentDateInput,
            outcome: currentOutcomeInput,
            button: <Checkbox/>,
            id: activeUserId,
        };
        const newExpenses = [...expanses];
        newExpenses.push(expanseObj);
        this.setState({ expanses:newExpenses, currentNameInput: '', currentDateInput: '', currentOutcomeInput: '' , });
    }

    render () {
        const { activeUserId , currentNameInput , currentDateInput , currentOutcomeInput , expanses } = this.state;
        const { onClose , expansesArray , updateExpanses} = this.props;
        return (
            <>
            <img onClick={() => onClose(expanses)} src={Close} alt="Close" className={styles.close}/>
            <div className={styles.logo_container}>
                <img src={Logo} alt="" className={styles.logo}/>
            </div>
            <div className={styles.profiles_container}>
                {USERS.map((user) => (
                    <Profile 
                    img={user.profilePic}
                    onClick={() => this.setActiveUser(user.userId)}
                    isActive={user.userId === activeUserId }/>
                ))}
            </div>
            <div className={styles.expanses_container}>
                <div className={styles.expanses_input}>
                <ExpansesInputs 
                onChangeName={(event) => this.setCurrentName(event.currentTarget.value)}
                onChangeDate={(event) => this.setCurrentDate(event.currentTarget.value)}
                onChangeOutcome={(event) => this.setCurrentOutcome(event.currentTarget.value)}
                onSendClick={() => this.sendBtnFunc()}
                nameValue={currentNameInput}
                dateValue={currentDateInput}
                outcomeValue={currentOutcomeInput}/>
                </div>
                <div className={styles.expanses_output}>
                    <ExpansesOutput expansesArray={expansesArray} activeUserId={activeUserId}/>
                </div>
            </div>
            </>
        )
    }
}

export default Expanses;