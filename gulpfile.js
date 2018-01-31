const gulp = require('gulp')

gulp.task('html', () => {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./build'))
})

gulp.task('default', ['html'])
