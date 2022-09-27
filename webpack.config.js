/* eslint-disable import/order */
/* eslint-disable import/first */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackLighthousePlugin = require('webpack-lighthouse-plugin');
// import { WebpackLighthousePlugin } from 'webpack-lighthouse-plugin';

module.exports = {
  entry: './src/index.js',
  devServer: {
    static: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new WebpackLighthousePlugin({
    //   url: 'http://localhost:8080/webpack-dev-server/',
    // }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },

  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.css$/i, /\.(scss)$/],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer'),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        dependency: { not: ['url'] },
      },

    ],
  },

};