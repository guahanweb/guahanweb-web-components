'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    "weather-component": "./client/components/weather/index.js"
  },

  output: {
    path: path.join(__dirname, 'dist/components'),
    filename: '[name].js'
  },

  devtool: 'source-map',

  resolve: {
    modules: ['client/lib', 'node_modules'],
    extensions: ['.jsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
};
