import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { Store } from 'redux';
import App from '@components/app/App';

export default (location: string, store: Store, context: StaticRouterContext | undefined) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={location}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>,
  );
  const preloadedState = store.getState();
  const helmet = Helmet.renderStatic();
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link
            rel="icon"
            type="image/png"
            href="/dist/favicon.ico"
          />
          <link rel="stylesheet" href="bundle.css">
      </head>
      <body>
          <div id="root">${content}</div>
          <script>
              window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/bundle.js"></script>
      </body>
    </html>
    `;
};
