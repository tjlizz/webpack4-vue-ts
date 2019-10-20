# 初始化
 ```
 $ mkdir 'webpack4-vue-ts'

 $ cd webpack-4-vue-ts
 
 $ npm init -y
 
 $ mkdir src
 
 $ cd src
 
 $ touch index.js
 ```
# 安装`webpack`

```
$ npm init -y

$ npm install --save-dev webpack webpack-cli

```
# 初始化`webpack.dev.js`

webpack.dev.js
```
const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```


# HtmlWebpackPlugin
## 安装
```
$ npm install --save-dev html-webpack-plugin
```
## 使用
```
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
```
# webpack-dev-server
## 安装
```
npm install webpack-dev-server --save-dev
```
##  配置
package.jsongit
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"npx webpack-dev-server --config webpack.dev.js"
  },

```