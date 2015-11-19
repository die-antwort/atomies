'use babel';

import React from 'react';
import {connect} from 'react-redux';
import sidebarActions from '../actions/sidebar';
import Profile from '../components/Profile';

class AtomiesSidebar extends React.Component {

  render() {
    return (
      <span className="atomies-sidebar">
        <h1>Chat</h1>
        is visible: { this.props.sidebar.get('isVisible') ? 'hey' : 'not' }

        <Profile avatar={ this.props.sidebar.get('avatar') }/>

        <button onClick={ () => this.props.dispatch(sidebarActions.toggleVisbility()) }></button>
        <button onClick={ () => this.props.dispatch(sidebarActions.setActive(null)) }>x</button>
      </span>
    );
  }
}

const selectSidebar = (state) => {
  return {
    sidebar: state.get('sidebar'),
  };
};

export default connect(selectSidebar)(AtomiesSidebar);
