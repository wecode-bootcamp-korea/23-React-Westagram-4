import React from 'react';
//import CommentList from '../Comment/CommentList';
import Nav from '../../../components/Nav/Nav';
import Child from '../Main/replyCommentList';

import './MainNa.scss';

class MainNa extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      commentList2: [],
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  addComment = () => {
    this.setState({
      commentList2: this.state.commentList2.concat([this.state.value]),
      value: '',
    });
  };

  addCommEnter = e => {
    if (e.key === 'Enter') {
      this.addComment();
      this.setState({
        value: '',
      });
    }
  };

  render() {
    return (
      <div className="mainNa">
        <Nav />

        <div className="mainArticles">
          <div className="feeds">
            <article className="article">
              <div className="account">
                <img
                  className="profile"
                  src="images/nahyunlee/profile.jpg"
                  alt="profile"
                />
                <p className="accountName">
                  <b>hyonii_xx</b>
                </p>
                <i className="fas fa-ellipsis-h"></i>
              </div>

              <img
                className="feedsimg"
                alt="feedImg"
                src="images/nahyunlee/graduate.jpg"
              />

              <div className="iconContainer">
                <ul className="icons">
                  <li>
                    <img
                      className="hearticon"
                      alt="heartIcon"
                      src="images/nahyunlee/heart.png"
                    />
                  </li>
                  <li>
                    <i className="far fa-comment"></i>
                  </li>
                  <li>
                    <i className="far fa-share-square"></i>
                  </li>
                </ul>
                <i className="far fa-bookmark"></i>
              </div>

              <div className="desContainer">
                <p className="likes">좋아요 1,019개</p>
                <ul className="description">
                  <li className="descriptionId">hyonii_xx</li>
                  <li className="descriptionDetail">
                    저 오늘 졸업했어요. 2019년 2월 졸업이었는데 코로나때문에
                    졸업이 연기되면서 2019년 7월 졸업식에 참여했어요. 졸업식
                    가운을 입고 열심히 돌아다니는데 땀 퐁퐁퐁.. 이 더위를 식혀줄
                    무언가가 필요해;;
                  </li>
                </ul>
                <ul className="inputReply">
                  <Child commentList2={this.state.commentList2} />
                </ul>
                <p className="time">41분 전</p>
              </div>
              <div className="replyContainer">
                <i className="far fa-grin"></i>
                <input
                  value={this.state.value}
                  onChange={this.handleChange}
                  onKeyPress={this.addCommEnter}
                  className="reply"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button onClick={this.addComment} className="replybutton">
                  게시
                </button>
              </div>
            </article>
          </div>

          <aside className="main-right">
            <div className="accounts">
              <img
                className="accountimg"
                alt="profile"
                src="images/nahyunlee/profile.jpg"
              />
              <p className="accountName">
                <b>hyonii_xx</b>
                <br />
                바리바리짱바리
              </p>
              <p className="accountBtn">전환</p>
            </div>

            <div className="storyContainer">
              <ul className="stories">
                <li className="stories1">스토리</li>
                <li className="stories2">모두 보기</li>
              </ul>

              <div className="storyProfile">
                <div className="storyBtn1">
                  <img
                    alt="storyProfile1"
                    src="images/nahyunlee/sprofile1.jpg"
                  />
                  <p className="storyid">
                    <b>go_mj_</b>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
                <div className="storyBtn2">
                  <img
                    alt="storyProfile2"
                    src="images/nahyunlee/sprofile2.jpg"
                  />
                  <p className="storyid">
                    <b>marongiela</b>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
                <div className="storyBtn3">
                  <img
                    alt="storyProfile3"
                    src="images/nahyunlee/sprofile3.jpg"
                  />
                  <p className="storyid">
                    <b>hee_diarios</b>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
                <div className="storyBtn4">
                  <img
                    alt="storyProfile4"
                    src="images/nahyunlee/sprofile4.jpg"
                  />
                  <p className="storyid">
                    <b>yusuzy</b>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
              </div>

              <div className="recommendationContainer">
                <ul className="foryou">
                  <li className="foryouLabel1">회원님을 위한 추천</li>
                  <li className="foryouLabel2">모두 보기</li>
                </ul>
                <div className="recommendations">
                  <div className="recommendation1">
                    <img
                      alt="foryouProfile1"
                      src="images/nahyunlee/foryou1.jpg"
                    />
                    <p className="storyid">
                      <b>dongne43</b>
                    </p>
                    <p className="follow">팔로우</p>
                  </div>
                  <div className="recommendation2">
                    <img
                      alt="foryouProfile2"
                      src="images/nahyunlee/foryou2.jpg"
                    />
                    <p className="storyid">
                      <b>chell_ta2</b>
                    </p>
                    <p className="follow">팔로우</p>
                  </div>
                  <div className="recommendation3">
                    <img
                      alt="foryouProfile3"
                      src="images/nahyunlee/foryou3.jpg"
                    />
                    <p className="storyid">
                      <b>h_tae0</b>
                    </p>
                    <p className="follow">팔로우</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="rights">
              소개, 도움말, 홍보센터, API, 채용정보,
              <br /> 개인정보처리방침, 양관, 위치,계정, 해시태그, 언어
            </p>
            <br />
            <p className="rights">© 2021 INSTAGRAM FROM FACEBOOK</p>
          </aside>
        </div>
      </div>
    );
  }
}

export default MainNa;
