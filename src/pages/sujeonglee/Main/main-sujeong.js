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
        <div className="containerColor">
          <main className="mainContainer">
            <Feed />
            <Aside />
          </main>
        </div>
      </div>
    );
  }
}

export default MainSu;
