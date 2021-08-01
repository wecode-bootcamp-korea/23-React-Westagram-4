import React from 'react';
import RecommentInfo from '../informationData/recommentInfo';

class RecommentBox extends React.Component {
  render() {
    const { recomment } = this.props;

    return (
      <>
        <div className="recommend">
          <div className="recommendHead">
            <span className="recommendLeft">회원님을 위한 추천</span>
            <span className="recommendRight">모두 보기</span>
          </div>

          {recomment &&
            recomment.map(ele => {
              return (
                <RecommentInfo
                  key={ele.id}
                  userName={ele.userName}
                  information={ele.information}
                  alt={ele.alt}
                  src={ele.src}
                />
              );
            })}
        </div>
      </>
    );
  }
}

export default RecommentBox;
