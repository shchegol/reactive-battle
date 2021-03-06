import { app } from '@server/server';
import { sequelize } from '@server/database/sequelize';
import { SiteTheme } from '@server/models/siteTheme';
import { Model } from 'sequelize-typescript';

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 5000;

const info = `
  \x1b[32m######### SERVER IS RUNNING #########\x1b[0m
  \x1b[32mNODE_ENV: ${process.env.NODE_ENV}\x1b[0m
  \x1b[32mhttps://${HOST}:${PORT}\x1b[0m
  \x1b[32m#####################################\x1b[0m
`;

let server;

if (process.env.NODE_ENV === 'production') {
  server = http.createServer(app);
} else {
  const key = fs.readFileSync(path.resolve('ssl/key.pem'));
  const cert = fs.readFileSync(path.resolve('ssl/cert.pem'));
  server = https.createServer({ key, cert }, app);
}

(async () => {
  try {
    // await sequelize.sync({ force: true });
    await sequelize.sync();

    // Main themes creating
    await SiteTheme.bulkCreate<Model<Partial<SiteTheme>>>([
      { theme: 'dark', description: 'Default dark theme' },
      { theme: 'light', description: 'Light theme' },
    ], { updateOnDuplicate: ['theme', 'description'] });
    console.log('\x1b[32mPostgreSQL is connected\x1b[0m');

    server.listen(PORT, () => {
      console.log(info);
    });
  } catch (e) {
    console.error(e);
  }
})();
