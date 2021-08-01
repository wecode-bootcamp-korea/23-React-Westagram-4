import React from 'react';
import CommentList from './commentList';

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
                      src="https://lh3.googleusercontent.com/proxy/qUfHOB6U1wdd_Llc8keOLJHfFr5H56RXSFh3DAeL3syR7nMu7LfVrgoqjFsOZNvUMoWhE5IWGz29nXc3kigpgUUrGwWPw1FQviCAiSMBByygGr6ZOYxV"
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
            <CommentList />
          </article>
        </div>
      </>
    );
  }
}

export default Feed;
