const gulp = require('gulp');
const wiredep = require('wiredep').stream;
const browserSync = require('browser-sync').create();
const bower = require('gulp-bower');

gulp.task('default', ['run-app', 'watcher']);

gulp.task('watcher', () => {
  gulp.watch(['src/string.js'], ['serve-src', 'reload-app']);
  gulp.watch(['bower.json'], ['inject-vendor', 'reload-app']);
});

gulp.task('inject-vendor', ['bower'], () => {
  gulp.src('public/index.html')
.pipe(wiredep({ directory: 'public/lib' }))
.pipe(gulp.dest('public'));
});

gulp.task('bower', () => bower({
  cmd: 'install',
  directory: './public/lib',
  verbosity: 2
}));

gulp.task('serve-src', () => {
  gulp.src('src/string.js')
.pipe(gulp.dest('public'));
});

gulp.task('run-app', () => {
  browserSync.init({
    server: {
      baseDir: './public',
      index: 'index.html'
    },
    port: process.env.PORT || 3400,
    open: true,
  });
});

gulp.task('reload-app', () => {
  browserSync.reload();
});
