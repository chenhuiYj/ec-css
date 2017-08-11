'use strict';
let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
/**
 * 编译sass文件
 */
gulp.task('sass', function () {
    return gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});
/**
 * 运行任务
 */
gulp.task('default', ['sass'], function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});
/**
 * 压缩css
 */
gulp.task('minify-css',() => {
    return gulp.src('./dist/css/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(gulp.dest('./dist/css'));
});