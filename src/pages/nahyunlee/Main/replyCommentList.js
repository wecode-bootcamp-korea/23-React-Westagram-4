import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <>
        {this.props.commentList2.map((comm, idx) => {
          return <li key={idx}> {comm} </li>;
        })}
      </>
    );
  }
}

export default Child;
