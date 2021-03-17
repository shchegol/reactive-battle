const webpack = require('webpack');
const { merge } = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const util = require('../webpack.utils');
const common = require('../webpack.common.js');

require('dotenv').config({ path: '.env' });

module.exports = merge(common, {
  mode: 'production',
  entry: {
    main: util.resolve('src/index.tsx'),
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
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new InjectManifest({
      swSrc: util.resolve('src/service-worker.js'),
      maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
});
