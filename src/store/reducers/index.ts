import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { forumReducer } from './forum';
import user from './user';
import { auth } from './auth';
import { snackbar } from './snackbar';
import game from './game';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  auth,
  user,
  snackbar,
  forum: forumReducer,
  game,
});

export default createRootReducer;
