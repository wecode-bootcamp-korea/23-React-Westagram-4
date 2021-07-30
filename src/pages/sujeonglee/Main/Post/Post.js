import React from 'react';
import { withRouter } from 'react-router-dom';

class Post extends React.Component {
  render() {
    return (
      <>
        <div className="commentRow">
          <ul className="newComment">
            <li className="newCommentList">
              <span className="commentText">
                <span className="commenetUserId">sujeong</span>위코드 위스타그램
                클린코딩!~~
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
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(Post);
