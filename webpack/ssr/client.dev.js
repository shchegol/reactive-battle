const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const util = require('../webpack.utils');
const common = require('../webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: {
    main: [
      'webpack-hot-middleware/client?path=/__webpack_hmr',
      util.resolve('src/index.tsx')],
  },
  output: {
    filename: 'bundle.js',
    path: util.resolve('dist'),
    publicPath: '/',
  },
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
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
});
