import React from 'react';


class NavSu extends React.Component{
    render(){
        return(
            <nav className="navHead">
            <div className="navContainer">
                <div className="navlogo">
                    <h1 className="logo">Westagram</h1>
                </div>
                <div className="search">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="검색" autocapitalize="none" className="searchBox"/>
                </div>
                <div className="navicon">
                    <img alt="탐색" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"  className="navIcon"/>
                    <img alt="하트" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" className="navIcon"/>
                    <img alt="마이페이지"  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"  className="navIcon"/>
                </div>
            </div>
        </nav>
        );
    }
}

export default NavSu;