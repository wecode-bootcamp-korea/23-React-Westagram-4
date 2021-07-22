import React from 'react';
import { Router, Switch } from 'react-router';
import Nav from './components/Nav/Nav';

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
                <Nav exact path='/Nav' component={Nav} />  
                <Switch>
                <Routes exact path='/login-jinsoo' component={LoginSoo} />
                <Routes exact path='/main-jinsoo' component={MainSoo} />

                <Routes exact path='/login-nahyun' component={LoginNa}/>
                <Routes exact path='/main-nahyun' component={MainNa}/>

                <Routes exact path='/login-sujeong' component={LoginSu} />
                <Routes exact path='/main-sujeong' component={MainSu} /> 

                <Routes exact path="/login-hyunjun" component={LoginHyun} />
                <Routes exact path="/Main-hyunjun" component={MainHyun} />
                </Switch>
            </Router>
        )
    }
}
    
export default Routes;