import React from 'react';
import { Router, Switch } from 'react-router';
import Nav from './components/Nav/Nav';

import LoginSoo from './pages/jinsooso/Login/login-jinsoo';
import LoginHyun from './pages/hyunjunlee/Login/login-hyunjun';
import LoginNa from './pages/nahyunlee/Login/login-nahyun';
import LoginSu from './pages/sujeonglee/Login/login-sujeong';

import MainSoo from './pages/jinsooso/Main/main-jinsoo';
import MainNa from './pages/nahyunlee/Main/main-nahyun';
import MainSu from './pages/sujeonglee/Main/main-sujeong';
import MainHyun from './pages/hyunjunlee/Main/main-hyunjun'

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
                    <Routes exact path="/main-hyunjun" component={MainHyun} />
                </Switch>
            </Router>
        )
    }
}
    
export default Routes;