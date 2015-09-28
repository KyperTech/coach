'use strict';

var createWebpackConfig = require('./lib/create-webpack-config');

module.exports = createWebpackConfig({
  dev: false,
  target: 'node',
  outputFilename: 'bundle.js',
  outputLibraryTarget: 'commonjs2'
});
