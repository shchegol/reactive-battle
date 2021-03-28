const path = require('path');

const resolve = (dir) => path.join(__dirname, '..', dir);

const aliases = {
  '@api': resolve('src/api'),
  '@components': resolve('src/components'),
  '@engine': resolve('src/engine'),
  '@pages': resolve('src/pages'),
  '@root': resolve('src'),
  '@server': resolve('src/server'),
  '@store': resolve('src/store'),
  '@styles': resolve('src/styles'),
  '@utils': resolve('src/utils'),
};

module.exports = {
  resolve,
  aliases,
};
