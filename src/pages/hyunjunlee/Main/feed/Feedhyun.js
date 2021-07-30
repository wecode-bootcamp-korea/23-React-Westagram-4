/* eslint-disable no-unused-vars */
import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import './feed.scss';
import Comment from './Comment';

// import commentList from '../CommentList';

class Feedhyun extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  render() {
    console.log(this.state);
    const { commentList } = this.state;
    return (
      <div className="contents_left">
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
                      <span className="user_id">이현준</span>님 외 10명이
                      좋아합니다.
                    </p>
                  </div>
                </div>

                <div className="comment_list comments_margin">
                  <ul className="comments_info comment_list_ul">
                    <li>
                      <div className="comments_tit">
                        <span className="user_id">xx_ia.97</span>
                        <span className="comment_contents">feed</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="feed_time">
                  <p className="time">4시30분</p>
                </div>

                <Comment />
                {/* {commentList.map((comment, i) => (
                  <li key={i} className="comment_box">
                      <span className="comment_id">{comment.userName}</span>
                      {comment.content}
                    </li>
                  ))} */}
                {/* <ul className="textBox">
                        <li className="textBoxLi">
                          {this.state.commentList.map((comment, index) => {
                            return <li key={index}>{comment} </li>;
                          })}
                        </li>
                      </ul> */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedhyun;
