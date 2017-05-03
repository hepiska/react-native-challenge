import { combineReducers } from 'redux';

import WeatherdReducer from './weatherReducer';

const RootReducer = combineReducers({
  weathers: WeatherdReducer,
});

export default RootReducer;
