import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { ApplicationState } from '@store/types';
import reducers from './reducers';

export const isServer = !(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

export default (preloadedState: ApplicationState, url = '/') => {
  const history = isServer
    ? createMemoryHistory({ initialEntries: [url] })
    : createBrowserHistory();

  const store = createStore(
    reducers(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
      ),
    ),
  );

  return { store, history };
};
