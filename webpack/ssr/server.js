const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');
const util = require('../webpack.utils');

require('dotenv').config(
  {
    path: process.env.NODE_ENV === 'production'
      ? '.env'
      : '.env.local',
  },
);

module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  entry: '/src/server/index.ts',
  externals: [webpackNodeExternals()],
  optimization: {
    minimize: false,
  },
  output: {
    filename: 'server.js',
    path: util.resolve('dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss'],
    alias: {
      '@api': util.resolve('src/api'),
      '@components': util.resolve('src/components'),
      '@engine': util.resolve('src/engine'),
      '@pages': util.resolve('src/pages'),
      '@root': util.resolve('src'),
      '@server': util.resolve('src/server'),
      '@store': util.resolve('src/store'),
      '@styles': util.resolve('src/styles'),
      '@utils': util.resolve('src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|png|jpg|gif|svg)$/,
        loader: 'null-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};
