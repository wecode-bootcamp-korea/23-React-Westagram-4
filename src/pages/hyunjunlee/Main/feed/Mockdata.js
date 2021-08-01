import React from 'react';
import './Mockdata.scss';
class Mockdata extends React.Component {
  render() {
    return (
      <li>
        <div className="comments_tit">
          <span className="user_id">{this.props.name}</span>
          <span className="comment_contents">{this.props.comment}</span>
        </div>
      </li>
    );
  }
}
export default Mockdata;
