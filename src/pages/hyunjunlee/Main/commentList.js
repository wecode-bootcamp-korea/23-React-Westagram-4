import React, { Component } from 'react';

class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }

  componentDidCatch() {
    fetch('http://localhost:3001/data/commentDate.json', {
      method: 'GET',
    });
    .then(res => res.json());
    .then(res => {
      this.setState({
        commentList: res.data,
      });
    });
  }

  render() {
    const { commentList, commentValue } = this.state;

    return (
      <div className="commentInput">
        <form onSubmit={this.addComment}>
          <input
            type="text"
            onChange={this.handleCommentValue}
            placeholder="enter comment"
            value={commentValue}
          />
          <button
            className="addCommentBtn"
            type="submit"
            onClick={this.addComment}
          >
            Click
          </button>
        </form>
      </div>
    );
  }
}

export default Comment;