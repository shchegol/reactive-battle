import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import renderMiddleware from './render-middleware';

const webpackConfig = require('../../webpack/webpack.server.js');

const app = express();
const compiler = webpack(webpackConfig[1]);

app
  .use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig[1].output.publicPath,
    }),
  )
  .use(require('webpack-hot-middleware')(compiler))
  .use(cookieParser())
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, '../static')));

app.get('/*', renderMiddleware);

export { app };
