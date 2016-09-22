var gulp              = require('gulp');
var jade              = require('gulp-jade');
var webpackConfig     = require('./webpack.config');
var webpack           = require('webpack');
var gulpWebpack       = require('gulp-webpack');
var server            = require('gulp-develop-server');
var gulpsync          = require('gulp-sync')(gulp);

var src = {
  app: './src/app.js',
  html: './public/index.jade',
  server: './src/server.js',
};
var dest = './build/';

gulp.task('jade', function () {
  gulp.src(src.html)
    .pipe(jade({}))
    .pipe(gulp.dest(dest));
});

gulp.task('webpack', function () {
  return gulp.src(src.app)
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(dest));
});

gulp.task('server:start', function () {
  server.listen({ path: src.server });
});

gulp.task('default', gulpsync.sync(
  [
    'webpack',
    'jade',
    'server:start',
  ]
));
