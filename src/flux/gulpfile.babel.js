import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import watchify from 'watchify';
import notify from 'gulp-notify';
/*压缩合并 */
import uglify from 'gulp-uglify';
import minifyCss from 'gulp-minify-css';
import minifyHtml from 'gulp-minify-html';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
/**版本号处理**/
import usemin from 'gulp-usemin';
import rev from 'gulp-rev';
import revCollector from 'gulp-rev-collector';
import gulpif from 'gulp-if';


/*server启动 */
import browserSync, {
    reload
} from 'browser-sync';
import fs from 'fs';
import url from 'url';
import path from 'path';
/*其他 */
import header from 'gulp-header';
import rename from 'gulp-rename';

const condition = true;
const version = process.env.npm_package_version || '0.0.1';

const DEVELOPMENT_HEADER = [
    '/**',
    ' * react sales v<%= version %>',
    ' */',
].join('\n') + '\n';

const PRODUCTION_HEADER = [
    '/**',
    ' * react sales v<%= version %>',
    ' *',
    ' * Copyright (c) 2016-present, gloomhu, Inc. All rights reserved.',
    ' *',
    ' * This source code is react sales tools ',
    ' */',
].join('\n') + '\n';


const paths = {
    root_dist: '../../dist/',
    manifests_src: './manifests/',
    js_dist: '../../dist/js/',
    js_entry: './index.js',
    js_bundle: 'bundle.js',
    css_src: './styles/*.css',
    css_dist: '../../dist/styles/',
    css_bundle: 'bundle.css',
    font_src: ['./styles/*', '!styles/*.css'],
    font_dist: '../../dist/styles/',
    images_src: './images/*',
    images_dist: '../../dist/images/'
};

const customOpts = {
    entries: [paths.js_entry],
    debug: true
};

const opts = Object.assign({}, watchify.args, customOpts);
gulp.task('browserSync', () => {
    browserSync({
        server: {
            baseDir: paths.root_dist,
            middleware: function(req, res, next) {

                var urlObj = url.parse(req.url, true);
                var mathod = req.mathod;
                if (!urlObj.pathname.match(/^\/source/)) {
                    next();
                    return;
                }
                var mockDataFile = path.join(__dirname, urlObj.pathname) + ".js";
                console.log(mockDataFile);
                //file exist or not
                fs.access(mockDataFile, fs.F_OK, function(err) {
                    if (err) {
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({
                            "status": "没有找到此文件",
                            "notFound": mockDataFile
                        }));
                        return;
                    } else {
                        var data = fs.readFileSync(mockDataFile, 'utf-8');
                        res.setHeader('Content-Type', 'application/json');
                        res.end(data);
                    }
                });
                next();
            }
        }
    });
});

gulp.task('js', () => {
    let bundler = watchify(browserify(opts));

    function rebundle() {
        return bundler.bundle()
            .on('error', notify.onError())
            .pipe(source(paths.js_bundle))
            .pipe(buffer())
            .pipe(header(DEVELOPMENT_HEADER, {
                version: version,
            }))
            .pipe(rev())
            .pipe(gulp.dest(paths.js_dist))
            .pipe(rev.manifest())
            .pipe(gulp.dest(paths.manifests_src + 'js/'))
            .pipe(reload({
                stream: true
            }));
    }
    bundler.transform(babelify)
        .on('update', rebundle);
    return rebundle();
});

gulp.task('css', () => {
    gulp.src(paths.css_src)
        .pipe(minifyCss())
        .pipe(concat(paths.css_bundle))
        .pipe(header(DEVELOPMENT_HEADER, {
            version: version,
        }))
        .pipe(rev())
        .pipe(gulp.dest(paths.css_dist))
        .pipe(rev.manifest())
        .pipe(gulp.dest(paths.manifests_src + 'styles/'));
});

gulp.task('font', () => {
    gulp.src(paths.font_src)
        .pipe(gulp.dest(paths.font_dist));
});

gulp.task('img', () => {
    gulp.src(paths.images_src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images_dist));
});

gulp.task('html', () => {
    gulp.src([paths.manifests_src + '**/*.json', './*.html'])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest(paths.root_dist));
});

gulp.task('debug',['browserSync','js','css','font','img','html']);

gulp.task('start', ['browserSync', 'debug']);
gulp.task('default', ['browserSync', 'debug']);