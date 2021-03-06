'use strict';

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    rigger = require("gulp-rigger"),
    uglify = require("gulp-uglify"),
    autoprefixer = require("gulp-autoprefixer"),
    watch = require("gulp-watch"),
    rimraf = require("rimraf"),
    plumber = require("gulp-plumber"),
    imgmin = require("gulp-imagemin"),
    pngcrush = require("imagemin-pngcrush"),
    sourcemaps = require("gulp-sourcemaps"),
    cssmin = require("gulp-clean-css"),
    ftp = require("gulp-ftp"),
    json = require("gulp-json-transform"),
    browsersync = require("browser-sync"),
    reload = browsersync.reload;

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        libs: 'build/libs',
        css: 'build/css/',
        csslibs: 'build/css/libs',
        img: 'build/img/',
        libs: 'build/libs/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        libs: 'src/libs/**/*.js',
        style: 'src/style/*.scss',
        csslibs: 'src/style/libs/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        libs: 'src/libs/**/*.js',
        style: 'src/style/**/*.scss',
        csslibs: 'src/style/libs/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: 'build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    host: 'localhost',
    port: 9000,
    logPrefix: "browsersync"
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify().on('error', function (e) {
            console.log(e.message)
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('libs:build', function () {
    gulp.src(path.src.libs)
        .pipe(uglify())
        .pipe(gulp.dest(path.build.libs))
        .pipe(reload({stream: true}));
});

gulp.task('css:build', function () {
    gulp.src(path.src.csslibs)
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.csslibs))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false,
            remove: true
        }))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
});

gulp.task('fonts:build', function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'libs:build',
    'style:build',
    'css:build',
    'image:build',
    'fonts:build',
]);

gulp.task('watch', function () {
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.csslibs], function (event, cb) {
        gulp.start('css:build');
    });
    watch([path.watch.style], function (event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.libs], function (event, cb) {
        gulp.start('libs:build');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function (event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function (event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('browsersync', function () {
    browsersync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('_ftp', function () {
    var ftpjson = require('./ftp.json');
    return gulp.src('build/**')
               .pipe(ftp({
                   host: ftpjson.host,
                   user: ftpjson.user,
                   pass: ftpjson.pass,
                   remotePath: ftpjson.remotePath
               }));
});


gulp.task('_default', ['build', 'browsersync', 'watch']);
