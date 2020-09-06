import React from 'react';
// Componenets
import Login from './Componenets/Login';
import Expanses from './Componenets/Expanses';
import Merch from './Componenets/Merch';
// Common
import pages from './Common/pages';
// styles
import styles from './App.module.scss';

class App extends React.Component{
    constructor(props){
      super(props);
      const { LOGIN, HOMEPAGE, EXPENSES } = pages;
      this.state = {
        currentPage: HOMEPAGE,
        testProp: 0,
      }
    }

    returnToHomepage(){
      const { HOMEPAGE } = pages;
      this.setState({ currentPage: HOMEPAGE });
    }

    openExpenses(){
      const { EXPENSES } = pages;
      this.setState({ currentPage: EXPENSES})
    }

    onLogin(){
      const { HOMEPAGE } = pages;
      this.setState({ currentPage: HOMEPAGE });
    }

    changeTestProp(){
      this.setState({ testProp: 1});
    }

    render() {
    const { currentPage, testProp } = this.state;
    const { HOMEPAGE, LOGIN, EXPENSES } = pages ; 
    return ( 
      <div className={styles.site_container}>
        <div onClick={() => this.changeTestProp()} style={{ width: '50px', height:'50px', position:'fixed', left:'300px', top:'300px', backgroundColor: 'red'}}/>
        { currentPage === LOGIN && <Login 
          onLogin={() => this.onLogin()} 
          testProp={testProp}/> }
        { currentPage === HOMEPAGE && <Merch openExpenses={() => this.openExpenses()}/> }
        { currentPage === EXPENSES && <Expanses onClose={() => this.returnToHomepage()}/> }
      </div>
    );
  }
}

export default App;
