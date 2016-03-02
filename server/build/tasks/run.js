'use strict';

const gulp = require('gulp');
const exec = require('child_process').exec;

gulp.task('run', function(callback) {
  const childProcess = exec('node dist/index.js');
  childProcess.stdout.on('data', function(data) {
    console.log(data);
  });
  childProcess.stderr.on('data', function(data) {
    console.log(data);
  });
  childProcess.on('close', function(code) {
    console.log('exited with code: ' + code);
  });
});
