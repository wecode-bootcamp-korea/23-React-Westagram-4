import React from 'react';

class AsideSoo extends React.Component {
  render() {
    return (
      <aside id="aside">
        <div className="top">
          <img
            alt="사용자 프로필"
            src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png"
            className="top-icon circle-icon"
          />
          <div className="top-names">
            <div className="top-names-bold">wecode-bootcamp</div>
            <div className="top-names-light">WeCode | 위코드</div>
          </div>
        </div>
        <div className="story">
          <div className="story-top">
            <div className="story-top-left">스토리</div>
            <a className="story-top-right" href="www.instagram.com">
              모두 보기
            </a>
          </div>
          <div className="story-bot">
            <div className="story-feed">
              <img
                alt="img"
                src="https://wecode.co.kr/static/media/kim-yeri.e5766bea.png"
                className="circle-icon active"
              />
              <div className="story-feed-right">
                <div className="story-topname">javascript_supercyan</div>
                <div className="story-botname">16분 전</div>
              </div>
            </div>
            <div className="story-feed">
              <img
                alt="img"
                src="https://wecode.co.kr/static/media/yang.0aac1edb.png"
                className="circle-icon active"
              />
              <div className="story-feed-right">
                <div className="story-topname">wecode_wang</div>
                <div className="story-botname">3시간 전</div>
              </div>
            </div>
            <div className="story-feed">
              <img
                alt="img"
                src="https://wecode.co.kr/static/media/lee-so.39e2a003.png"
                className="circle-icon active"
              />
              <div className="story-feed-right">
                <div className="story-topname">border-radius</div>
                <div className="story-botname">5시간 전</div>
              </div>
            </div>
            <div className="story-feed">
              <img
                alt="img"
                src="https://wecode.co.kr/static/media/taeck.283abc8b.png"
                className="circle-icon active"
              />
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
              <img
                alt="img"
                src="https://wecode.co.kr/static/media/min.cfcc09ee.png"
                className="circle-icon"
              />
              <div className="story-feed-right rec-new-mid">
                <div className="story-topname">::hover</div>
                <div className="story-botname">wec님 외 2명이...</div>
              </div>
              <div className="upload-a follow">팔로우</div>
            </div>
            <div className="story-feed rec-new">
              <img
                alt="img"
                src="https://wecode.co.kr/static/media/shin.76d5cc6c.png"
                className="circle-icon"
              />
              <div className="story-feed-right rec-new-mid">
                <div className="story-topname">::placeholder</div>
                <div className="story-botname">wec님 외 2명이...</div>
              </div>
              <div className="upload-a follow">팔로우</div>
            </div>
            <div className="story-feed rec-bot">
              <img
                alt="img"
                src="https://wecode.co.kr/img/StaffInfo/performance-coach.png"
                className="circle-icon"
              ></img>
              <div className="story-feed-right rec-new-mid">
                <div className="story-topname">stop_now</div>
                <div className="story-botname">wec님 외 2명이...</div>
              </div>
              <div className="upload-a follow">팔로우</div>
            </div>
          </div>
        </div>
        <footer className="info">
          <p>Instagram 정보•지원•홍보 센터•API</p>
          <p>채용 정보•개인정보처리방관•약관 •</p>
          <p>디렉터리•프로필•해시태그•언어</p>
          <p className="corp">© 2019 INSTAGRAM</p>
        </footer>
      </aside>
    );
  }
}

export default AsideSoo;
