import React from 'react';
import InformationData from '../informationData/informationData';

class StoryBox extends React.Component {
  render() {
    const { story } = this.props;

    return (
      <>
        <div className="story">
          <div className="storyHead">
            <span className="storyLeft">스토리</span>
            <span className="storyRight">모두 보기</span>
          </div>

          {story &&
            story.map(ele => {
              return (
                <InformationData
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

export default StoryBox;
