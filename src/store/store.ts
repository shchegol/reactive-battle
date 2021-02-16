import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createHistory from '@store/history';
import { ApplicationState } from '@store/types';
import reducers from './reducers';

export default (preloadedState: ApplicationState, url = '/') => {
  const history = createHistory({ initialEntries: [url] });

  return createStore(
    reducers(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
      ),
    ),
  );
};
