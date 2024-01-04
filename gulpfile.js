/**
 * Created by Kamui on 2023/12/27.
 */
'use strict';
const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const clean = require('gulp-clean')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const zip = require('gulp-zip')

const SRC_Script = 'app/js/*.js';                       //默认js 路径
const SRC_Img = 'app/images/**';                        //默认images 路径
const SRC_Css = 'app/css/**';                           //默认css 路径
const SRC_Html = 'app/*.html';                          //html文件
const SRC_AppCss = 'app/css';                           //默认css 路径
const SRC_AppSass = 'app/sass/**/*.scss'                //scss文件
const SRC_Sass = 'sass/**/*.scss'                       //scss文件

const ROOT_Sass = 'sass'                               //scss文件
const CSS_SRC = 'css';                                 //css文件
const SRC = 'src';                                      //js 输出路径
const DEST_JS = 'dist/js/';                             //js 输出路径
const DEST_CSS = 'dist/css';                            //css 输出路径
const DEST_IMG = 'dist/images';                         //img  输出路径
const DEST_HTML = "dist";                               //html 输出路径

async function scssServe() {
    await browserSync.init({
        server: {
            baseDir: './',
        },
        files: [
            './lib/data.js',
            './lib/main.js',
            './index.html',
            'app/css/*.css',
            'app/image/**/**',
            'app/*.html',
            'app/js/*.js',
            'app/iframe/**'
        ],
        port: 9000
    })
    gulp.watch("app/sass/*.scss", gulp.series(buildAppScss))
}

function serve() {
    browserSync.init({
        server: {
            baseDir: './',
        },
        files: [
            './lib/data.js',
            './lib/main.js',
            './index.html',
            'app/css/*.css',
            'app/image/**/**',
            'app/*.html',
            'app/js/*.js',
            'app/iframe/**'
        ],
        port: 9000
    })
}

//清理文件
function cleanDest() {
    console.log('dist已清理...')
    return gulp.src(DEST_HTML,{allowEmpty:true})
        .pipe(clean())
}
function cleanSass() {
    console.log('Sass已清理...')
    return gulp.src(ROOT_Sass,{allowEmpty:true})
        .pipe(clean())
}
function cleanSrc() {
    console.log('src已清理...')
    return gulp.src(SRC,{allowEmpty:true})
        .pipe(clean())
}
function cleanCss() {
    console.log('CSS已清理...')
    return gulp.src(CSS_SRC,{allowEmpty:true})
        .pipe(clean())
}
//拷贝文件
function copyCSS() {
    console.log('CSS复制中...')
    return gulp.src(SRC_Css)
        .pipe(gulp.dest(DEST_CSS))
}
function copyImg() {
    console.log('图片复制中...')
    return gulp.src(SRC_Img)
        .pipe(gulp.dest(DEST_IMG))
}
function copyHTMl() {
    console.log('html复制中...')
    return gulp.src(SRC_Html)
        .pipe(gulp.dest(DEST_HTML))
}
function copyJSFiles() {
    console.log('js复制中...')
    return gulp.src(SRC_Script)
        // 输出一个未压缩过的版本
        .pipe(gulp.dest(DEST_JS))
}
function zipJSFiles() {
    console.log('js压缩中...')
    return gulp.src(SRC_Script)
        // 输出一个压缩过的并且重命名的文件 如foo.min.js
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(DEST_JS))
}
function zipFiles() {
    console.log('zip压缩中...')
    return gulp.src('dist/**')
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('src'))
}
function buildAppScss() {
    return gulp.src(SRC_AppSass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(SRC_AppCss));
}
//开发环境 编译Sass
function buildScss() {
    return gulp.src(SRC_Sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(CSS_SRC));
}
//css项目监听
exports.serve = gulp.series(serve)
//scss项目监听
exports.ServeScss = gulp.series(scssServe)
//编译scss
exports.buildSass = gulp.series(cleanCss,buildScss)
//清理
exports.clean = gulp.series(cleanDest,cleanSrc)
exports.cleanSass = gulp.series(cleanSass,cleanCss)
//压缩
exports.build = gulp.series(
    cleanSrc,
    cleanDest,
    copyCSS,
    copyImg,
    copyHTMl,
    copyJSFiles,
    zipFiles
)
