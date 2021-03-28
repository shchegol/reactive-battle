const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');
const dotenv = require('dotenv');
const util = require('../webpack.utils');

const isProd = process.env.NODE_ENV === 'production';
const plugins = [
  new CleanWebpackPlugin(),
];

if (!isProd) {
  dotenv.config({ path: '.env.local' });
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  );
}

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
    alias: util.aliases,
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
  plugins,
};
