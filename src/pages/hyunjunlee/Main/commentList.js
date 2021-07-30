/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Comment from './feed/Comment';
//import COMMENTDATA from '../../../../public/data/CommentDate';
import './CommentList.scss';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentDate.json', {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  render() {
    const { commentList } = this.state;

    return (
      <div className="comment">
        <ul>
          {commentList.map(comment => {
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
