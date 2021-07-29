import React from 'react';
import './idpwvalid.scss';
import { withRouter } from 'react-router-dom';

class IdPwBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: '',
      inputPw: '',
      btnColor: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.btnVal()
    );
  };

  // assignment 2

  btnVal = () => {
    (this.state.inputId.includes('@') && this.state.inputPw.length) > 5
      ? this.setState({ btnColor: true })
      : this.setState({ btnColor: false });
  };

  toMain = () => {
    if (this.handleInput) {
      this.props.history.push('./main-jinsoo');
    }
  };

  render() {
    const { inputId, inputPw } = this.state;

    return (
      <>
        <input
          className="input-all"
          id="id"
          name="inputId"
          type="text"
          placeholder="이메일"
          value={inputId}
          onChange={this.handleInput}
        />
        <input
          className="input-all"
          id="password"
          name="inputPw"
          type="text"
          placeholder="비밀번호"
          value={inputPw}
          onChange={this.handleInput}
        />
        <div className="button-container">
          <button
            className={this.state.btnColor ? 'button-canlogin' : 'button-login'}
            onClick={this.toMain}
            style={{ cursor: 'pointer' }}
          >
            로그인
          </button>
        </div>
      </>
    );
  }
}

export default withRouter(IdPwBtn);
