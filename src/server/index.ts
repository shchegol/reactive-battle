import { app } from './server';
import { sequelize } from './database/sequelize';

const fs = require('fs');

const key = fs.readFileSync('./ssl/key.pem');
const cert = fs.readFileSync('./ssl/cert.pem');

const https = require('https');

const server = https.createServer({ key, cert }, app);

const PORT = process.env.PORT || 5000;

(async () => {
  await sequelize.sync({ force: true });

  server.listen(PORT, () => {
    console.log(`Running on :${PORT}`);
  });
})();
