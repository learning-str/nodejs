const browserSync = require('browser-sync').create()
const del = require('del')
const gulp = require('gulp')
const gulpSequence = require('gulp-sequence')

// BrowserSync

gulp.task('browser-sync', () => {
  browserSync.init({
    server: './build',
    port: 5000,
    notify: false,
    browser: 'google chrome',
  })
})

// Clean

gulp.task('clean', () => {
  return del('./build/*')
})

// Build

gulp.task('build:html', () => {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./build'))
})

gulp.task('build:js', () => {
  gulp.src('./src/**/*.js')
    .pipe(gulp.dest('./build'))
})

gulp.task('build:css', () => {
  gulp.src('./src/**/*.css')
    .pipe(gulp.dest('./build'))
})

// Tasks

gulp.task('build', gulpSequence(
  'clean',
  [
    'build:html',
    'build:js',
    'build:css',
  ]
))

gulp.task('start', gulpSequence(
  'build',
  'browser-sync',
))
