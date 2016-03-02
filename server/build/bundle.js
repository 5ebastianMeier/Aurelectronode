'use strict';

const gulp = require('gulp');
const bundler = require('aurelia-bundler');
const bundles = require('../bundles.js');

const config = {
  force: true,
  baseURL: '.',
  configPath: './config.js',
  bundles: bundles.bundles
};

gulp.task('bundle', ['unbundle', 'build'], function() {
  return bundler.bundle(config);
});

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});
