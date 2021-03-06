import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import router from '@server/routes';
import renderMiddleware from '@server/middlewares/render';
import logger from '@server/middlewares/logger';
import { SESSION_EXPIRES, SESSION_SECRET } from '@root/constants';

const bodyParser = require('body-parser');
const session = require('express-session');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack/ssr/client.dev.js');

const isProd = process.env.NODE_ENV === 'production';
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

if (!isProd) {
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
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: SESSION_EXPIRES,
      httpOnly: true,
      sameSite: true,
      // secure: true,
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
