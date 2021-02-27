import path from 'path';
import express, { Router } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import renderMiddleware from './render-middleware';
import { topicRouterFactory } from './routes/topicRouterFactory';
import { commentRouterFactory } from './routes/commentRouterFactory';

const bodyParser = require('body-parser');

const app = express();
const webpackConfig = require('../../webpack/ssr/client.dev.js');

const compiler = webpack(webpackConfig);

const router: Router = Router();

app
  .use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
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
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(bodyParser.urlencoded({
    extended: true,
  }))
  .use(bodyParser.json())
  .use(topicRouterFactory(router))
  .use(commentRouterFactory());

app.get('*', renderMiddleware);

export { app };
