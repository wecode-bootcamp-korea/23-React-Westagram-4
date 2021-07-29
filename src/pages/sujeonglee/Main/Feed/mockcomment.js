import React from 'react';

class MockComments extends React.Component {
  render() {
    return (
      <>
        <li className="newCommentList">
          <span className="commentText">
            <span className="commenetUserId">{this.props.userName}</span>
            {this.props.comment}
          </span>
          <span className="newCommentIcon">
            <img
              alt="하트"
              src="images/sujeonglee/heart.png"
              className="commentHeart"
            />
            <span className="delete">X</span>
          </span>
        </li>
      </>
    );
  }
}

export default MockComments;
