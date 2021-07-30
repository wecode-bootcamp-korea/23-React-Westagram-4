import React from 'react';
import Comments from './Comment/comments';

class FeedSoo extends React.Component {
  render() {
    return (
      <div id="feeds-container">
        <article className="feeds">
          <div id="owner">
            <a
              id="profile-container"
              href="https://www.pngitem.com/pimgs/m/126-1265370_laughing-20-png-man-laughing-png-transparent-png.png"
            >
              <img
                className="main-icon circle-icon"
                src="https://www.pngitem.com/pimgs/m/126-1265370_laughing-20-png-man-laughing-png-transparent-png.png"
                alt="사용자 프로필"
              />
              <div className="owner-name">after_wecode</div>
            </a>
            <div id="more">...</div>
          </div>
          <div id="picture-container">
            <img
              id="picture"
              src="https://i.pinimg.com/originals/19/17/bd/1917bd45991aee156422306dfc857eae.jpg"
              alt="피드사진"
            />
          </div>
          <Comments />
        </article>
      </div>
    );
  }
}

export default FeedSoo;
