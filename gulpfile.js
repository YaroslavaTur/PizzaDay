const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function scss(){
    return gulp.src("./practice/sass/**/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("./practice/css"))
}

exports.scss = scss;

function scsswatch(){
    gulp.watch("./practice/sass/**/*.scss",scss)
}
exports.scsswatch = scsswatch;