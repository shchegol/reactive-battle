import * as React from 'react';
import { hydrate } from 'react-dom';
import '@styles/index.scss';
import App from '@components/app/App';
import ErrorBoundary from '@components/errorBoundary';
import { Provider } from 'react-redux';
import configureStore from '@store/store';
import Snackbar from '@components/snackbar/Snackbar';
import { withLoading } from '@root/hocs/withLoading';
import { ConnectedRouter } from 'connected-react-router';
import { Helmet } from 'react-helmet';

const { store, history } = configureStore();
const AppWithLoading = withLoading(App);

hydrate(
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
  </ErrorBoundary>,
  document.getElementById('root'),
);
