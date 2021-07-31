import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './login-sujeong.scss';

class LoginSu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      userPw: '',
    };
  }

  handleIuput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      commentList: [],
    });
  };

  goToMain = () => {
    this.state.userId.includes('@') && this.state.userPw.length >= 5
      ? this.props.history.push('/main-sujeong')
      : alert('양식에 맞춰 작성해주세요');
  };

  render() {
    return (
      <div>
        <div className="loginContainer">
          <h1>Westagram</h1>

          <form className="loginform">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="id"
              name="userId"
              value={this.state.userId}
              onChange={this.handleIuput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="pw"
              name="userPw"
              value={this.state.userPw}
              onChange={this.handleIuput}
            />
            <button
              className={`btnLogin ${
                this.state.userId.includes('@') && this.state.userPw.length >= 5
                  ? 'oncolor'
                  : 'offcolor'
              }`}
              onClick={this.goToMain}
            >
              로그인
            </button>
            <Link to="/about">
              <span className="pwForgot">비밀번호를 잊으셨나요?</span>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginSu);
