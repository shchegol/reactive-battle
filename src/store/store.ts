import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import { ApplicationState } from './types';

export default function configureStore(preloadedState: ApplicationState) {
  const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
      ),
    ),
  );
  return store;
}
