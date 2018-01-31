const del = require('del')
const gulp = require('gulp')
const gulpSequence = require('gulp-sequence')

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
))
