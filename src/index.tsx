import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@styles/index.scss';
import App from '@components/app/App';
import ErrorBoundary from '@components/errorBoundary';
import { Provider } from 'react-redux';
import configureStore from '@store/store';
import { ApplicationState } from '@store/types';
import Snackbar from '@components/snackbar/Snackbar';
import { withLoading } from '@root/hocs/withLoading';

const store = configureStore({} as ApplicationState);
const AppWithLoading = withLoading(App);

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <AppWithLoading />
      <Snackbar />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root') as HTMLElement,
);
