'use strict';

let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/js', 'script.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(js)$/, use: 'babel-loader' },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html'),
  })],
};
