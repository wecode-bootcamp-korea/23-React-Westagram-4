import React from 'react';
import Comments from './comments';

class FeedSoo extends React.Component {
  render() {
    return (
      <div id="feeds-container">
        <article className="feeds">
          <div id="owner">
            <a
              id="profile-container"
              href="https://www.pngitem.com/pimgs/m/126-1265370_laughing-20-png-man-laughing-png-transparent-png.png"
            >
              <img
                className="main-icon circle-icon"
                src="https://www.pngitem.com/pimgs/m/126-1265370_laughing-20-png-man-laughing-png-transparent-png.png"
                alt="사용자 프로필"
              />
              <div className="owner-name">after_wecode</div>
            </a>
            <div id="more">...</div>
          </div>
          <div id="picture-container">
            <img
              id="picture"
              src="https://i.pinimg.com/originals/19/17/bd/1917bd45991aee156422306dfc857eae.jpg"
              alt="피드사진"
            />
          </div>
          <Comments />
          {/* <div id="contents-container">
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
            <div id="reply">
              <div className="reply-owner">
                <a className="owner-name owner-left" href="www.instagram.com">
                  after_wecode
                </a>
                <p className="contents-reply">
                  wecode 다니고 나의 성공시대 시작됐다~
                </p>
                <div id="more-button">...더보기</div>
              </div>
              <div className="reply-friends">
                <div className="reply-left">
                  <a href="www.instagram.com" className="owner-name owner-left">
                    before_wecode
                  </a>
                  <p className="contents-reply">
                    혹시... 너무 늦어버린건 아닐까..?
                  </p>
                </div>
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="투명하트"
                  id="white-heart"
                />
              </div>
            </div>
            <div className="minutes-before">365일 전</div>
          </div>
          <div id="reply-container">
            <input
              type="text"
              className="input-reply"
              placeholder="댓글 달기..."
            />
            <button href="www.instagram.com" className="upload-a">
              게시
            </button>
          </div> */}
        </article>
      </div>
    );
  }
}

export default FeedSoo;
