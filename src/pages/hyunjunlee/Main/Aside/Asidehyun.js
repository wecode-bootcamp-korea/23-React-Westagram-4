/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../Aside/Asidehyun.scss';

class Asidehyun extends React.Component {
  render() {
    return (
      <aside className="contents_right">
        <div className="aside">
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
          <div className="followhyun">
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
                      <p className="profile_intro">아이디 외 2명이 팔로우</p>
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
                      <p className="profile_intro">아이디 외 2명이 팔로우</p>
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
        </div>
      </aside>
    );
  }
}
export default Asidehyun;
