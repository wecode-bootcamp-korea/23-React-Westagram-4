import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <>
        {this.props.commentList2.map((comm, idx) => {
          return <li key={idx}> hyen43 {comm} </li>;
        })}
      </>
    );
  }
}

export default Child;
