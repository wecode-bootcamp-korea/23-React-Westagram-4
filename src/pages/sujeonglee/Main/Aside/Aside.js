import React from 'react';
import { withRouter } from 'react-router-dom';
import StoryBox from '../Aside/storyBox/storyBox';
import RecommentBox from '../Aside/recomment/recommentBox';

class Aside extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: {},
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/sujeonglee/storyData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  render() {
    const { story, recomment } = this.state.commentList;

    return (
      <>
        <div className="mainRight">
          <div className="myprofile">
            <div className="myprofileRight">
              <img
                alt="프로필이미지"
                src="https://lh3.googleusercontent.com/proxy/qUfHOB6U1wdd_Llc8keOLJHfFr5H56RXSFh3DAeL3syR7nMu7LfVrgoqjFsOZNvUMoWhE5IWGz29nXc3kigpgUUrGwWPw1FQviCAiSMBByygGr6ZOYxV"
                className="profileImg"
              />
            </div>
            <div className="myprofileLeft">
              <span className="userId">k_rystalee</span>
              <span className="subTitle">DDUBeeeee</span>
            </div>
          </div>
          <StoryBox story={story} />
          <RecommentBox recomment={recomment} />
          <div className="information">
            <span>
              Westagram 정보, 지원, 홍보센터, API, 채용 정보, 개인정보처리방침,
              약관, 디렉터리, 프로필, 해시태그 ,언어
            </span>
            <div className="infomark">
              <span>© 2021 Westagram</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Aside);
