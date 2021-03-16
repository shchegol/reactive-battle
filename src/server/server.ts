import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import router from '@server/routes';
import renderMiddleware from '@server/middlewares/render';
import logger from '@server/middlewares/logger';

require('dotenv').config({ path: '.env.local' });

const bodyParser = require('body-parser');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack/ssr/client.dev.js');

const ifProd = process.env.NODE_ENV === 'production';
const app = express();
const compiler = webpack(webpackConfig);

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

app.use(cookieParser())
  .use(cors({
    credentials: true,
  }))
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  .use(bodyParser.json())
  .use(router);

app.get('*', renderMiddleware);

export { app };
