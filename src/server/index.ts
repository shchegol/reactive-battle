import { app } from '@server/server';
import { sequelize } from '@server/database/sequelize';
import mongooseConnect from '@server/database/mongoose';

const fs = require('fs');
const path = require('path');
const https = require('https');

const key = fs.readFileSync(path.resolve('ssl/key.pem'));
const cert = fs.readFileSync(path.resolve('ssl/cert.pem'));
const server = https.createServer({ key, cert }, app);

const HOST = process.env.HOST || 'local.ya-praktikum.tech';
const PORT = process.env.PORT || 5000;

const info = `
  \x1b[32m######### SERVER IS RUNNING #########
  https://${HOST}:${PORT}
  
  HOST: ${HOST}
  PORT: ${PORT}
  #####################################\x1b[0m
`;

(async () => {
  await sequelize.sync({ force: true });

  mongooseConnect()
    .then(() => console.log('MongoDB is connected'))
    .catch((err: any) => console.log(err));

  server.listen(PORT, () => {
    console.log(info);
  });
})();
