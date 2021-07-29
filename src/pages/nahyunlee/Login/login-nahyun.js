import React from 'react';
//import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './LoginNa.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idValue: '',
      pwValue: '',
      //buttonOn : false,
    };
  }

  handleIdInput = e => {
    this.setState({
      idValue: `${e.target.value}`,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwValue: `${e.target.value}`,
    });
  };

  goToMain = () => {
    this.props.history.push('/main-nahyun');
  };

  // goToMain = () => {
  //   const { idValue, pwValue } = this.state;
  //   fetch('http://10.58.1.205:8000/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: idValue,
  //       password: pwValue,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.token) {
  //         localStorage.setItem('token', result.token);
  //         this.props.history.push('/main-nahyun');
  //       } else alert('아이디/비밀번호를 다시 입력해주세요!');
  //     });
  // };

  render() {
    return (
      <div className="loginNa">
        <h1 className="westagram">westagram</h1>
        <div className="userLogin">
          <input
            onChange={this.handleIdInput}
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={this.handlePwInput}
            className="password"
            type="password"
            placeholder="password"
          />
          <button
            className={
              this.state.idValue.includes('@') && this.state.pwValue.length > 4
                ? 'offloginButton'
                : 'loginButton'
            }
            onClick={this.goToMain}
            name="button"
            type="button"
          >
            로그인
          </button>
        </div>
        <a href="/" className="helpPassword">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    );
  }
}

export default withRouter(Login);
