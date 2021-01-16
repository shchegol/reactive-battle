import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@styles/index.scss';
import App from '@components/app/App';
import ErrorBoundary from '@components/errorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root') as HTMLElement,
);
