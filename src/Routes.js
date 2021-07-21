import React from 'react';
import { Router, Switch } from 'react-router';
import nav from './components/Nav/nav';

import LoginSoo from './pages/jinsooso/Login/Login';
import LoginHyun from './pages/hyunjunlee/Login/Login';
import LoginNa from './pages/nahyunlee/Login/Login';
import LoginSu from './pages/sujeonglee/Login/Login';

import MainSoo from './pages/jinsooso/Main/Main';
import MainNa from './pages/nahyunlee/Main/Main';
import MainSu from './pages/sujeonglee/Main/Main';
import MainHyun from './pages/hyunjunlee/Main/Main'



class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Nav exact path='/nav' component={nav} />
                <Switch>
                <Route exact path='/login-jinsoo' component={LoginSoo} />
                <Route exact path='/main-jinsoo' component={MainSoo} />

                <Route exact path='/login-nahyun' component={LoginNa}/>
                <Route exact path='/main-nahyun' component={MainNa}/>

                <Route exact path='/login-sujeong' component={LoginSu} />
                <Route exact path='/main-sujeong' component={MainSu} /> 

                <Route exact path="/login-hyunjun" component={LoginHyun} />
                <Route exact path="/Main-hyunjun" component={MainHyun} />
                </Switch>
            </Router>
        )
    }
}
    
export default Routes;