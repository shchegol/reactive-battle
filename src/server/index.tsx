import express from 'express';
import configureStore from '@store/store';
import { ApplicationState } from '@store/types';
import renderer from './html';

const server = express();
const PORT = process.env.PORT || 4000;

server.use(express.static('dist'));

server.get('*', (req, res) => {
  const store = configureStore({} as ApplicationState);
  const content = renderer(req.path, store, {});

  res.send(content);
});

server.listen(PORT, () => {
  console.log(`Running on :${PORT}`);
});
