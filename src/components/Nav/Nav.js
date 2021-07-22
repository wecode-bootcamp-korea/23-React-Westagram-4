// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './Nav.scss';
import searchImg from '../../assets/background-images/pngwing.png';
// import logo from "../../../public/images/hyunjunlee/instagram"

class Nav extends React.Component {
  render() {
    return (
      <nav className="header">
        <div className="header_wrap">
          <div className="inner">
            <h1 className="logo">
              <img
                src={
                  process.env.PUBLIC_URL + `/images/hyunjunlee/instagram.png`
                }
                alt="s"
              />
              westagram
            </h1>
            <div className="input_box">
              <input
                type="text"
                placeholder="검색"
                id="search"
                style={{
                  backgroundImage: `url(${searchImg})`,
                }}
              />
            </div>
            <div className="nav">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
