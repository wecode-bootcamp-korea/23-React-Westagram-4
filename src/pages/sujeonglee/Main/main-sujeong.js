import React from 'react';
import './main-sujeong.scss';
import Nav from '../../../components/Nav/Nav';

class MainSu extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <body>
          <div className="MainContainer">
            <nav className="navHead">
              <div className="navContainer">
                <div className="navlogo">
                  <h1 className="logo">Westagram</h1>
                </div>
                <div className="search">
                  <input
                    type="text"
                    placeholder="검색"
                    autocapitalize="none"
                    className="searchBox"
                  />
                </div>
                <div className="navicon">
                  <img
                    alt="탐색"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                    className="navIcon"
                  />
                  <img
                    alt="하트"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                    className="navIcon"
                  />
                  <img
                    alt="마이페이지"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                    className="navIcon"
                  />
                </div>
              </div>
            </nav>
          </div>
          <main id="sujeong-main">
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
                        src="images/more.png"
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
                      src="images/heart.png"
                      className="leftIcon"
                    />
                    <img alt="디엠" src="images/dm.png" className="leftIcon" />
                    <img
                      alt="공유"
                      src="images/share.png"
                      className="leftIcon"
                    />
                  </div>
                  <div className="feedIconRight">
                    <img alt="북마크" src="images/mark.png" />
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
                      <span>k_rystalee</span>님 <span>외 10명</span>이
                      좋아합니다
                    </a>
                  </span>
                </div>
                <div className="commentRow">
                  <ul className="newComment">
                    <li className="newCommentList">
                      <span className="commentText">
                        <span className="commenetUserId">sujeong</span>위코드
                        위스타그램 클린코딩!~~
                      </span>
                      <span className="newCommentIcon">
                        <img
                          alt="하트"
                          src="images/heart.png"
                          className="commentHeart"
                        />
                        <span className="delete">X</span>
                      </span>
                    </li>
                  </ul>
                </div>
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
            <div className="mainRight">
              <div className="myprofile">
                <div className="myprofileRight">
                  <img
                    alt="프로필이미지"
                    src="https://pbs.twimg.com/profile_images/1388372006597324803/vOGAnpoN_400x400.jpg"
                    className="profileImg"
                  />
                </div>
                <div className="myprofileLeft">
                  <span className="userId">k_rystalee</span>
                  <span className="subTitle">DDUBeeeee</span>
                </div>
              </div>
              <div className="story">
                <div className="storyHead">
                  <span className="storyLeft">스토리</span>
                  <span className="storyRight">모두 보기</span>
                </div>
                <div className="storyContent">
                  <div className="storyImg">
                    <img
                      alt="프로필이미지"
                      src="https://pbs.twimg.com/profile_images/1388372006597324803/vOGAnpoN_400x400.jpg"
                      className="profileImg"
                    />
                  </div>
                  <div className="storyId">
                    <span className="userId">k_rystalee</span>
                    <span className="subTitle">16분 전</span>
                  </div>
                </div>
                <div className="storyContent">
                  <div className="storyImg">
                    <img
                      alt="프로필이미지"
                      src="https://pbs.twimg.com/profile_images/1388372006597324803/vOGAnpoN_400x400.jpg"
                      className="profileImg"
                    />
                  </div>
                  <div className="storyId">
                    <span className="userId">k_rystalee</span>
                    <span className="subTitle">16분 전</span>
                  </div>
                </div>
                <div className="storyContent">
                  <div className="storyImg">
                    <img
                      alt="프로필이미지"
                      src="https://pbs.twimg.com/profile_images/1388372006597324803/vOGAnpoN_400x400.jpg"
                      className="profileImg"
                    />
                  </div>
                  <div className="storyId">
                    <span className="userId">k_rystalee</span>
                    <span className="subTitle">16분 전</span>
                  </div>
                </div>

                <div className="storyContent">
                  <div className="storyImg">
                    <img
                      alt="프로필이미지"
                      src="https://pbs.twimg.com/profile_images/1388372006597324803/vOGAnpoN_400x400.jpg"
                      className="profileImg"
                    />
                  </div>
                  <div className="storyId">
                    <span className="userId">k_rystalee</span>
                    <span className="subTitle">16분 전</span>
                  </div>
                </div>
              </div>
              <div className="recommend">
                <div className="recommendHead">
                  <span className="recommendLeft">회원님을 위한 추천</span>
                  <span className="recommendRight">모두 보기</span>
                </div>
                <div className="recommendContent">
                  <div className="recommendContentLeft">
                    <div className="recommendImg">
                      <img
                        alt="프로필이미지"
                        src="https://pbs.twimg.com/profile_images/1388372006597324803/vOGAnpoN_400x400.jpg"
                        className="profileImg"
                      />
                    </div>
                    <div className="recommendId">
                      <span className="userId">k_rystalee</span>
                      <span className="subTitle">hojeong님 외 2명이....</span>
                    </div>
                  </div>
                  <span className="recommendFollow">
                    <a href="dasf">팔로우</a>
                  </span>
                </div>
                <div className="recommendContent">
                  <div className="recommendContentLeft">
                    <div className="recommendImg">
                      <img
                        alt="프로필이미지"
                        src="https://pbs.twimg.com/profile_images/1388372006597324803/vOGAnpoN_400x400.jpg"
                        className="profileImg"
                      />
                    </div>
                    <div className="recommendId">
                      <span className="userId">k_rystalee</span>
                      <span className="subTitle">hojeong님 외 2명이....</span>
                    </div>
                  </div>
                  <span className="recommendFollow">
                    <a href="asf">팔로우</a>
                  </span>
                </div>
                <div className="recommendContent">
                  <div className="recommendContentLeft">
                    <div className="recommendImg">
                      <img
                        alt="프로필이미지"
                        src="https://pbs.twimg.com/profile_images/1388372006597324803/vOGAnpoN_400x400.jpg"
                        className="profileImg"
                      />
                    </div>
                    <div className="recommendId">
                      <span className="userId">k_rystalee</span>
                      <span className="subTitle">hojeong님 외 2명이....</span>
                    </div>
                  </div>
                  <span className="recommendFollow">
                    <a href="safs">팔로우</a>
                  </span>
                </div>
              </div>
              <div className="information">
                <span>
                  Westagram 정보, 지원, 홍보센터, API, 채용 정보,
                  개인정보처리방침, 약관, 디렉터리, 프로필, 해시태그 ,언어
                </span>
                <div className="infomark">
                  <span>© 2021 Westagram</span>
                </div>
              </div>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default MainSu;
