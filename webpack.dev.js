const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
  module.exports = {
    entry: './src/index.js',
    mode:'development',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin()]
  };