import React from 'react';
import IdPwBtn from './idpwvalid';
import './login.scss';

class LoginSoo extends React.Component {
  goToMain = () => {
    this.props.history.push('/main-jinsoo');
  };

  render() {
    return (
      <div>
        <body>
          <section id="section-container">
            <main id="login-container">
              <img
                src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"
                alt="메인 휴대폰 이미지"
              />
              <section id="section-main">
                <div className="top">
                  <h1 id="logo">westagram</h1>
                  <IdPwBtn />
                  <div id="or-container">
                    <div className="dash"></div>
                    <div id="or">또는</div>
                    <div className="dash"></div>
                  </div>
                  <div className="facebook-password button-container">
                    <button id="button-facebook">
                      <span id="facebook-logo"></span>
                      <span id="facebook-span">Facebook으로 로그인</span>
                    </button>
                  </div>
                  <div className="facebook-password button-container">
                    <button id="button-password">비밀번호를 잊으셨나요?</button>
                  </div>
                </div>
                <div className="mid">
                  <div className="mid-container button-container">
                    <p className="midbot-word">계정이 없으신가요?</p>
                    <button id="button-sign">가입하기</button>
                  </div>
                </div>
                <div className="bot">
                  <div className="midbot-word button-container">
                    앱을 다운로드하세요
                  </div>
                  <div className="download-container">
                    <a href="www.androidappstore.com">
                      <img
                        src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
                        alt="앱스토어 다운로드"
                        className="img-download"
                      />
                    </a>
                    <a href="www.appstore.com">
                      <img
                        src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                        alt="구글스토어 다운로드"
                        className="img-download"
                      />
                    </a>
                  </div>
                </div>
              </section>
            </main>
            <footer id="footer">
              <div className="button-list">
                <div className="button-info">
                  <a href="https://www.instagram.com/">블로그</a>
                </div>
                <div className="button-info">
                  <a href="https://www.instagram.com/">채용정보</a>
                </div>
                <div className="button-info">
                  <a href="https://www.instagram.com/">소개</a>
                </div>
                <div className="button-info">
                  <a href="https://www.instagram.com/">도움말</a>
                </div>
                <div className="button-info">
                  <a href="https://www.instagram.com/">API</a>
                </div>
                <div className="button-info">
                  <a href="https://www.instagram.com/">개인정보처리방침</a>
                </div>
                <div className="button-info">
                  <a href="https://www.instagram.com/">약관</a>
                </div>
                <div className="button-info">
                  <a href="https://www.instagram.com/">인기 계정</a>
                </div>
                <div className="button-info">
                  <a href="https://www.instagram.com/">해시태그</a>
                </div>
                <div className="button-info">
                  <a href="https://www.instagram.com/">위치</a>
                </div>
              </div>
              <div className="info">
                <select>
                  <option value="ko">한국어</option>
                  <option value="af">Afrikaans</option>
                  <option value="en-gb">English (UK)</option>
                  <option value="ja">日本語</option>
                </select>
                <span id="span-footer">© 2021 Instagram from Facebook</span>
              </div>
            </footer>
          </section>
          <script src="src/Login/Login.js"></script>
        </body>
      </div>
    );
  }
}

export default LoginSoo;
