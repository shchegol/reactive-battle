import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import { ApplicationState } from './types';

export default function configureStore(preloadedState: ApplicationState) {
  const store = createStore(reducer, preloadedState, composeWithDevTools());
  return store;
}
