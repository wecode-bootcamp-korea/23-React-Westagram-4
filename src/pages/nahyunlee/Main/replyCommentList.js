import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <>
        {this.props.commentList2.map((comm, idx) => {
          return (
            <li key={idx}>
              {' '}
              <b>hyen43</b> {comm}{' '}
            </li>
          );
        })}
      </>
    );
  }
}

export default Child;
