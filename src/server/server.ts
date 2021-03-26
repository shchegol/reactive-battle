import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import router from '@server/routes';
import renderMiddleware from '@server/middlewares/render';
import logger from '@server/middlewares/logger';

const bodyParser = require('body-parser');
const session = require('express-session');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack/ssr/client.dev.js');

const ifProd = process.env.NODE_ENV === 'production';
const app = express();
const compiler = webpack(webpackConfig);

declare module 'express-session' {
  export interface SessionData {
    user: {
      id: number
      login: string
    };
  }
}

if (!ifProd) {
  app
    .use(
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        serverSideRender: true,
      }),
    )
    .use(webpackHotMiddleware(compiler, {
      path: '/__webpack_hmr',
    }))
    .use(logger);
}

app
  .use(session({
    key: 'ssid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  }))
  .use(cookieParser())
  .use(cors({ credentials: true }))
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(router)
  .use((req, res, next) => {
    if (req.cookies.ssid && !req.session.user) {
      res.clearCookie('ssid');
    }
    next();
  });

app.get('*', renderMiddleware);

export { app };
