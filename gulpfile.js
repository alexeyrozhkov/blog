const gulp = require('gulp');
const browserSync  = require('browser-sync').create();
const less = require('gulp-less');

gulp.task('less', gulp.series(function () {
    return gulp.src('dev/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('build/css'));
}));

gulp.task('build', gulp.series('less'));

gulp.task('default', gulp.series(function() {
    browserSync.init({
        server: { baseDir: './' },
        startPath: 'main.html'
    });
    const html = gulp.watch('*.html');
    html.on('change', function() {
        console.log('html changed');
        browserSync.reload();
    })
    const less = gulp.watch('dev/less/*.less');
    less.on('change', gulp.series('less', function() {
        console.log('less changed');
        browserSync.reload();
    }))
}));