<<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../hyunjunlee/Login/lgh.scss';

class LoginHyun extends React.Component {
  constructor() {
    super();
    this.state = {
      IdValue: '',
      PwValue: '',
    };
  }
  goToMain = () => {
    if (this.state.IdValue.includes('@') && this.state.PwValue.length > 4)
      this.props.history.push('./main-hyunjun');
    fetch('http://10.58.0.138:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.IdValue,
        password: this.state.PwValue,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  handleIdInput = event => {
    this.setState({ IdValue: event.target.value });
  };
  handlePwInput = event => {
    this.setState({ PwValue: event.target.value });
  };

  render() {
    return (
      <div className="loginhyun">
        <h1 className="westagram">westagram</h1>
        <div className="userLogin">
          <input
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleIdInput}
          />
          <input
            className="password"
            type="password"
            placeholder="password"
            onChange={this.handlePwInput}
          />
          <button
            className={
              this.state.IdValue.includes('@') && this.state.PwValue.length > 4
                ? 'login-btn-active'
                : 'login-btn'
            }
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
=======
import React from 'react';
//import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Login.scss'

class LoginHyun extends React.Component {

  goToMain = () => {
    this.props.history.push('/main')
  }


  render() {
    return (
      <div className="login">
        <h1 className="westagram">westagram</h1>
        <div className="userLogin">
          <input className="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input className="password" type="password" placeholder="password" />
          <button className="loginButton" onClick={this.goToMain} name="button" type="button">로그인</button>
        </div>
        <a href="#" className="helpPassword">비밀번호를 잊으셨나요?</a>
>>>>>>> 6d07908b5b01a0c885099e3c9a90ea457799b032
      </div>
    );
  }
}

<<<<<<< HEAD
export default withRouter(LoginHyun);
=======
export default withRouter(LoginHyun);
>>>>>>> 6d07908b5b01a0c885099e3c9a90ea457799b032
