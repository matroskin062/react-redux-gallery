import { combineReducers } from 'redux';
import photosReducer from './photos';
import photoReducer from './photoDetails';

const rootReducer = combineReducers({ photosReducer, photoReducer });

export default rootReducer;
