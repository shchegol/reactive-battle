import * as React from 'react';
import { hydrate } from 'react-dom';
import App from '@components/app/App';
import ErrorBoundary from '@components/errorBoundary';
import { Provider } from 'react-redux';
import configureStore from '@store/store';
import Snackbar from '@components/snackbar/Snackbar';
import { withLoading } from '@root/hocs/withLoading';
import { ConnectedRouter } from 'connected-react-router';
import { Helmet } from 'react-helmet';
import { ApplicationState } from '@store/types';
import createHistory from '@store/history';
import '@styles/index.scss';

const initialState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = configureStore(initialState as ApplicationState);
const history = createHistory();
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

hydrate(
  markup,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
