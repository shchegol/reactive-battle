import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import renderMiddleware from './render-middleware';

const app = express();
const webpackConfig = require('../../webpack/webpack.server.js');

const compiler = webpack(webpackConfig[1]);

app
  .use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig[1].output.publicPath,
      serverSideRender: true,
    }),
  )
  .use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr',
  }))
  .use(cookieParser())
  .use(cors({
    credentials: true,
  }))
  .use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', renderMiddleware);

export { app };
