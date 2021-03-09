import { combineReducers } from 'redux';
import photosReducer from './photos';
import photoReducer from './photoDetails';
import userReducer from './user';
import albumReducer from './album';

const rootReducer = combineReducers({
  photosReducer,
  photoReducer,
  userReducer,
  albumReducer,
});

export default rootReducer;
