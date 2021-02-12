const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const util = require('./webpack.utils');

module.exports = {
  target: 'web',
  entry: {
    main: util.resolve('src/index.tsx'),
  },
  output: {
    filename: 'bundle.js',
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
      '@store': util.resolve('src/store'),
      '@styles': util.resolve('src/styles'),
      '@utils': util.resolve('src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
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
        plugins: [
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
    new InjectManifest({
      swSrc: util.resolve('src/service-worker.js'),
      maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
    }),
  ],
};
