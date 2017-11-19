'use strict';

const gulp = require('gulp');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
// const minifyCss = require('gulp-minify-css');
// const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const historyApiFallback = require('connect-history-api-fallback');

// Watch files for changes & reload
gulp.task('serve', function() {
  browserSync({
    port: 5000,
    notify: false,
    open: false,
    logPrefix: 'APP',
    files: [source('*'), 'index.html'],
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    },
    server: {
      baseDir: ['', 'node_modules'],
      middleware: [historyApiFallback()]
    }
  });

  gulp.watch(source('*'), browserSync.reload);
  gulp.watch('index.html', browserSync.reload);
});

// TODO: Prefix and minify the inlined CSS

// Build production files, the default task
gulp.task('default', function(cb) {
  gulp
    .src('src/overwebs-player-widget.js')
    .pipe(sourcemaps.init())
    .pipe(uglify({ toplevel: true, mangle: true, compress: { passes: 2 } }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));
});
