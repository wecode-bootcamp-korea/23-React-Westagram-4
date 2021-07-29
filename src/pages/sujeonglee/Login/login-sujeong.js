import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './login-sujeong.scss';

class LoginSu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      userPw: '',
      buttonOn: false,
    };
  }
  ButtonColor = () => {
    this.state.userId.includes('@') && this.state.userPw.length >= 5
      ? this.setState({ buttonOn: true })
      : this.setState({ buttonOn: false });
  };
  handleIuput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      commentList: [],
    });
  };

  goToMain = () => {
    this.props.history.push('/main-sujeong');
  };

  render() {
    return (
      <div>
        <div className="loginContainer">
          <h1>Westagram</h1>

          <form
            action="/Main"
            className="loginform"
            onChange={this.ButtonColor}
          >
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
              onClick={this.goToMain}
              className={`btnLogin ${
                this.state.buttonOn ? 'oncolor' : 'offcolor'
              }`}
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
