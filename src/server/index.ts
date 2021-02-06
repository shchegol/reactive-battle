import express from 'express';
import configureStore from '@store/store';
import renderer from './renderer';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('dist'));

app.use((req, res) => {
  const { store } = configureStore(req.url);
  const content = renderer(req.url, store, {});

  res.send(content);
});

app.listen(PORT, () => {
  console.log(`Running on :${PORT}`);
});
