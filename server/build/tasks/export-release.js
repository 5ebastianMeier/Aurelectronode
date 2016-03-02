'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const paths = require('../paths');
const bundles = require('../bundles.js');
const resources = require('../export.js');

// deletes all files in the output path
gulp.task('clean-export', function() {
  return gulp.src([paths.exportSrv])
    .pipe(vinylPaths(del));
});

function getBundles() {
  const bl = [];
  for (b in bundles.bundles) {
    bl.push(b + '.js');
  }
  return bl;
}

function getExportList() {
  return resources.list.concat(getBundles());
}

gulp.task('export-copy', function() {
  return gulp.src(getExportList(), {base: '.'})
    .pipe(gulp.dest(paths.exportSrv));
});

// use after prepare-release
gulp.task('export', function(callback) {
  return runSequence(
    'bundle',
    'clean-export',
    'export-copy',
    callback
  );
});
