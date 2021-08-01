import React from 'react';

class RecommentInfo extends React.Component {
  render() {
    const { information, userName, src, alt } = this.props;

    return (
      <>
        <li className="recommendContent">
          <div className="recommendContentLeft">
            <div className="recommendImg">
              <img alt={alt} src={src} className="profileImg" />
            </div>
            <div className="recommendId">
              <span className="userId">{userName}</span>
              <span className="subTitle">{information}</span>
            </div>
          </div>
          <span className="recommendFollow">
            <a href="dasf">팔로우</a>
          </span>
        </li>
      </>
    );
  }
}

export default RecommentInfo;
