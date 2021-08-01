import React from 'react';

class CommentChild extends React.Component {
  render() {
    const { userName, content, id, isLiked, changeButtonIcon } = this.props;

    return (
      <>
        <li className="newCommentList" key={id}>
          <span className="commentText">
            <span className="commenetUserId">{userName}</span>
            {content}
          </span>
          <span className="newCommentIcon">
            <img
              alt="하트"
              src={
                isLiked === true
                  ? '/images/sujeonglee/heart_on.png'
                  : '/images/sujeonglee/heart.png'
              }
              className="commentHeart"
              onClick={changeButtonIcon}
            />
            <span className="delete">X</span>
          </span>
        </li>
      </>
    );
  }
}

export default CommentChild;
