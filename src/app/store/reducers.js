import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import displayFormatReedcer from './displayFormatReducer';

export const reducer = combineReducers({
  mailBox: messageReducer,
  displayFormat: displayFormatReedcer
});
