import React from 'react';
//import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../../nahyunlee/Login/Login.scss';

class LoginNa extends React.Component {
  goToMain = () => {
    this.props.history.push('./main-nahyun');
  };

  render() {
    return (
      <div className="login">
        <h1 className="westagram">westagram</h1>
        <div className="userLogin">
          <input
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input className="password" type="password" placeholder="password" />
          <button
            className="loginButton"
            onClick={this.goToMain}
            name="button"
            type="button"
          >
            로그인
          </button>
        </div>
        <a href="#" className="helpPassword">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    );
  }
}

export default withRouter(LoginNa);
