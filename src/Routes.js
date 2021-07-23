import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';

import LoginSoo from './pages/jinsooso/Login/login-jinsoo';
import LoginHyun from './pages/hyunjunlee/Login/login-hyunjun';
import LoginNa from './pages/nahyunlee/Login/login-nahyun';
import LoginSu from './pages/sujeonglee/Login/login-sujeong';

import MainSoo from './pages/jinsooso/Main/main-jinsoo';
import MainNa from './pages/nahyunlee/Main/main-nahyun';
import MainSu from './pages/sujeonglee/Main/main-sujeong';
import MainHyun from './pages/hyunjunlee/Main/main-hyunjun';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav exact path="/Nav" component={Nav} />
        <Switch>
          <Route exact path="/login-jinsoo" component={LoginSoo} />
          <Route exact path="/main-jinsoo" component={MainSoo} />

          <Route exact path="/login-nahyun" component={LoginNa} />
          <Route exact path="/main-nahyun" component={MainNa} />

          <Route exact path="/login-sujeong" component={LoginSu} />
          <Route exact path="/main-sujeong" component={MainSu} />

          <Route exact path="/login-hyunjun" component={LoginHyun} />
          <Route exact path="/main-hyunjun" component={MainHyun} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
