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
import { ThemeProvider } from '@root/contexts/theme';

import '@styles/index.scss';
import { IntlProvider } from 'react-intl';
import messages_ru from '@root/lang/ru.json';
import messages_en from '@root/lang/en.json';

const initialState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = configureStore(initialState as ApplicationState);
const history = createHistory();
const AppWithLoading = withLoading(App);
const messages = {
  ru: messages_ru,
  en: messages_en,
};

const markup = (
  <ErrorBoundary>
    <Provider store={store}>
      <Helmet
        title="Reactive Battle"
        titleTemplate="%s - Reactive Battle"
      />
      <ConnectedRouter history={history}>
        <ThemeProvider>
          <IntlProvider
            locale="ru"
            messages={messages.ru}
          >
            <AppWithLoading />
          </IntlProvider>
        </ThemeProvider>
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
