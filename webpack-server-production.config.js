'use strict';

var createWebpackConfig = require('./lib/create-webpack-config');

module.exports = createWebpackConfig({
  dev: false,
  entry: ['./index-server'],
  target: 'node',
  outputFilename: 'bundle-server.js',
  outputLibraryTarget: 'commonjs2'
});
