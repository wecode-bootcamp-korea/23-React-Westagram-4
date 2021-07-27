<<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
=======
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
>>>>>>> 169b68baf2a404b58838e5b532ad443ac62f7169
import React from 'react';
import './Main.scss';

class MainHyun extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: '',
  //     commentList: [{ text: '' }],
  //   };
  // }
  // inputComment = e => {
  //   this.setState({ value: e.target.value });
  // };
  // pressEnter = e => {
  //   if (e.key === 'Enter') {
  //     this.submitComment(e);
  //   }
  // };
  // submitComment = e => {
  //   e.preventDefault();
  //   const comment = {
  //     text: this.state.value,
  //   };
  //   this.setState({
  //     commentList: this.state.commentList.concat(comment),
  //   });
  // };
  render() {
    return (
      <div>
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
                          src="../../images/hyunjunlee/profile.png"
                          alt="#"
                        />
                        <p className="profile_id">xx_ia.97</p>
                      </div>
                      <div className="profile_add link_list">
                        <button type="button" className="state_btn">
                          <img
                            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                            alt="#"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="feed_box">
                      <img src="/images/hyunjunlee/feed.png" alt="#" />
                    </div>
                    <div className="feed_info">
                      <div className="feed_state">
                        <ul className="link_list">
                          <li>
                            <button type="button" className="state_btn">
                              <img
                                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                                alt="#"
                              />
                            </button>
                          </li>
                          <li>
                            <button type="button" className="state_btn">
                              <img
                                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                                alt="#"
                              />
                            </button>
                          </li>
                          <li>
                            <button type="button" className="state_btn">
                              <img
                                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                                alt="#"
                              />
                            </button>
                          </li>
                        </ul>
                        <div className="link_lists">
                          <button type="button" className="state_btn">
                            <img
                              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                              alt="#"
                            />
                          </button>
                        </div>
                      </div>
                      <div className="feed_comments">
                        <div className="feed_likes comments_margin">
                          <div className="likes_user profile">
                            <img
                              src="../../images/hyunjunlee/profile.png"
                              className="profile_img"
                              alt="#"
                            />
                          </div>
                          <div className="comments_info comment_list_ul">
                            <p className="comments_tit">
                              <span className="user_id">이현준</span>님 외
                              10명이 좋아합니다.
                            </p>
                          </div>
                        </div>
                        <div className="comment_list comments_margin">
                          <ul className="comments_info comment_list_ul">
                            <li>
                              <div className="comments_tit">
                                <span className="user_id">xx_ia.97</span>
                                <span className="comment_contents">감성짤</span>
                              </div>
                            </li>
                          </ul>
                          {/* <ul className="textBox">
                            {this.state.commentList.map(el => (
                              <li>xx_ia.97:{el.text}</li>
                            ))}
                          </ul> */}
                          <div className="feed_time">
                            <p className="time">4시30분</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comments_form">
                      <div className="input_box">
                        <input
                          type="text"
                          placeholder="댓글달기..."
                          id="comment_input"
                          // onChange={this.inputComment}
                          // onKeyDown={this.pressEnter}
                        />
                      </div>
                      <div className="button_box">
                        <button
                          type="button"
                          className="btn"
                          // onClick={this.submitComment}
                        >
                          <span>게시</span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contents_right">
              <aside className="aside">
                <div className="feed_profile aside_profile">
                  <div className="profile">
                    <img
                      src="../../images/hyunjunlee/profile.png"
                      className="profile_imgs"
                      alt="#"
                    />
                    <div className="profile_info">
                      <p className="profile_id">xx_ia.97</p>
                      <p className="profile_intro">자기소개</p>
                    </div>
                  </div>
                </div>
                <div className="follow">
                  <div className="follow_info follow_story">
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
                            src="../../images/hyunjunlee/profile.png"
                            alt="#"
                          />
                          <div className="profile_info">
                            <p className="profile_id">xx_ia.97</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                        <li>
                          <img
                            className="profile_img"
                            src="../../images/hyunjunlee/profile.png"
                            alt="#"
                          />
                          <div className="profile_info">
                            <p className="profile_id">xx_ia.97</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                        <li>
                          <img
                            className="profile_img"
                            src="../../images/hyunjunlee/profile.png"
                            alt="#"
                          />
                          <div className="profile_info">
                            <p className="profile_id">xx_ia.97</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                        <li>
                          <img
                            className="profile_img"
                            src="../../images/hyunjunlee/profile.png"
                            alt="#"
                          />
                          <div className="profile_info">
                            <p className="profile_id">xx_ia.97</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="follow_info follow_story">
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
                            className="profile_imgs"
                            src="../../images/hyunjunlee/profile.png"
                            alt="#"
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
                            className="profile_imgs"
                            src="../../images/hyunjunlee/profile.png"
                            alt="#"
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
                            className="profile_imgs"
                            src="../../images/hyunjunlee/profile.png"
                            alt="#"
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
  }
}

export default MainHyun;
