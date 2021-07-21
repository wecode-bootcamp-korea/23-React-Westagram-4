import React from 'react';
import { withRouter } from 'react-router-dom';
import "./Login.scss"

class Login extends React.Component{
    goToMain = () => {
        this.props.history.push('/Main');
      }
    render(){
        return(
            <div>
                <div className="container">
                    <h1>Westagram</h1>
                    <form action="/Main" className="loginform">
                        <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" className="id"/>
                        <input type="password" placeholder="비밀번호" className="pw"/>
                        <button onClick={this.goToMain} className="btnLogin">로그인 </button>
                        <a href="#"><span className="pwForgot">비밀번호를 잊으셨나요?</span></a>
                    </form>
                 </div>
            </div>
        );
    }
}

export default withRouter(Login);
 