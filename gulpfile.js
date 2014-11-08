var gulp = require('gulp');
var browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

// use default task to launch BrowserSync and watch files
gulp.task('default', ['browser-sync'], function () {

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    //gulp.watch("js/*.js", ['js', browserSync.reload]);

    gulp.watch("*.html", ['bs-reload']);
});
