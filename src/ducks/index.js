import { combineReducers } from 'redux';
import photosReducer from './photos';
import photoReducer from './photoDetails';
import userReducer from './user';

const rootReducer = combineReducers({
  photosReducer,
  photoReducer,
  userReducer,
});

export default rootReducer;
