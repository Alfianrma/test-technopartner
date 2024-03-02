import {combineReducers} from 'redux';
import TokenReducer from './TokenReducer';

const combineReducer = combineReducers({
  token: TokenReducer,
});

export default combineReducer;
