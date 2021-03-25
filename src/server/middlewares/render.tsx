import React from 'react';
import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import Helmet, { HelmetData } from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';
import App from '@components/app/App';
import configureStore from '@store/store';
import { ApplicationState } from '@store/types';
import { AuthActions } from '@store/actions/auth';
import { UserActions } from '@store/actions/user';
import { LoadingActions } from '@store/actions/loading';
import { withLoading } from '@root/hocs/withLoading';

const serialize = require('serialize-javascript');

const AppWithLoading = withLoading(App);
const isProd = process.env.NODE_ENV === 'production';

function getHtml(
  reactHtml: string,
  reduxState = {},
  helmetData: HelmetData,
) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
          ${helmetData.title.toString()}
          ${helmetData.meta.toString()}
          ${helmetData.link.toString()}
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link
            rel="icon"
            type="image/png"
            href="/dist/favicon.ico"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <link rel="stylesheet" href="/bundle.css">
      </head>
      <body>
          <div id="root">${reactHtml}</div>
          <div id="snackbar"></div>
          <script>
              ${isProd ? 'window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}' : ''}
              window.__PRELOADED_STATE__ = ${serialize(reduxState, { isJSON: true })}
          </script>
          <script src="/bundle.js"></script>
      </body>
    </html>
    `;
}

export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};
  const store = configureStore({} as ApplicationState, location);

  const { code: oAuthCode } = req.query;
  if (oAuthCode) {
    store.dispatch({ type: AuthActions.YAAUTH_REQUEST, payload: { oAuthCode } });
  }

  // const { userLogin: login, isOAuth } = req.cookies;

  if (req.session.user && req.cookies.ssid) {
    // if (isOAuth === 'true') {
    //   store.dispatch({ type: AuthActions.YAAUTH_SUCCESS });
    // } else {
    store.dispatch({ type: AuthActions.SIGNIN_SUCCESS });
    // }
    store.dispatch({ type: UserActions.FETCH_SUCCESS, payload: { info: req.session.user } });
  }

  // show preloader
  store.dispatch({ type: LoadingActions.SHOW });

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={location}
        context={context}
      >
        <AppWithLoading />
      </StaticRouter>
    </Provider>,
  );

  const preloadedState = store.getState();
  const helmet = Helmet.renderStatic();

  if (context.url && !oAuthCode) {
    res.redirect(context.url);
    return;
  }

  res.status(context.statusCode || 200).send(
    getHtml(content, preloadedState, helmet),
  );
};
