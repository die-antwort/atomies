'use babel';

import React from 'react';
import ReactDOM from 'react-dom';
import AtomiesStatusBar from '../components/AtomiesStatusBar';
import AtomiesSidebar from '../components/AtomiesSidebar';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';

const Atomies = {
  sidePanel: null,
  store: null,

  activate: () => {
    this.store = configureStore();
    const rootElement = document.createElement('span');
    this.sidePanel = atom.workspace.addRightPanel({ item: rootElement, visible: false });
    ReactDOM.render(<Provider store={this.store}><AtomiesSidebar /></Provider>, rootElement);

    const handleStoreChange = () => {
      const state = this.store.getState();
      if (state.getIn(['sidebar', 'avatar'])) {
        this.sidePanel.show();
      } else {
        this.sidePanel.hide();
      }
    };

    this.store.subscribe(handleStoreChange);
  },

  deactivate: () => {
    this.sidePanel.destroy();
  },

  consumeStatusBar: (statusBar) => {
    const rootElement = document.createElement('span');
    statusBar.addRightTile({
      item: rootElement,
      priority: 200,
    });
    ReactDOM.render(<Provider store={this.store}><AtomiesStatusBar /></Provider>, rootElement);
  },
};

export default Atomies;
