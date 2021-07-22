import React from 'react';
import { Link } from 'react-router-dom';

class NavSoo extends React.Component {
  render() {
    return(
      <nav>
      <div id="logo-container">
        <a className="logo-a" href="wwww.instagram.com"><i className="fab fa-instagram"></i></a>
        <div id="line"></div>
        <Link to='/' className="instagram-a">
          <img id="instagram"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt="인스타그램" /></Link>
      </div>
      <div id="input-container">
        <input id="input" type="text" placeholder="검색" />
      </div>
      <div id="icon-container">
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="검색"
          className="nav-icon" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="좋아요" className="nav-icon" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="프로필"
          className="nav-icon"  />
      </div>
    </nav>
    )
  }
}

export default NavSoo;