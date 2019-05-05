import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import messageReducer from './reducers';

const middleware = [thunk];

export const store = createStore(
  combineReducers({ mailBox: messageReducer }),
  {},
  applyMiddleware(...middleware)
);
