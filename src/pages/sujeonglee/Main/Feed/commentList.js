import React from 'react';
import MockComments from './mockcomment';
import '../main-sujeong.scss';

class CommentList extends React.Component {
  Num = 0;
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
      mockcomment: [],
      changeButton: false,
    };
  }
  handleComment = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.Num += 1;
    const newComment = {
      keyId: this.Num,
      userId: 'sujeong',
      userContents: this.state.comment,
    };
    console.log(newComment);
    this.state.comment &&
      this.setState({
        commentList: this.state.commentList.concat(newComment),
        comment: '',
      });
  };
  addComment = e => {
    if (e.keyCode === 13 && this.state.comment.length > 0) {
      this.handleSubmit();
    }
  };
  changeButtonIcon = e => {
    this.setState({ changeButton: !this.state.changeButton });
    console.log(this.chageButtonIcon);
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값  이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          mockcomment: data,
        });
      });
  }

  render() {
    const comments = this.state.commentList.map((reply, i) => (
      <li className="newCommentList" key={reply.keyId}>
        <span className="commentText">
          <span className="commenetUserId">{reply.userId}</span>
          {reply.userContents}
        </span>
        <span className="newCommentIcon">
          <img
            key={i}
            alt="하트"
            src={
              this.state.changeButton === true
                ? '/images/sujeonglee/heart_on.png'
                : '/images/sujeonglee/heart.png'
            }
            className="commentHeart"
            onClick={this.changeButtonIcon}
          />
          <span className="delete">X</span>
        </span>
      </li>
    ));
    return (
      <>
        <div className="commentRow">
          <ul className="newComment">
            {this.state.mockcomment.map(mockcomment => {
              return (
                <MockComments
                  comment={mockcomment.content}
                  key={mockcomment.id}
                  userName={mockcomment.userName}
                />
              );
            })}
            {comments}
          </ul>
        </div>
        <div className="timeLog">
          <span>40분전</span>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="commentContainer">
            <input
              type="text"
              placeholder="댓글 달기..."
              className="commentBox"
              onChange={this.handleComment}
              onKeyUp={this.addComment}
              value={this.state.comment}
            />
            <button
              type="submit"
              className={`commentSubmit ${
                this.state.comment ? 'oncolor' : 'offcolor'
              }`}
            >
              게시
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default CommentList;
