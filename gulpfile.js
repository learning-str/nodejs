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

gulp.task('html', () => {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./build'))
})

gulp.task('default', gulpSequence(
  'clean',
  'html',
  'browser-sync',
))
