import React from "react";
import "./Login.scss"
import {withRouter} from "react-router-dom";
class Login extends React.Component {
    goToMain = () => {
        this.props.history.push("/main");
    };
    render() {
        return(
                <form className='box' method="POST">
                    <h1>westagram</h1>
                    <input type="text" id="id" placeholder="전화번호, 사용자 이름 또는 이메일" autoCapitalize="off"></input>
                    <input type="password" id="pw" placeholder='비밀번호'></input>
                        <button type="button" className="btn" onClick={this.goToMain}>로그인</button>
                    <div className="link">
                        <a href=""><span>비밀번호를 잊으셨나요?</span></a>
                    </div>
                </form>
        );
    }
}

export default withRouter(Login);