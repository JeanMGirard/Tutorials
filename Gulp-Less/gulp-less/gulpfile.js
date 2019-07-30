/**
 *  Imports requirements
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    path = require('path'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');

const { series, parallel, task } = require('gulp');




/**
 * Defining Tasks
 *
 * Less
 */
task('less', function() {
    return gulp.src('./src/less/app.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});

task('build', parallel('less'));
task('dev', series('less-watch'));
/** 
 * default task 
 * > gulp
 */

function defaultTask(cb) {
    // place code here
    cb();
}  
exports.default = defaultTask







/**
 *  MORE EXEMPLES
 */

 /**
  * WATCH
  */
task('less-watch', function() {
    return watch('./src/less/**/*.less', { ignoreInitial: false })
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});
/**
 *  CONCAT - (Important que concat soit avant less)
 */
 task('less-concat', function(){
    return gulp.src('./src/less/**/*.less')
    .pipe(concat("style.less"))
    .pipe(less())
    .pipe(cleanCSS({debug: true, compatibility: 'ie8'}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}Kb`);
        console.log(`${details.name}: ${details.stats.minifiedSize}Kb`);
    }))
    .pipe(gulp.dest('./dist/concat'));
 });

 /**
  * SOURCEMAPS & MINIFY
  */
 task('minify-css',() => {
    return gulp.src('./src/*.css')
      .pipe(sourcemaps.init())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./dist/minify'));
});


 task('sourcemaps-css', function(){
    return gulp.src('./src/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/sourcemaps'));
 });
