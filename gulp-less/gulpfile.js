/**
 *  Imports requirements
 */
var gulp = require('gulp'),
    watch = require('gulp-watch');

const { series, parallel, task } = require('gulp');
var less = require('gulp-less');
var path = require('path');

/** 
 * Defining Tasks
 */

function build_less(){
    return gulp.src('./less/**/*.less')
        .pipe(less({
            paths: [ "./less/**/*.less" ]})
        )
        .pipe(gulp.dest('./dist/css'));
}
task('less', function() {
    return build_less()
});
task('watch-less', function() {
    return watch('./less/**/*.less', { ignoreInitial: false })
        .pipe(less({
            paths: [ "./less/**/*.less" ]})
        )
        .pipe(gulp.dest('./dist/css'));
});

/** 
 * Defining default task (>> gulp)
 */


function defaultTask(cb) {
    // place code for your default task here
    cb();
}  

exports.default = defaultTask