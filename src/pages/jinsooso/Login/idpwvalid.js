import React from 'react';
import './idpwvalid.scss';

class IdPwBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: '',
      inputPw: '',
      btnColor: false,
    };
  }

  /*
이벤트를 인자로 받는 함수 선언

handleIdInput = e => {
  this.setState({
    idVal: event.target.value,
  })
}
handlePwInput = e => {
  this.setState({
    pwVal: event.target.value,
  })
}
*/

  handleInput = e => {
    const { name, value } = e.target;
    this.setState(
      {
        //아래와 같이 작성하면 변수명으로 객체 키에 접근하듯 할 수 있다.
        [name]: value,
      },
      () => this.btnVal()
    );
  };

  // assignment 2

  btnVal = e => {
    (this.state.inputId.includes('@') && this.state.inputPw.length) > 5
      ? this.setState({ btnColor: true })
      : this.setState({ btnColor: false });
  };

  render() {
    // 구조 분해 할당
    // let inputId = this.state.inputId;
    // let inputPw = this.state.inputPw;
    const { inputId, inputPw } = this.state;

    return (
      <>
        <input
          className="input-all"
          id="id"
          name="inputId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
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
            onClick={this.goToMain}
          >
            로그인
          </button>
        </div>
      </>
    );
  }
}

export default IdPwBtn;
