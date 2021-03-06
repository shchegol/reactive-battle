const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const util = require('./webpack.utils');

module.exports = {
  target: 'web',
  entry: {
    main: util.resolve('src/index.tsx'),
  },
  output: {
    filename: '[name].[contenthash].js',
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
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: util.resolve('src/fonts'),
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name][contenthash].[ext]',
            },
          },
        ],
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: util.resolve('src/images'),
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
              name: '[name][contenthash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        loader: false,
        plugins: ['jpegtran', 'optipng', 'svgo'],
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: util.resolve('src/favicon.ico'),
          to: util.resolve('dist'),
        },
      ],
    }),

  ],
};
