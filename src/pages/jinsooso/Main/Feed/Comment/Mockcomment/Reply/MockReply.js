import React from 'react';

class MockReply extends React.Component {
  render() {
    const { userName, content } = this.props;
    return (
      <>
        <div className="reply-friends" style={{ marginBottom: '5px' }}>
          <div className="reply-left">
            <a href="www.instagram.com" className="owner-name owner-left">
              {userName}
            </a>
            <p className="contents-reply">{content}</p>
          </div>
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="투명하트"
            id="white-heart"
            disabled="isLiked"
          />
        </div>
      </>
    );
  }
}

export default MockReply;
