import React from 'react';
// Componenets
import { Input , Button } from 'semantic-ui-react';
// styles
import styles from './Login.module.scss';
// Resources
import Logo from '../static/shredhead_logo.png'



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'ngrt',
            password: 'satan',
            currentUser: '',
            currentPassword: ''
        }
    }

    updateCurrentUser(currentUser) {
        this.setState({ currentUser });
    }

    updateCurrentPassword(currentPassword) {
        this.setState({ currentPassword });
        console.log(currentPassword);
    }

    Authenticator() {
        const {username, password , currentUser , currentPassword} = this.state;
        if(currentUser === username && currentPassword === password) {
            alert("Logged in succesfully");
        } else {
            alert('wrong username & password');
        }
    }

    render () {
        const x = 5;
        return (
            <div className={styles.site_container}>
                <div className={styles.logo_container}>
                    <img src={Logo} alt="" className={styles.logo}/>
                </div>
                <div className={styles.input_container}>
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



