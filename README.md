# 初始化
 ```
 $ mkdir webpack4-vue-ts

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
##  使用
package.json
```
  "scripts": {
    "start":"webpack-dev-server --config  webpack.dev.js"
  }

```
## 运行

```
$ npm start
```
# webpack.prod.js
## 配置
```
$ touch webpack.prod.js
```
webpack.prod.js
```
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin()]

};
```
> 目前仅是把`webpack.dev.js`中的`mode`修改成`production`
## 使用
package.json
```
     "scripts":
      {
          "build:dev": "npx webpack --config webpack.dev.js",
          "build": "npx webpack --config webpack.prod.js"
      }

```
