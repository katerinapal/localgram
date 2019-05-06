var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './js/app.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
	  filename: 'app',
	  libraryTarget: 'amd'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      { 
        test: /\.js$/,
        include: path.join(__dirname, '/'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015-without-strict']
        }
      },
      { 
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
    ]
  },
  devServer: {
    contentBase: "./"
  },
};
