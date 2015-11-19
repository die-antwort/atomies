'use babel';

import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';

const initialState = fromJS({
  isVisible: true,
  avatar: null,
});

export default createReducer(initialState, {
  ['SIDEBAR_TOGGLE']: (sidebar) => {
    return sidebar.set('isVisible', !sidebar.get('isVisible'));
  },
  ['SIDEBAR_SET_ACTIVE']: (sidebar, action) => {
    return sidebar.set('avatar', action.payload.avatar);
  },
});
