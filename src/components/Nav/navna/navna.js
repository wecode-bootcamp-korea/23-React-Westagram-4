import React from 'react';
import './navna.scss';

class navna extends React.Component {
  render(){
    return (
      <nav className="mainpage">
      <div className="mainpageWidth">
        <img className="logo" src="assets/img/nahyun/logo.png" alt="" />
        <input className="search" type="text" placeholder="검색" />
        <ul className="navimg">
          <li><img className="navicon1" alt="exploreIcon" src="assets/img/nahyun/explore.png" /></li>
          <li><img className="navicon2" alt="heartIcon" src="assets/img/nahyun/heart.png" /></li>
          <li><img className="nhprofile" alt="profile" src="assets/img/nahyun/profile.jpg" /></li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default navna;