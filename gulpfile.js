const { src, dest, parallel } = require('gulp')
const ts 		= require('gulp-typescript')
const gutil 	= require('gulp-util')
const watch 	= require('gulp-watch')

function typescript() {
	return watch('./src/**/*.ts', function () {
		src('./src/**/*.ts')
		.pipe(ts({noImplicitAny: true}))
		.pipe(dest('./dist/'))
	})
}

exports.default = parallel(typescript)