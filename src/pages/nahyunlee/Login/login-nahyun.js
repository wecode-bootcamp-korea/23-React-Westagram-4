import React from 'react';
//import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Login.scss';

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

  /*
  buttonColor = () => {
    
      (this.state.idValue.includes('@') && this.state.pwValue.length >= 5)?
      this.state({buttonOn : true}:this.state({buttonOn:false})) 
    }
  }
*/

  goToMain = () => {
    this.props.history.push('/main');
  };

  render() {
    return (
      <div className="login">
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
        <link href="#" className="helpPassword">
          비밀번호를 잊으셨나요?
        </link>
      </div>
    );
  }
}

export default withRouter(Login);
