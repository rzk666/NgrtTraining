import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { withRouter } from 'react-router';
// Componenets
import Login from './Componenets/Login';
import Expanses from './Componenets/Expanses';
import Merch from './Componenets/Merch';
// Common
import pages from './Common/pages';
// styles
import styles from './App.module.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { LOGIN, HOMEPAGE, EXPENSES } = pages;
    this.state = {
      testProp: 0,
      expanses: [],
    };
  }

  componentDidMount() {
    const { history, router } = this.props;
    console.log(router);
    console.log(history);
  }

  onLogin() {

  }

  returnToHomepage() {
    const { HOMEPAGE } = pages;
    this.setState({ currentPage: HOMEPAGE });
  }

  openExpenses() {
    const { EXPENSES } = pages;
    this.setState({ currentPage: EXPENSES });
  }

  changeTestProp() {
    this.setState({ testProp: 1 });
  }

  updateExpanse(expanses) {
    this.setState({ expanses });
  }

  render() {
    const { testProp, expanses } = this.state;
    const { HOMEPAGE, LOGIN, EXPENSES } = pages;
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => (<Login testProp={testProp} onLogin={() => this.onLogin()} {...props} />)} />
          <Route path="/Merch" exact render={(props) => (<Merch openExpenses={() => this.openExpenses()} {...props} />)} />
          <Route
            path="/Expanses"
            exact
            render={(props) => (
              <Expanses
                onClose={() => this.returnToHomepage()}
                expansesArray={expanses}
                updateExpanse={(exp) => this.updateExpanse(exp)}
                {...props}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

const routedApp = withRouter(App);

export default routedApp;
