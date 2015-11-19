'use babel';

import { createStore } from 'redux';
import { fromJS } from 'immutable';
import reducer from '../reducers/index';

const configureStore = (initialState = fromJS({})) => {
  return createStore(reducer, initialState);
};

export default configureStore;
