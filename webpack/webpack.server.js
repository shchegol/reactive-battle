const { merge } = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const webpackNodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const util = require('./webpack.utils');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  target: 'node',
  mode: 'production',
  entry: '/src/server/index.ts',
  externals: [webpackNodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
  output: {
    filename: 'bundle.js',
    path: util.resolve('build'),
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
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    autoprefixer,
                    cssnano,
                  ],
                ],
              },
            },
          },
          'resolve-url-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '../dist/bundle.css',
    }),
  ],
});
