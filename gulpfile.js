var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var copy        = require('gulp-copy');
// var sass        = require('gulp-sass');

const sass = require('gulp-sass')(require('sass'));

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/app.scss")
        //.pipe(sass({outputStyle: 'compressed'}))
        .pipe(sass())
        .pipe(gulp.dest("app/assets/css"))
        .pipe(browserSync.stream());
});

// jQuery
gulp.task('fa', function() {
  return gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./app/assets/js/'));
});

// Fornawesome fonts
gulp.task('jq', function() {
  return gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/**.*')
    .pipe(gulp.dest('./app/assets/webfonts/fa/'));
});

// JavaScript
gulp.task('js', function() {
  return gulp.src('./js/**.*')
    .pipe(gulp.dest('./app/assets/js/'));
});

// Images
gulp.task('images', function() {
  return gulp.src('./images/**.*')
    .pipe(gulp.dest('./app/assets/images/'));
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series(['sass', 'fa', 'images', 'jq', 'js'], function() {

    browserSync.init({
        server: "./app/"
    });

    gulp.watch("scss/*.scss", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));
