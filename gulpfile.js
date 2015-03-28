var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	nodemon = require('gulp-nodemon');

gulp.task('lint', function() {
	return gulp.src('./app/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

gulp.task('dev', function () {
	nodemon({
		watch: 'app/*',
		script: 'app/server.js'
	}).on('restart', function () {
		console.log('restarted!');
	});
});


gulp.task('test', ['lint']);
gulp.task('default', ['dev']);
