import React from 'react';
import './main.scss';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <body>
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
        <main>
          <div id="feeds-container">
            <article id="feeds">
              <div id="owner">
                <a id="profile-container"
                  href="https://www.pngitem.com/pimgs/m/126-1265370_laughing-20-png-man-laughing-png-transparent-png.png">
                  <img className="main-icon circle-icon"
                    src="https://www.pngitem.com/pimgs/m/126-1265370_laughing-20-png-man-laughing-png-transparent-png.png"
                    alt="사용자 프로필" />
                  <div className="owner-name">after_wecode</div>
                </a>
                <div id="more">...</div>
              </div>
              <div id="picture-container">
                <img id="picture" src="https://i.pinimg.com/originals/19/17/bd/1917bd45991aee156422306dfc857eae.jpg"
                  alt="피드사진"  />
              </div>
              <div id="contents-container">
                <div id="contents-icons">
                  <div id="left-icons">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="네비게이션"
                      className="nav-icon" />
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트"
                      className="nav-icon" />
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="프로필"
                      className="nav-icon" />
                  </div>
                  <div id="right-icons">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="프로필"
                      className="nav-icon" />
                  </div>
                </div>
                <div id="likes">
                  <img id="likes-icon" className="small-icon circle-icon"
                    src="https://d39q62vfiogcbt.cloudfront.net/wp-content/uploads/2020/02/logo-the-laughing-cow-1.png"
                    alt="웃는사람" />
                  <div className="contents-reply"><strong>plontnd_njineal</strong>님 <strong>외 10명</strong>이 좋아합니다.
                  </div>
                </div>
                <div id="reply">
                  <div className="reply-owner">
                    <a className="owner-name owner-left" href="www.instagram.com">after_wecode</a>
                    <p className="contents-reply">wecode 다니고 나의 성공시대 시작됐다~</p>
                    <div id="more-button">...더보기</div>
                  </div>
                  <div className="reply-friends">
                    <div className="reply-left">
                      <a href="www.instagram.com" className="owner-name owner-left">before_wecode</a>
                      <p className="contents-reply">혹시... 너무 늦어버린건 아닐까..?</p>
                    </div>
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="투명하트"
                      id="white-heart" />
                  </div>
                </div>
                <div className="minutes-before">365일 전</div>
              </div>
              <div id="reply-container">
                <input type="text" className="input-reply" placeholder="댓글 달기..." />
                <button href="www.instagram.com" className="upload-a">게시</button>
              </div>
            </article>
          </div>
          <aside id="aside">
            <div className="top">
              <img alt="사용자_프로필" src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png" className="top-icon circle-icon" />
              <div className="top-names">
                <div className="top-names-bold">wecode-bootcamp</div>
                <div className="top-names-light">WeCode | 위코드</div>
              </div>
            </div>
            <div className="story">
              <div className="story-top">
                <div className="story-top-left">스토리</div>
                <a className="story-top-right" href="www.instagram.com">모두 보기</a>
              </div>
              <div className="story-bot">
                <div className="story-feed">
                  <img alt="img" src="https://wecode.co.kr/static/media/kim-yeri.e5766bea.png" className="circle-icon active" />
                  <div className="story-feed-right">
                    <div className="story-topname">javascript_supercyan</div>
                    <div className="story-botname">16분 전</div>
                  </div>
                </div>
                <div className="story-feed">
                  <img alt="img" src="https://wecode.co.kr/static/media/yang.0aac1edb.png" className="circle-icon active" />
                  <div className="story-feed-right">
                    <div className="story-topname">wecode_wang</div>
                    <div className="story-botname">3시간 전</div>
                  </div>
                </div>
                <div className="story-feed">
                  <img alt="img"  src="https://wecode.co.kr/static/media/lee-so.39e2a003.png" className="circle-icon active" />
                  <div className="story-feed-right">
                    <div className="story-topname">border-radius</div>
                    <div className="story-botname">5시간 전</div>
                  </div>
                </div>
                <div className="story-feed">
                  <img alt="img" src="https://wecode.co.kr/static/media/taeck.283abc8b.png" className="circle-icon active" />
                  <div className="story-feed-right">
                    <div className="story-topname">css_master</div>
                    <div className="story-botname">6시간 전</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="story recommend">
              <div className="story-top rec-top">
                <div className="story-top-left rec-left">회원님을 위한 추천</div>
                <div className="story-top-right rec-right">모두 보기</div>
              </div>
              <div className="story-bot rec-bot">
                <div className="story-feed rec-new">
                  <img alt="img" src="https://wecode.co.kr/static/media/min.cfcc09ee.png" className="circle-icon" />
                  <div className="story-feed-right rec-new-mid">
                    <div className="story-topname">::hover</div>
                    <div className="story-botname">wec님 외 2명이...</div>
                  </div>
                  <div className="upload-a follow">팔로우</div>
                </div>
                <div className="story-feed rec-new">
                  <img alt="img" src="https://wecode.co.kr/static/media/shin.76d5cc6c.png" className="circle-icon"/>
                  <div className="story-feed-right rec-new-mid">
                    <div className="story-topname">::placeholder</div>
                    <div className="story-botname">wec님 외 2명이...</div>
                  </div>
                  <div className="upload-a follow">팔로우</div>
                </div>
                <div className="story-feed rec-bot">
                  <img alt="img" src="https://wecode.co.kr/static/media/performance-coach.c43beb45.png" className="circle-icon"></img>
                  <div className="story-feed-right rec-new-mid">
                    <div className="story-topname">stop_now</div>
                    <div className="story-botname">wec님 외 2명이...</div>
                  </div>
                  <div className="upload-a follow">팔로우</div>
                </div>
              </div>
            </div>
            <footer className="info">
              <p >Instagram 정보•지원•홍보 센터•API</p>
              <p >채용 정보•개인정보처리방관•약관 •</p>
              <p >디렉터리•프로필•해시태그•언어</p>
              <p className="corp">© 2019 INSTAGRAM</p>
            </footer>
          </aside>
        </main>
        <script src="js/main.js"></script>
      </body>
    )
  }
}

export default Main;