/****************************************
 * royioyg.com 
 * git@bitbucket.org:codey/royi.git
 *
 * author Carolina Yibirin-Stovall
 * copyright (c) 2015 ROYI
 * not licensed for public use
 ****************************************/

var gulp 		= require('gulp');
var livereload 	= require('gulp-livereload');
var prefix 		= require('gulp-autoprefixer');
var sass 		= require('gulp-ruby-sass');


/****************************************
 * tasks
 ****************************************/

gulp.task('scss', function() {
	sass('scss', {
			compass: true,
			style: 'expanded',
			lineNumbers: true,
			sourcemap: false
		})
		.pipe(prefix("last 5 versions", "> 1%"))
		.pipe(gulp.dest('css'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();

	gulp.watch('index.html', ['reload']);
	gulp.watch('scss/**/*.scss', ['scss']);
	gulp.watch('js/**/*.js', ['reload']);
	gulp.watch('img/**/*', ['reload']);
	gulp.watch('php/**/*.php', ['reload']);
});

gulp.task('reload', function() {
	gulp.src('')
		.pipe(livereload());
});

/****************************************
 * run tasks
 ****************************************/

gulp.task('default', ['scss', 'watch']);