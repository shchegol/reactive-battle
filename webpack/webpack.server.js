const webpack = require('webpack');
const { merge } = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const util = require('./webpack.utils');
const common = require('./webpack.common.js');

module.exports = [
  // server config
  merge(common, {
    target: 'node',
    mode: 'production',
    entry: '/src/server/index.ts',
    externals: [webpackNodeExternals()],
    output: {
      filename: 'server.js',
      path: util.resolve('dist'),
      publicPath: '/',
    },
    module: {
      rules: [{
        test: /\.scss$/,
        exclude: /node_modules/,
        use: 'null-loader',
      }],
    },
  }),
  // client config
  merge(common, {
    entry: {
      main: [
        'webpack-hot-middleware/client?path=/__webpack_hmr',
        util.resolve('src/index.tsx')],
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'resolve-url-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: 'bundle.css',
      }),
    ],
  }),
];
