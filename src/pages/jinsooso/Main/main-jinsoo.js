import React from 'react';
import Nav from '../../../components/Nav/Nav';
import AsideSoo from './Aside/AsideSoo';
import FeedSoo from './Feed/FeedSoo';

class MainSoo extends React.Component {
  render() {
    return (
      <div id="jinsoo-body">
        <Nav />
        <main id="jinsoo-main">
          <FeedSoo />
          <AsideSoo />
        </main>
      </div>
    );
  }
}

export default MainSoo;
