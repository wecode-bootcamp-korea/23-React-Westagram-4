/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feedhyun from './feed/Feedhyun';
import Asidehyun from './Aside/Asidehyun';
import './mh.scss';

class MainHyun extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="mainhyun">
          <div className="containerhyun">
            <Feedhyun />
            <Asidehyun />
          </div>
        </div>
      </div>
    );
  }
}

export default MainHyun;
