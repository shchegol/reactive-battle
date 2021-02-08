import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import reducers from './reducers';

export const isServer = !(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

export default (url = '/') => {
  const history = isServer
    ? createMemoryHistory({
      initialEntries: [url],
    })
    : createBrowserHistory();

  const preloadedState = !isServer ? window.__PRELOADED_STATE__ : {};

  if (!isServer) {
    delete window.__PRELOADED_STATE__;
  }

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
