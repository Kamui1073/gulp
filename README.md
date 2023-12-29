# gulp v1.0
###### Gulp前端构建工具
by Kamui

## Install

### 安装Node.js

    https://nodejs.org/en/
    https://nodejs.org/dist/v14.18.1/
    
### 安装淘宝镜像

    npm install --registry=https://registry.npmmirror.com

### 安装依赖
    npm install

### 结构

    ├─app            //静态文件夹
    |  ├─sass        //存放未编译的scss文件
    |  ├─js          //引用的脚本
    |  ├─images      //存放图片
    |  ├─css         //编译后的scss文件，或css文件
    |  ├─.html       //静态html文件
    |─src            //bulid后ZIP压缩包输出地址
    |─dist           //bulid后静态文件输出地址
    |─sass           //单独编译sass存放位置
    |─css            //单独编译sass输出css位置
    |─gulpfile.js    //gulp配置文件
    |─package.json   
    |─README.md      //帮助文件

单独编译scss文件将文件放到scss运行：buildSass会编译合并到css目录

    buildScssStyles

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

**1.0.0  2023.12.27**

-1.0版本
