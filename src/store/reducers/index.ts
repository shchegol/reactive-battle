import { combineReducers } from 'redux';
import { forumReducer } from './forum';
import { profileReducer } from './profile';
import { auth } from './auth';

export default combineReducers({
  profile: profileReducer,
  forum: forumReducer,
  auth,
});
