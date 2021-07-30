import React from 'react';
import MockComment from './Mockcomment/mockcomment';

class Comments extends React.Component {
  render() {
    return (
      <>
        <div id="contents-container">
          <div id="contents-icons">
            <div id="left-icons">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="네비게이션"
                className="nav-icon"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="하트"
                className="nav-icon"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="프로필"
                className="nav-icon"
              />
            </div>
            <div id="right-icons">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="프로필"
                className="nav-icon"
              />
            </div>
          </div>
          <div id="likes">
            <img
              id="likes-icon"
              className="small-icon circle-icon"
              src="https://d39q62vfiogcbt.cloudfront.net/wp-content/uploads/2020/02/logo-the-laughing-cow-1.png"
              alt="웃는사람"
            />
            <div className="contents-reply">
              <strong>plontnd_njineal</strong>님 <strong>외 10명</strong>이
              좋아합니다.
            </div>
          </div>
          <MockComment />
        </div>
      </>
    );
  }
}

export default Comments;
