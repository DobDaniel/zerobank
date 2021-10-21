const gulp = require('gulp');
const webp = require('gulp-webp');
 
gulp.task('default', () =>
    gulp.src('assets/images/*.png')
        .pipe(webp())
        .pipe(gulp.dest('assets/images/'))
);
