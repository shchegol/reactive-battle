import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import renderMiddleware from './render-middleware';

const app = express();

app
  .use(cookieParser())
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, '../static')));

app.get('/*', renderMiddleware);

export { app };
