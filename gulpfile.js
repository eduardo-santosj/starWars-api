// Requiring necessary packages
var gulp = require('gulp'),
		watch = require('gulp-watch'),
		jade = require('gulp-jade'),
		autoprefixer = require('gulp-autoprefixer'),
		sass = require('gulp-sass'),
		bless = require('gulp-bless'),
		imageMin = require('gulp-imagemin'),
		cssNano = require('gulp-cssnano'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		changed = require('gulp-changed'),
		browserSync = require('browser-sync'),
		gulpIf = require("gulp-if"),
		spriteSmith = require('gulp.spritesmith'),
		sourcemaps = require('gulp-sourcemaps');

var config = require('./.config.json');

// Prevent errors from shutting down Gulp
function swallowError (error) {
	console.log(error.toString())
	this.emit('end')
}

// Compile jade files to HTML (single file)
gulp.task('html', function() {
	gulp.src([config.routes.source + '/*.jade'])
		.pipe(changed(config.routes.dist), {extension: 'html'})
		.pipe(jade({
			pretty: true
		}))
		.on('error', swallowError)
		.pipe(gulp.dest(config.routes.dist));
});

// Compile SCSS files to CSS (single file)
gulp.task('css', function() {
	gulp.src(config.routes.source + '/scss/main.scss')
		.pipe(changed(config.routes.dist + '/css'), {extension: 'css'})
		.pipe(concat(config.output.cssFile))
		.pipe(sass())
		.on('error', swallowError)
		.pipe(autoprefixer())
		.pipe(bless())
		.pipe(cssNano())
		.pipe(gulp.dest(config.routes.dist + '/css'));
});

gulp.task('css-dev', function() {
	gulp.src(config.routes.source + '/scss/main.scss')
		.pipe(sourcemaps.init())
			.pipe(changed(config.routes.dist + '/css'), {extension: 'css'})
			.pipe(concat(config.output.cssFile))
			.pipe(sass())
			.on('error', swallowError)
			.pipe(autoprefixer())
			.pipe(bless())
			.pipe(cssNano())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.routes.dist + '/css'));
});

// Compile JS files into a single file
gulp.task('js', function() {
	gulp.src(config.routes.source + '/js/**/*.js')
		.pipe(changed(config.routes.dist + '/js'), {extension: 'js'})
		.pipe(concat(config.output.jsFile))
		.pipe(uglify())
		.on('error', swallowError)
		.pipe(gulp.dest(config.routes.dist + '/js'));
});

gulp.task('js-libs', function() {
	gulp.src(config.routes.source + '/js/libs/*.js')
		.pipe(changed(config.routes.dist + '/js/libs'), {extension: 'js'})
		.pipe(uglify())
		.on('error', swallowError)
		.pipe(gulp.dest(config.routes.dist + '/js/libs'));
});

// Compile fonts on the dist folder
gulp.task('fonts', function() {
	gulp.src(config.routes.source + '/fonts/**/*.*')
		.pipe(gulp.dest(config.routes.dist + '/fonts'));
});

//Sprite Image
gulp.task('sprite', function () {
	var spriteData = gulp.src(config.routes.source + '/img/icons/*.png')
	.pipe(spriteSmith({
    imgName: 'sprite.png',
		cssName: 'sprite.css',
		imgPath: '../img/sprite.png',
		padding: 20

  }));
	return spriteData
		.pipe(gulpIf('*.png', gulp.dest(config.routes.dist + '/img')))
		.pipe(gulpIf('*.css', gulp.dest(config.routes.dist + '/css')));
});

// Minifies all images like TinyPNG
gulp.task('img', function() {
	gulp.src(config.routes.source + '/img/**/*.*')
		.pipe(changed(config.routes.dist + '/img'))
		.pipe(imageMin())
		.pipe(gulp.dest(config.routes.dist + '/img'));
});

// Watch all editable files for browser-sync reload method
gulp.task('watch', function() {
	var html = gulp.watch([config.routes.source + '/index.jade', config.routes.source + '/jade/**/*.jade'], ['html']);
	var css = gulp.watch([config.routes.source + '/scss/**/*.scss'], ['css-dev']);
	var js = gulp.watch([config.routes.source + '/js/**/*.js'], ['js']);
});

// Defines browser-sync task
gulp.task('browser-sync', function() {
	browserSync.init([config.routes.dist], {
		proxy: config.bs.urlToGo,
		browser: config.bs.browserToOpen,
		port: config.bs.portToStart
  });
});


//Build task
gulp.task('build', ['html', 'css', 'js', 'js-libs', 'img', 'sprite', 'fonts']);

//Global task
gulp.task('default', ['html', 'css', 'js', 'js-libs', 'img', 'sprite', 'fonts', 'browser-sync', 'watch']);