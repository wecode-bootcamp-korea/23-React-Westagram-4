import React from 'react';
import { withRouter } from 'react-router-dom';
import Post from '../Post/Post';

class Feed extends React.Component {
  render() {
    return (
      <>
        <div className="feed">
          <article>
            <header>
              <div className="profileArticle">
                <div className="mainId">
                  <div className="profileImgBox">
                    <img
                      alt="프로필사진"
                      src="https://pbs.twimg.com/profile_images/1388372006597324803/vOGAnpoN_400x400.jpg"
                      className="profileImg"
                    />
                  </div>
                  <span className="profileName">
                    <a href="fdsafsa">roses_are_rosie</a>
                  </span>
                </div>
                <div className="profileIcon">
                  <img
                    alt="정보아이콘"
                    src="images/sujeonglee/more.png"
                    className="moreIcon"
                  />
                </div>
              </div>
            </header>
            <div className="mainImgBox">
              <img
                alt="피드이미지"
                src="https://imgc.1300k.com/aaaaaib/goods/215024/71/215024713100.jpg?3"
                className="mainImg"
              />
            </div>
            <div className="feedIcon">
              <div className="feedIconLeft">
                <img
                  alt="하트"
                  src="/images/sujeonglee/heart.png"
                  className="leftIcon"
                />
                <img
                  alt="디엠"
                  src="/images/sujeonglee/dm.png"
                  className="leftIcon"
                />
                <img
                  alt="공유"
                  src="/images/sujeonglee/share.png"
                  className="leftIcon"
                />
              </div>
              <div className="feedIconRight">
                <img alt="북마크" src="images/sujeonglee/mark.png" />
              </div>
            </div>
            <div className="feedLike">
              <div className="likeImgBox">
                <img
                  alt="좋아요"
                  src="http://www.jjn.co.kr/news/photo/201905/773960_123602_629.jpg"
                  className="likeImg"
                />
              </div>
              <span className="likeInfo">
                <a href="fdsaf">
                  <span>k_rystalee</span>님 <span>외 10명</span>이 좋아합니다
                </a>
              </span>
            </div>
            <Post />
            <div className="timeLog">
              <span>40분전</span>
            </div>
            <div className="commentContainer">
              <input
                type="text"
                placeholder="댓글 달기..."
                className="commentBox"
              />
              <button type="submit" className="commentSubmit" disabled>
                게시
              </button>
            </div>
          </article>
        </div>
      </>
    );
  }
}

export default withRouter(Feed);
