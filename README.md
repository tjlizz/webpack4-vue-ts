# 初始化
 ```
 $ mkdir webpack4-vue-ts

 $ cd webpack-4-vue-ts
 
 $ npm init -y
 
 $ mkdir src
 
 $ cd src
 
 $ touch index.ts
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
  entry: './src/index.ts',
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
  entry: 'index.ts',
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
  entry: './src/index.ts',
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

# Vue
## 安装
```
$ npm install -D vue  vue-loader vue-template-compiler
```
>每个 `vue` 包的新版本发布时，一个相应版本的 `vue-template-compiler` 也会随之发布。编译器的版本必须和基本的 `vue` 包保持同步，这样 `vue-loader` 就会生成兼容运行时的代码。这意味着你每次升级项目中的 `vue` 包时，也应该匹配升级 `vue-template-compiler`。
## webpack 配置

webpack.dev.js

```
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
      alias: {
          'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [new HtmlWebpackPlugin()]

};
```
## 入口文件
./src/index.ts
```
import Vue from 'vue'
const app = document.createElement('div')
app.textContent='{{message}}'
app.id = "app"
document.body.appendChild(app)
new Vue({
    el: '#app',
    data(){
        return{ 
            message:'hi vue'
        }
    }
})
```
## 运行
```
$ npm start
```

![](https://user-gold-cdn.xitu.io/2019/10/21/16dec2e7db5533af?w=808&h=310&f=png&s=12725)
## 第一个组件
 ###  安装依赖
 ```
  $ npm i -D  babel-core@6.26.3  babel-loader@7.1.5
 ```
 >`babel-core` 和`babel-loader`互相依赖特定的版本
 ### 配置webpack
 webpack.dev.js
 ```
 const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()]

};
 ```
 ### hello-world
 
 ./src/hello-world.vue
 ```
 <template>
  <div>
    <div>这是第一个Vue组件</div>
  </div>
</template>
<script>
export default {
  name: "hello-world"
};
</script>
 
 ```
 ./src/index.ts
 ```
 import Vue from 'vue'
import HelloWorld from './hello-world'
const app = document.createElement('div')
app.id = "app"
document.body.appendChild(app)
new Vue({
    el: '#app',
    render: h => h(HelloWorld)
})
 ```
 ### 运行
 ```
 $ npm start
 ```

![](https://user-gold-cdn.xitu.io/2019/10/21/16dec4a7a92ea76f?w=549&h=174&f=png&s=10900)
# webpack-merge
## 安装
```
$ npm install --save-dev webpack-merge
```
### 配置

 增加 `webpack.common.js`
 ```
 const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()]

};
 ```
 webpack.dev.js
 ```
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development'
 });
 ```
webpack.prod.js
 
```
 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production'
 });
```
 
  ### 目录调整
 ![](https://user-gold-cdn.xitu.io/2019/10/21/16dec5c0b8e5f5e9?w=210&h=280&f=png&s=12304)
  ###  package.json
```
 "scripts": {
    "start": "webpack-dev-server --config  ./config/webpack.dev.js",
    "build:dev": "npx webpack --config ./config/webpack.dev.js",
    "build": "npx webpack --config ./config/webpack.prod.js"
  },
```
# CSS
 ## 安装依赖
 ```
 $  npm install --save-dev style-loader css-loader
 ```

  ## webpack配置

```


 module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      }
    ]
  }
```
## 使用
./src/hello-world.vue
```
 <style  scoped>
 
  div{
      color :red;
  }
 </style>
```
## 运行


![](https://user-gold-cdn.xitu.io/2019/10/21/16dec78fe803ab3f?w=437&h=219&f=png&s=10899)