/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),

    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost');

gulp.task('js', function(){
    return gulp.src([ 'src/uptilt/js/uptilt-awesome-form.js',
                      'src/uptilt/js/uptilt-modal.js',
                      'src/uptilt/js/fitvids.js',])
        .pipe(concat('_concat.js'))
        .pipe(gulp.dest('src/uptilt/js/_temp'))
        .pipe(rename('compiled.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js'));
});

gulp.task('styles', function() {
  return gulp.src([ 'resources/assets/sass/css-base.sass'])
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
        lost(),
        autoprefixer()
      ]))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('public/assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('resources/assets/sass/css-base.sass', ['styles']);
});
