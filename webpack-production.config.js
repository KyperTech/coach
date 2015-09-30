'use strict';

var createWebpackConfig = require('./lib/create-webpack-config');

module.exports = createWebpackConfig({
  dev: false,
  outputFilename: 'bundle.js',
  outputLibraryTarget: 'commonjs2'
});
