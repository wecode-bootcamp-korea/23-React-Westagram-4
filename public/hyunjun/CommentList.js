import React, { Component } from 'react';
import Comment from './feed/Comment';
import './CommentList.scss';

class CommentList extends Component {
  render() {
    return (
      <div className="CommentList">
        <h1>댓글</h1>
        <ul>
          {CommentList.map(comment => {
            return (
              <Comment
                key={comment.id}
                name={comment.userName}
                comment={comment.content}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentList;
