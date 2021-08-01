import React from 'react';
import MockReply from './Reply/MockReply';

class MockComment extends React.Component {
  hoorya = 0;
  constructor() {
    super();
    this.state = {
      // 목데이터 state
      commentList: [],
      // 댓글 구현 state
      newReply: '',
      replies: [],
      userId: [
        'wecoder23rd',
        'its!mee',
        'nicetomee',
        'bonapetti',
        'nothingmoretosay',
      ],
    };
  }

  // 목데이터 댓글 기능

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  // 댓글 기능구현 구역

  textChange = e => {
    this.setState({ newReply: e.target.value });
  };

  inputComment = () => {
    let comments = {
      id: this.hoorya++,
      comment: this.state.newReply,
    };

    this.setState({
      replies: [...this.state.replies, comments],
      newReply: '',
    });
  };

  buttonClick = () => {
    this.inputComment();
  };

  enterClick = e => {
    if (e.key === 'Enter') {
      this.inputComment();
    }
  };

  render() {
    let { commentList, userId, replies } = this.state;
    let commenty = replies.map((next, i) => (
      <div
        className="reply-friends"
        style={{ marginBottom: '5px' }}
        key={next.id}
      >
        <div className="reply-left">
          <a href="www.instagram.com" className="owner-name owner-left">
            {userId[i]}
          </a>
          <p className="contents-reply">{next.comment}</p>
        </div>
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="투명하트"
          id="white-heart"
        />
      </div>
    ));
    return (
      <>
        <div id="reply">
          <div className="reply-owner">
            <a className="owner-name owner-left" href="www.instagram.com">
              after_wecode
            </a>
            <p className="contents-reply">
              wecode 다니고 나의 성공시대 시작됐다~
            </p>
            <div id="more-button">...더보기</div>
          </div>
          <div>
            {commentList.map(comment => {
              return (
                <MockReply
                  key={comment.id}
                  userName={comment.userName}
                  content={comment.content}
                />
              );
            })}
          </div>
        </div>
        {commenty}
        <div className="minutes-before">365일 전</div>
        <div id="reply-container">
          <input
            type="text"
            className="input-reply"
            placeholder="댓글 달기..."
            onChange={this.textChange}
            onKeyPress={this.enterClick}
            value={this.state.newReply}
          />
          <button
            href="www.instagram.com"
            className="upload-a"
            onClick={this.buttonClick}
          >
            게시
          </button>
        </div>
      </>
    );
  }
}

export default MockComment;
