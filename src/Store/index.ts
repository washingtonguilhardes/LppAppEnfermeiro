import { combineReducers, createStore } from 'redux';

import { filter } from './Filter';

export default createStore(
  combineReducers({
    filter,
  }),
);
