'use strict';

module.exports = {
  through: require('through2'),
  plumber: require('gulp-plumber'),
  sourcemaps: require('gulp-sourcemaps'),
  uglify: require('gulp-uglify'),
  rename: require('gulp-rename'),
  minifyHtml: require('gulp-minify-html'),
  csso: require('gulp-csso'),
  karma: require('../plugins/karma'),
  protractor: require('gulp-protractor'),
  inject: require('gulp-inject'),
  ngAnnotate: require('gulp-ng-annotate'),
  jshint: require('gulp-jshint'),
  sass: require('gulp-sass'),
  typescript: require('gulp-typescript'),
  coffee: require('gulp-coffee'),
  es6: require('gulp-babel'),
  filter: require('gulp-filter'),
  rev: require('gulp-rev'),
  revReplace: require('gulp-rev-replace'),
  webFontScss: require('../plugins/gulp-web-font-scss'),
  uglifySaveLicense: require('uglify-save-license'),
  runSequence: require('run-sequence'),
  mainBowerFiles: require('main-bower-files'),
  sort: require('sort-stream'),
  connect: require('gulp-connect'),
  open: require('gulp-open'),
  if: require('gulp-if'),
  useref: require('gulp-useref'),
  wiredep: require('wiredep').stream,
  merge: require('merge2'),
  angularFileSort: require('gulp-angular-filesort'),
  debug: require('gulp-debug'),
  wait: require('gulp-wait'),
  ngHtml2js: require('gulp-ng-html2js'),
  concat: require('gulp-concat'),
  replace: require('gulp-replace'),
  size: require('gulp-size'),
  manifest: require('gulp-manifest'),
  notify: require('gulp-notify')()
};
