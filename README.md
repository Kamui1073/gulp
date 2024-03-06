# gulp v1.0
###### Gulp前端构建工具
Created by Kamui on 2023/12/27.

## Install

### 安装Node.js

    https://nodejs.org/en/
    https://nodejs.org/dist/v14.18.1/
    
### 安装阿里npm镜像

    npm config set registry https://registry.npmmirror.com

### 查看npm源

    npm get registry

### 安装依赖
    npm install

### 功能
1、自动监听 App 文件夹下 html，css，js 与图片修改后自动刷新页面 运行 [serve]  
2、可选 sass 预处理器实时编译为css 运行 [ServeSass]  
3、自动打包 App 文件夹下代码到 src 文件夹生成 zip 文件；dist 文件夹为未压缩静态文件 运行 [build]  
4、编译 Sass 文件直接放入根目录 sass 文件夹内运行 [buildSass] 会生成css文件到根目录 css 下  
5、清除根目录 sass 与 css 文件夹与内容运行 [cleanSass]  
6、清除 src 与 dist 文件夹运行 [clean]

### 结构

    ├─app              //静态文件夹
    |  ├─sass          //存放未编译的scss文件
    |  ├─js            //引用的脚本
    |  ├─images        //存放图片
    |  ├─css           //编译后的scss文件，或css文件
    |  ├─.html         //静态html文件
    |─src                  //bulid后ZIP压缩包输出地址
    |─dist                 //bulid后静态文件输出地址
    |─lib                  //索引页面依赖文件
    |  ├─font-awesome      //图标库文件
    |  ├─antd.min.css      //Antd Vue依赖
    |  ├─antd.min.js       //Antd Vue依赖
    |  ├─data.js           //索引文件数据存放JS
    |  ├─main.js           //索引页JS
    |  ├─moment.min.js     //Antd Vue依赖
    |  ├─vue.min.js        //Vue
    |  ├─style.css         //索引页自定义样式
    |─sass           //单独编译sass存放位置
    |─css            //单独编译sass输出css位置
    |─index.html     //索引页
    |─gulpfile.js    //gulp配置文件
    |─package.json   //Node.js 配置文件
    |─README.md      //帮助文件

单独编译scss文件将文件放到scss运行：buildSass会编译合并到css目录

    buildScssStyles

页面文件放入App中按照App目录结构

### 开发历史

[![node-image]][node-url]
[![npm-image]][npm-url]
[![Gulp-image]][Gulp-url]


[Gulp-image]: http://img.shields.io/badge/Gulp-V4.0.1-red.svg?style=flat-square
[Gulp-url]: http://gulpjs.com/
[npm-image]: http://img.shields.io/badge/npm-V6.14.15-blue.svg?style=flat-square
[npm-url]: http://npm.taobao.org/
[node-image]: https://img.shields.io/badge/Node.js-V14.18.1-2BAF2B.svg?style=flat-square
[node-url]: http://nodejs.org/

## 1.0.1
`2024.3.6`
### 💎 功能优化
- 深色主题
### 🐛 问题修复
- 样式优化
