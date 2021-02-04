const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('dist'));

// app.get('*', (_req, res) => {
//   res.sendFile(`${__dirname}/dist/index.html`);
// });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App started on port ${PORT}!`);
});
