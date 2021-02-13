import * as React from 'react';
import { hydrate, render } from 'react-dom';
import '@styles/index.scss';
import App from '@components/app/App';
import ErrorBoundary from '@components/errorBoundary';
import { Provider } from 'react-redux';
import configureStore, { isServer } from '@store/store';
import Snackbar from '@components/snackbar/Snackbar';
import { withLoading } from '@root/hocs/withLoading';
import { ConnectedRouter } from 'connected-react-router';
import { Helmet } from 'react-helmet';
import { ApplicationState } from '@store/types';

const initialState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const { store, history } = configureStore(initialState as ApplicationState);
const AppWithLoading = withLoading(App);

const markup = (
  <ErrorBoundary>
    <Provider store={store}>
      <Helmet
        title="Reactive Battle"
        titleTemplate="%s - Reactive Battle"
      />
      <ConnectedRouter history={history}>
        <AppWithLoading />
      </ConnectedRouter>
      <Snackbar />
    </Provider>
  </ErrorBoundary>
);

if (isServer) {
  hydrate(
    markup,
    document.getElementById('root'),
  );
} else {
  render(
    markup,
    document.getElementById('root'),
  );
}
