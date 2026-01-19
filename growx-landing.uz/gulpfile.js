
var gulp = require('gulp');
var gcmq = require('gulp-group-css-media-queries');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

function runFunc() {
  return gulp.src("draft/css/style.less")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(gcmq())
    .pipe(autoprefixer({
      cascade: true,
      overrideBrowserslist: ["last 15 version"]
    }))
    .pipe(gulp.dest("final/css/"))
    .pipe(browserSync.stream())  // 🔥 Добавлено для обновления браузера
    .pipe(rename({ suffix: "-min" }))
    .pipe(csso())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("final/css/"))
    .pipe(browserSync.stream()); // 🔥 Добавлено снова
}

gulp.task("runf", runFunc);
gulp.task("watch", function () {
  gulp.watch("draft/css/**/*.less", gulp.series("runf"));
  gulp.watch("final/index.html").on("change", browserSync.reload);
});
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./final"
      },
      port:9000
  });
});

gulp.task("default",gulp.parallel("browser-sync","watch"));