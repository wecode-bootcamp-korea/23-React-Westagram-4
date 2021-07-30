/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */

import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import './Comment.scss';
import Mockdata from './Mockdata';
class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      commentList: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/CommentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          commentList: data,
        });
      });
  }
  textChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  add = () => {
    // arr.push({
    //   text: this.state.newReply,
    // });
    this.setState({
      commentList: this.state.commentList.concat([this.state.value]),
      value: '',
    });
  };

  pressEnter = e => {
    if (e.key === 'Enter') {
      this.add();
      this.setState({
        value: '',
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="comments_form">
        <div className="comment">
          <ul>
            {this.state.commentList.map(comment => {
              return (
                <Mockdata
                  key={comment.id}
                  name={comment.userName}
                  comment={comment.content}
                />
              );
            })}
          </ul>
        </div>
        <div>
          <div className="input_box">
            <input
              type="text"
              placeholder="댓글달기..."
              id="comment_input"
              value={this.state.value}
              // value={comment}
              //이벤트 추가 필요
              // onChange={this.event}
              onChange={this.textChange}
              onKeyPress={this.pressEnter}
            />
          </div>
          <div className="button_box">
            <button
              type="button"
              className="btn"
              // onClick={this.addComment}
              onClick={this.add}
              // value={this.state.newReply}
            >
              <span>게시</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
