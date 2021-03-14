import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createHistory from '@store/history';
import { ApplicationState } from '@store/types';
import reducers from './reducers';

const composeEnhancers = (
  process.env.NODE_ENV !== 'production'
  && typeof window !== 'undefined'
  && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
)
  || compose;

export default (preloadedState: ApplicationState, url = '/') => {
  const history = createHistory({ initialEntries: [url] });

  return createStore(
    reducers(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
      ),
    ),
  );
};
