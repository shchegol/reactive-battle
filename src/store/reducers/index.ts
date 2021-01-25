import { combineReducers } from 'redux';
import { forumReducer } from './forum';

import { profileReducer } from './profile';

export default combineReducers({
  profile: profileReducer,
  forum: forumReducer,
});
