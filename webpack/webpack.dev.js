const { merge } = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const util = require('./webpack.utils');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    autoprefixer,
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
  devServer: {
    contentBase: util.resolve('dist'),
    port: 4000,
    historyApiFallback: {
      index: './dist/index.html',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: util.resolve('src/index.html'),
      favicon: util.resolve('src/favicon.ico'),
      filename: 'index.html',
    }),
  ],
});
