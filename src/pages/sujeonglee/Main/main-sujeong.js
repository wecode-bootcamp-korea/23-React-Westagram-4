import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from '../Main/Feed/Feed';
import Aside from '../Main/Aside/Aside';
import './main-sujeong.scss';

class MainSu extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <main>
          <Feed />
          <Aside />
        </main>
      </div>
    );
  }
}

export default MainSu;
