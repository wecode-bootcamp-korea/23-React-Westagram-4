import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Aside extends React.Component {
  render() {
    return (
      <>
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
              Westagram 정보, 지원, 홍보센터, API, 채용 정보, 개인정보처리방침,
              약관, 디렉터리, 프로필, 해시태그 ,언어
            </span>
            <div className="infomark">
              <span>© 2021 Westagram</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Aside);
