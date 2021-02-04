import * as React from 'react';
import { hydrate } from 'react-dom';
import '@styles/index.scss';
import App from '@components/app/App';
import ErrorBoundary from '@components/errorBoundary';
import { Provider } from 'react-redux';
import configureStore from '@store/store';
import { ApplicationState } from '@store/types';
import Snackbar from '@components/snackbar/Snackbar';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(state as ApplicationState);

hydrate(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
      <Snackbar />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root'),
);
