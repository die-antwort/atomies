'use babel';

import React from 'react';
import Profile from '../components/Profile';
import {connect} from 'react-redux';
import sidebarActions from '../actions/sidebar';

class AtomiesStatusBar extends React.Component {

  _setActive(avatar) {
    this.props.dispatch(sidebarActions.setActive(avatar));
  }

  render() {
    const avatars = [
      'https://avatars3.githubusercontent.com/u/238180?v=3&s=460',
      'https://avatars3.githubusercontent.com/u/238179?v=3&s=460',
      'https://avatars3.githubusercontent.com/u/238178?v=3&s=460',
    ];

    return (
      <span className="atomies-status-bar">
        <span onClick={ () => this._setActive(avatars[0]) }><Profile avatar={ avatars[0] } /></span>
        <span onClick={ () => this._setActive(avatars[1]) }><Profile avatar={ avatars[1] } /></span>
        <span onClick={ () => this._setActive(avatars[2]) }><Profile avatar={ avatars[2] } /></span>
      </span>
    );
  }
}

const selectSidebar = (state) => {
  return {
    sidebar: state.get('sidebar'),
  };
};

export default connect(selectSidebar)(AtomiesStatusBar);
