let gulp = require("gulp"),
sourcemaps = require("gulp-sourcemaps"),
prefix = require("gulp-autoprefixer"),
concat = require("gulp-concat"),
notify = require("gulp-notify"),
uglify = require("gulp-uglify"),
sass = require("gulp-sass"),
image = require("gulp-image");
pug = require('gulp-pug');

//  MARKUPS TRIGGER
gulp.task("markups:task", function() {
  return gulp.src("src/markups/app_root.pug")
    .pipe(pug({pretty: true}))
    .pipe(concat('index.html'))
    .pipe(gulp.dest("dist"))
    // .pipe(notify("#HTML task done"));
});


// STYLES TRIGGER
gulp.task("styles:task", function() {
  return gulp.src(["src/styles/css/**/*.css", "src/styles/sass/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(concat("app_root.css"))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix())
    .pipe(sourcemaps.write("../../src/maps"))
    .pipe(gulp.dest("dist/css"))
    // .pipe(notify("#CSS task done"))
});


// SCRIPTS TRIGGER
gulp.task("scripts:task", function() {
  return gulp.src(["src/scripts/libs/*.*", "src/scripts/*.js"])
  .pipe(concat("app_root.js"))
  .pipe(uglify())
  .pipe(gulp.dest("dist/js"))
  // .pipe(notify("#JS task done"))
})


// IMAGES TRIGGER
gulp.task("images:task", function () {
  gulp.src(['src/images/*/*', 'src/images/port_icon.png'])
    .pipe(image())
    .pipe(gulp.dest("dist/images"));
});



gulp.task("staringAll", function() {
  gulp.watch("src/markups/**/*.*", gulp.series("markups:task"));
  gulp.watch("src/styles/**/*.*", gulp.series("styles:task"));
  gulp.watch("src/scripts/**/*.*", gulp.series("scripts:task"));
});




// DEFAULT "GULP" TRIGGER
gulp.task("default", gulp.series("staringAll"));

