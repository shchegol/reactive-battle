import { combineReducers } from 'redux';
import { forumReducer } from './forum';
import { profileReducer } from './profile';
import { auth } from './auth';
import { snackbar } from './snackbar';

export default combineReducers({
  auth,
  profile: profileReducer,
  forum: forumReducer,
  snackbar,
});
