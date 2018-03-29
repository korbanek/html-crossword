/**
 * Commands:
 * 'gulp' - build all
 * 'gulp clean' - clean
 * 'gulp watch - watch for changes in src
 */

var
    // Config
    config = {
        autoprefixer: ['last 50 versions', 'IE 8']
    },

    // Dependencies
    browserSync = require('browser-sync'),
    gulp = require('gulp'),
    del = require('del'),
    path = require('path'),
    plugins = require('gulp-load-plugins')(),
    streamqueue = require('streamqueue'),
    rename = require('gulp-rename'),

    // Paths
    base = {
        src: 'src'
    },
    assets = 'build',
    paths = {
        styles: {
            src: base.src + '/scss',
            dest: assets + '/css'
        },
        scripts: {
            dir: base.src + '/js',
            src: base.src + '/js/**/*.js',
            dest: assets + '/js'
        },
        static: {
            src: base.src + '/static/**/*',
            dest: assets + '/static'
        }
    };
jsQueue = [
    paths.scripts.dir + '/**/!(main)*.js',
    paths.scripts.dir + '/model/*.js',
    paths.scripts.dir + '/main.js'
]

// Clean
gulp.task('clean', function (cb) {
    return del(assets, cb);
});

// Default task
gulp.task('default', function () {
    gulp.start('styles', 'scripts', 'static');
});

// Watch
gulp.task('watch', function () {
    gulp.watch(paths.styles.src + '/**/*.scss', ['styles']);
    gulp.watch(paths.scripts.src, ['scripts']);
    gulp.watch(paths.static.src, ['static']);
});

// Styles
gulp.task('styles', function () {
    return gulp
        .src(paths.styles.src + '/main.scss')
        .pipe(plugins.changed(paths.styles.dest))
        .pipe(plugins.sourcemaps.init())
        .pipe(
            plugins.sass({
                outputStyle: 'normal'
            })
            .on('error', plugins.notify.onError({
                title: 'Sass Error',
                subtitle: '<%= error.relativePath %>:<%= error.line %>',
                message: '<%= error.messageOriginal %>',
                open: 'file://<%= error.file %>',
                onLast: true
            }))
        )
        .pipe(plugins.cleanCss({
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        .pipe(plugins.autoprefixer({
            browsers: config.autoprefixer,
            cascade: false
        }))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('scripts.bundle', function () {
    var stream = streamqueue({
        objectMode: true
    });

    stream.queue(gulp.src(jsQueue))

    return stream.done()
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('bundle.js'))
        .pipe(plugins.changed(paths.scripts.dest))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('scripts', function () {
    gulp.start('scripts.bundle');
});

// Static
gulp.task('static', function () {
    return gulp
        .src(paths.static.src)
        .pipe(gulp.dest(paths.static.dest));
});
