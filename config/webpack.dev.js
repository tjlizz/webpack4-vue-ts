const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
     devServer: {

         before: require('../mock/index.ts'),//引入mock/index.js

     },


 });