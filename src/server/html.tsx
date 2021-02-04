import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { Route, StaticRouter, Switch } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import { Store, AnyAction } from 'redux';
import Forum from '@pages/forum/Forum';
import ForumThread from '@pages/forumThread/ForumThread';

export default (location: string, store: Store<any, AnyAction>, context: StaticRouterContext | undefined) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={location}
        context={context}
      >
        <Switch>
          <Route
            exact
            path="/forum"
            component={Forum}
          />
          <Route
            path="/forum/:id"
            component={ForumThread}
          />
        </Switch>
      </StaticRouter>
    </Provider>,
  );
  const helmet = Helmet.renderStatic();
  return `<!DOCTYPE html>
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
            <title></title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
            </script>
            <script src="/bundle.js"></script>
        </body>
      </html>`;
};
