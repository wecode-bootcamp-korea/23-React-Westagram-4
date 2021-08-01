import React from 'react';
import CommentChild from '../Feed/commentChild';
import '../main-sujeong.scss';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
    };
  }

  handleComment = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { commentList } = this.state;
    const { userAdd } = this.props;
    const newComment = {
      id: Math.random(),
      userName: 'sujeong',
      content: this.state.comment,
      isLiked: false,
    };

    this.state.comment &&
      this.setState({
        commentList: commentList.concat(newComment),
        comment: '',
      });
  };

  changeButtonIcon = e => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  render() {
    const post = this.state.commentList;

    return (
      <>
        <div className="commentRow">
          <ul className="newComment">
            {post &&
              post.map(reply => {
                return (
                  <CommentChild
                    key={reply.id}
                    userName={reply.userName}
                    content={reply.content}
                    isLiked={reply.isLiked}
                    changeButtonIcon={this.changeButtonIcon}
                  />
                );
              })}
          </ul>
        </div>
        <div className="timeLog">
          <span>40분전</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="commentContainer">
            <input
              type="text"
              placeholder="댓글 달기..."
              className="commentBox"
              onChange={this.handleComment}
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
