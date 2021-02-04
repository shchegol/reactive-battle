import { combineReducers } from 'redux';
import { forumReducer } from './forum';
import user from './user';
import { auth } from './auth';
import { snackbar } from './snackbar';

export default combineReducers({
  auth,
  user,
  snackbar,
  forum: forumReducer,
});
