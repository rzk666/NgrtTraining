import React from 'react';
// Componenets
import { Input , Button } from 'semantic-ui-react';
// styles
import styles from './Login.module.scss';
// Resources
import Logo from '../static/shredhead_logo.png'

// Dicts & Consts //
const CREDENTIALS = {
    username: 'ngrt',
    password: 'satan',
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            currentUser: '',
            currentPassword: ''
        }
    }

    componentDidMount(){
        console.log("ROZADIN");
    }

    componentDidUpdate(prevProps, prevState){
        const { testProp, onLogin } = this.props;
        const { username } = CREDENTIALS;
        const { currentUser } = this.state;
        if ( testProp && !prevProps.testProp){
            console.log('TEST PROP CHANGED!');
        }
        const { isLoggedIn } = this.state;
        // User log in
        if(isLoggedIn && !prevState.isLoggedIn) {
            onLogin();
            if (currentUser === username) {
                console.log('USERNAME IS ADMIN');
            }
        }
    }

    updateCurrentUser(currentUser) {
        this.setState({ currentUser });
    }

    updateCurrentPassword(currentPassword) {
        this.setState({ currentPassword });
    }

    Authenticator() {
        const { username, password } = CREDENTIALS;
        const { currentUser , currentPassword} = this.state;
        if(currentUser === username && currentPassword === password) {
            this.setState({ isLoggedIn: true });
        } else {
            alert('wrong username & password');
        }
    }

    render () {
        const { isLoggedIn } = this.state;
        const { testProp } = this.props;
        return (
            <div className={styles.site_container}>
                <div className={styles.logo_container}>
                    <img src={Logo} alt="" className={styles.logo}/>
                </div>
                <div className={styles.input_container}>
                    <div style={{ marginBottom: '20px', width: '30px', height: '30px', backgroundColor: !isLoggedIn ? 'red' : 'green', borderRadius:'255px'}}/>
                    <Input
                     className={styles.input_field}
                     placeholder='Username'
                     icon="user"
                     iconPosition='left'
                     onChange={(event) => this.updateCurrentUser(event.currentTarget.value)}/>
                    <Input 
                    className={styles.input_field} 
                    placeholder='Password'
                    type="password"
                    icon='lock'
                    iconPosition='left'
                    onChange={(event) => this.updateCurrentPassword(event.currentTarget.value)}/>
                    <Button onClick={() => this.Authenticator()}>
                         LOGIN
                    </Button>
                </div>
            </div>
        )
    }
}

export default Login;



