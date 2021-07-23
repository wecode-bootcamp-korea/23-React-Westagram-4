import React from 'react';

class MainHyun extends React.Component {
  render() {
<<<<<<< HEAD
    return <div></div>;
=======
    return (
      <div>
        <header className="header">
          <div className="header_wrap">
            <div className="inner">
              <h1 className="logo">
                <img src="./-images/instagram.png" />
                westagram
              </h1>
              <div className="input_box">
                <input type="text" placeholder="검색" id="search" />
              </div>
              <nav className="nav">
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
              </nav>
            </div>
          </div>
        </header>
        <div className="main">
          <div className="container">
            <div className="contents_left">
              <div className="inner">
                <ul className="feeds_list">
                  <li className="feeds_list_li">
                    <div className="feed_profile">
                      <div className="profile">
                        <img
                          className="profile_img"
                          src="./-images/profile.png"
                        />
                        <p className="profile_id">xx_ia.97</p>
                      </div>
                      <button type="button" className="state_btn">
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
                      </button>
                    </div>
                    <div className="feed_box">
                      <img src="./-images/feed.png" />
                    </div>
                    <div className="feed_info">
                      <div className="feed_state">
                        <ul className="link_list">
                          <li>
                            <button type="button" className="state_btn">
                              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                            </button>
                          </li>
                          <li>
                            <button type="button" className="state_btn">
                              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                            </button>
                          </li>
                          <li>
                            <button type="button" className="state_btn">
                              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                            </button>
                          </li>
                        </ul>
                        <div className="link_list">
                          <button type="button" className="state_btn">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />
                          </button>
                        </div>
                      </div>
                      <div className="feed_comments">
                        <div className="feed_likes">
                          <div className="likes_user profile">
                            <img
                              src="./-images/profile.png"
                              className="profile_img"
                            />
                          </div>
                          <div className="comments_info comment_list_ul">
                            <p className="comments_tit">
                              <span className="user_id">이현준</span>님 외
                              10명이 좋아합니다.
                            </p>
                          </div>
                        </div>
                        <div className="comment_list">
                          <ul className="comments_info comment_list_ul">
                            <li>
                              <div className="comments_tit">
                                <span className="user_id">xx_ia.97</span>
                                <span className="comment_contents">감성짤</span>
                              </div>
                            </li>
                          </ul>
                          <div className="feed_time">
                            <p className="time">4시30분</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form className="comments_form">
                      <div className="input_box">
                        <input
                          type="text"
                          placeholder="댓글달기..."
                          id="comment_input"
                        />
                      </div>
                      <div className="button_box">
                        <button
                          type="button"
                          className="btn"
                          disabled="disabled"
                        >
                          <span>게시</span>
                        </button>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contents_right">
              <aside className="aside">
                <div className="feed_profile">
                  <div className="profile">
                    <img src="./-images/profile.png" className="profile_imgs" />
                    <div className="profile_info">
                      <p className="profile_id">xx_ia.97</p>
                      <p className="profile_intro">자기소개</p>
                    </div>
                  </div>
                </div>
                <div className="follow">
                  <div className="follow_info">
                    <div className="follow_title">
                      <span className="text_tit">스토리</span>
                      <a href="#">
                        <span className="sub_tit">모두보기</span>
                      </a>
                    </div>
                    <div className="follow_list_wrap feed_profile">
                      <ul className="profile follow_list scroll">
                        <li>
                          <img
                            className="profile_img"
                            src="./-images/profile.png"
                          />
                          <div className="profile_info">
                            <p className="profile_id">xx_ia.97</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                        <li>
                          <img
                            className="profile_img"
                            src="./-images/profile.png"
                          />
                          <div className="profile_info">
                            <p className="profile_id">xx_ia.97</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                        <li>
                          <img
                            className="profile_img"
                            src="./-images/profile.png"
                          />
                          <div className="profile_info">
                            <p className="profile_id">xx_ia.97</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                        <li>
                          <img
                            className="profile_img"
                            src="./-images/profile.png"
                          />
                          <div className="profile_info">
                            <p className="profile_id">xx_ia.97</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="follow_info">
                    <div className="follow_title">
                      <span className="text_tit">회원님을 위한 추천</span>
                      <a href="#">
                        <span className="sub_tit">모두보기</span>
                      </a>
                    </div>
                    <div className="follow_list_wrap feed_profile">
                      <ul className="profile follow_list">
                        <li>
                          <img
                            className="profile_img"
                            src="./-images/profile.png"
                          />
                          <div className="profile_info">
                            <p className="profile_id">xx_ia.97</p>
                            <p className="profile_intro">
                              아이디 외 2명이 팔로우
                            </p>
                          </div>
                          <div className="follow_btn">
                            <button type="button" className="btn">
                              <span>팔로우</span>
                            </button>
                          </div>
                        </li>
                        <li>
                          <img
                            className="profile_img"
                            src="./-images/profile.png"
                          />
                          <div className="profile_info">
                            <p className="profile_id">xx_ia.97</p>
                            <p className="profile_intro">
                              ABCDEFGHIJK 외 2명이 팔로우
                            </p>
                          </div>
                          <div className="follow_btn">
                            <button type="button" className="btn">
                              <span>팔로우</span>
                            </button>
                          </div>
                        </li>
                        <li>
                          <img
                            className="profile_img"
                            src="./-images/profile.png"
                          />
                          <div className="profile_info">
                            <p className="profile_id">xx_ia.97</p>
                            <p className="profile_intro">
                              아이디 외 2명이 팔로우
                            </p>
                          </div>
                          <div className="follow_btn">
                            <button type="button" className="btn">
                              <span>팔로우</span>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    );
>>>>>>> c0b9e464f0cd58403159fb56ec68553e1dba01db
  }
}

export default MainHyun;
