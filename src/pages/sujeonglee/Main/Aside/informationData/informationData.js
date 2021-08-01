import React from 'react';

class InformationData extends React.Component {
  render() {
    const { information, userName, src, alt } = this.props;

    return (
      <>
        <li className="storyContent">
          <div className="storyImg">
            <img alt={alt} src={src} className="profileImg" />
          </div>
          <div className="storyId">
            <span className="userId">{userName}</span>
            <span className="subTitle">{information}</span>
          </div>
        </li>
      </>
    );
  }
}

export default InformationData;
